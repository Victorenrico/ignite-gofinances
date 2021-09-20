import React from 'react';

import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard } from '../../components/TransactionCard';

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
    TransactionsList
} from './styles';

export function Dashboard() {
    const data = [
        {
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date:"14/04/2020"
        },
        {
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date:"14/04/2020"
        },
        {
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date:"14/04/2020"
        }
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/26679579?v=4' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Victor</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighLightCards>
                <HighLightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.000,00" 
                    lastTransaction="Data aqui"
                />
                <HighLightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 12.000,00" 
                    lastTransaction="Data aqui" 
                />
                <HighLightCard
                    type="total"
                    title="Total" 
                    amount="R$ 16.000,00" 
                    lastTransaction="Data aqui" 
                />
            </HighLightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionsList 
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                    showsVerticalScrollIndicator={false}
                />
            </Transactions>
        </Container>
    );
}