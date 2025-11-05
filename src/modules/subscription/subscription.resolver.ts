import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubscriptionService } from './subscription.service';
import { PaymentDetailsModel } from './models/payment-details.model';
import { CreatePaymentInput } from './inputs/create-payment.input';
import { Authorization } from '@/src/shared/decorators/auth.decorator';

@Resolver('Subscription')
export class SubscriptionResolver {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Authorization()
  @Mutation(() => PaymentDetailsModel, { name: "createPayement" })
  async createPayment(@Args('data') input: CreatePaymentInput) {
    return this.subscriptionService.createPayment(input);
  }
}
