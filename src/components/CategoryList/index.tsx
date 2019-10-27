import React from 'react';
import { FlatList } from 'react-native';
import { UserCategory } from '../../lib';
import CategoryItem from '../CategoryItem';

interface CategoryListProps {
  data: UserCategory[],
  handler: any,
  category: UserCategory
}

const CategoryList = ({data, handler, category}: CategoryListProps) => (
  <FlatList data={data} renderItem={({ item }) => (
    <CategoryItem name={item.name} id={item.id} isCategory={category ? category.id === item.id : false} handler={handler} />
  )} keyExtractor={item => item.id}/>
);

export default CategoryList;
