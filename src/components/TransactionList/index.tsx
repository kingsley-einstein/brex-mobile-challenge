import React from 'react';
import { Transaction } from '../../lib';
import { FlatList } from 'react-native';
import TransactionItem from '../TransactionItem';

interface TransactionListProps {
  data: Transaction[],
  handler: any
}

const TransactionList = ({data, handler}: TransactionListProps) => (
  <FlatList data={data} renderItem={({ item }) => (
    <TransactionItem name={item.merchant.name} amount={item.amount} category={item.merchant.merchantCategory.name} id={item.id} handler={handler}/>
  )} keyExtractor={item => item.id} />
);

export default TransactionList;
