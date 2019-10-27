import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryList from '../CategoryList';
import Client, { UserCategory } from '../../lib';

const client = new Client();

const styles = StyleSheet.create({});

interface ChangeCategoryProps {
  navigation: any
}

interface ChangeCategoryState {
  data: UserCategory[],
  category: UserCategory
}

export default class ChangeCategory extends Component<ChangeCategoryProps, ChangeCategoryState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
      category: null
    };
    this.getCategories();
    this.changeCategory = this.changeCategory.bind(this);
  }

  async getCategories() {
    const { navigation } = this.props;
    const data = await client.fetchUserCategories();
    const category = await client.fetchUserCategory(navigation.getParam("categoryId", "NO_ID"));
    this.setState({data, category});
  }

  async changeCategory(categoryId: string) {
    const { navigation } = this.props;
    await client.updateTransactionUserCategory(navigation.getParam("transactionId", "NO_ID"), categoryId);
    navigation.navigate("Transactions");
  }

  render() {
    const { data, category } = this.state
    const notUndefinedOrNull = !!data || !!category
    return (
      <View>
        {notUndefinedOrNull && <CategoryList data={data} handler={this.changeCategory} category={category} />}
      </View>
    );
  }
}
