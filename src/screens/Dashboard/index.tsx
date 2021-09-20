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
    Title
} from './styles';

export function Dashboard() {
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

                <TransactionCard />
            </Transactions>
        </Container>
    );
}