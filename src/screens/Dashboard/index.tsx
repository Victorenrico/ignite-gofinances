import React from 'react';

import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date:"14/04/2020"
        },
        {
            id: '2',
            type: 'negative',
            title:"Pizzaria",
            amount:"R$ 59,69",
            category:{
                name: 'Alimentação',
                icon: 'coffee'
            },
            date:"14/04/2020"
        },
        {
            id: '3',
            type: 'positive',
            title:"Desenvolvimento de site",
            amount:"R$ 12.000,00",
            category:{
                name: 'Vendas',
                icon: 'shopping-bag'
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
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    );
}