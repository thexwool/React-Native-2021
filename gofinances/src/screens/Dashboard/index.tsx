import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native'
import { HighLightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighLightCards,
    Transactions,
    Title,
    TransactionsList,
    LogoutButton
} from "./styles";

export interface DataListProps extends TransactionCardProps {
    id: string
}

export function Dashboard() {
    const [data, setData] = useState<DataListProps[]>([])

    const loadTransactions = async () => {
        const dataKey = '@gofinances:transactions'
        const response = await AsyncStorage.getItem(dataKey)
        const transactions = response ? JSON.parse(response) : []

        const transactionsFormatted: DataListProps[] = transactions
            .map((item: DataListProps) => {
                let amount = Number(item.amount).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
                amount = amount.replace('R$', 'R$ ')

                const date = Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit'
                }).format(new Date(item.date))

                return {
                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.type,
                    category: item.category,
                    date
                }
            })

            setData(transactionsFormatted)
    }

    useFocusEffect(
        useCallback(() => {
            loadTransactions()
        }, [])
    )

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/80503557?v=4.png' }} />

                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Allan</UserName>
                        </User>
                    </UserInfo>

                    <LogoutButton onPress={() => {}}>
                        <Icon name='power' />
                    </LogoutButton>
                </UserWrapper>
            </Header>

            <HighLightCards>
                <HighLightCard
                    type='up'
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighLightCard
                    type='down'
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighLightCard
                    type='total'
                    title="Total"
                    amount="R$ 16.171,00"
                    lastTransaction="01 à 18 de abril"
                />
            </HighLightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>

                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}