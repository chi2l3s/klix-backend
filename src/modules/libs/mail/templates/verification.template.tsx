import * as React from 'react'
import { Body, Head, Heading, Html, Link, Preview, Section, Tailwind, Text } from "@react-email/components"

interface VerificationTemplateProps {
    domain: string
    token: string
}

export function VerificationTemplate({ domain, token } : VerificationTemplateProps) {
    const verificationLink = `${domain}/account/verify?token=${token}`

    return (
        <Html>
            <Head />
            <Preview>Верификация аккаунта</Preview>
            <Tailwind config={{
                theme: {
                    extend: {
                        colors: {
                            primary: "#07393c"
                        }
                    }
                }
            }}>
                <Body className='max-w-2xl mx-auto p-6 bg-slate-50'>
                    <Section className='text-center mb-8'>
                        <Heading className='text-3xl text-black font-bold'>
                            Подтверждение вашей почты
                        </Heading>
                        <Text className='text-base text-black'>
                            Спасибо за регистрацию в экосистеме KLIX! Чтобы
                            подтвердить свой адрес электронной почты,
                            пожалуйста, перейдите по следующей ссылке:
                        </Text>
                        <Link 
                            href={verificationLink} 
                            className='inline-flex justify-center items-center rounded-full text-sm font-medium text-white bg-primary px-5 py-2'
                        >
                            Подтвердть почту
                        </Link>
                    </Section>

                    <Section className='text-center mt-8'>
                        <Text className='text-gray-600'>
                            Если у вас есть вопросы или вы столкнулись с
                            трудностями, не стесняйтесь обращаться в нашу
                            службу поддержки по адресу{' '}
                            <Link
                                href='mailto:help@klixx.ru'
                                className='text-primary underline'
                            >
                                help@klixx.ru
                            </Link>
                        </Text>
                    </Section>
                </Body>
            </Tailwind>
        </Html>
    )
}