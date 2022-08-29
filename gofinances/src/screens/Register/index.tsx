import React from 'react'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import {
    Container,
    Fields,
    Form,
    Header,
    Title,
    TransactionTypes
} from './styles'

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder='Nome'
                    />
                    <Input
                        placeholder='Preço'
                    />

                    <TransactionTypes>
                        <TransactionTypeButton 
                            type='up'
                            title='Income'
                        />
                        <TransactionTypeButton 
                            type='up'
                            title='Income'
                        />
                    </TransactionTypes>
                </Fields>

                <Button title='Enviar' />
            </Form>
        </Container>
    )
}