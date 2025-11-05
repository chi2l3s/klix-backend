import { PrismaService } from '@/src/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ConfirmationEnum, CurrencyEnum, YookassaService, type PaymentCreateRequest, ConfirmationEmbedded, PaymentMethodsEnum } from 'nestjs-yookassa'
import { CreatePaymentInput } from './inputs/create-payment.input';

@Injectable()
export class SubscriptionService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly yookassaService: YookassaService
    ) {}

    async createPayment(input: CreatePaymentInput) {
        const { method } = input

        const paymentData: PaymentCreateRequest = {
            amount: {
                value: 149,
                currency: CurrencyEnum.RUB
            },
            capture: true,
            description: "Подписка на Klix Music",
            confirmation: {
                type: ConfirmationEnum.redirect,
                return_url: "http://localhost:3000/music"
            },
            payment_method_data: {
                type: method as any
            },
            metadata: {
                order_id: '123456'
            }
        }

        const newPayment = await this.yookassaService.createPayment(paymentData);

        return {
            id: newPayment.id,
            status: newPayment.status,
            description: newPayment.description,
            confirmation: {
                type: newPayment.confirmation.type,
                confirmationUrl: newPayment.confirmation["confirmation_url"]
            }
        };
    }
}
