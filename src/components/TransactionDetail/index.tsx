import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DetailItem from '../DetailItem';
import Client, { Transaction } from '../../lib';

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#fafafa",
    height: 8
  }
});

const client = new Client();

interface TransactionDetailProp {
  navigation: any
}

interface TransactionDetailState {
  data: Transaction
}

export default class TransactionDetail extends Component<TransactionDetailProp, TransactionDetailState> {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { navigation } = this.props;
    const data = await client.fetchTransaction(navigation.getParam("id", "NO_ID"));
    console.log("data", data);
    this.setState({data});
  }

  navigate(id: string, category: string) {
    const { navigation } = this.props;
    navigation.navigate("ChangeCategory", {
      transactionId: id,
      categoryId: category
    });
  }
  render() {
    return (
      <View>
        <View style={styles.divider}></View>
        {this.state.data && <DetailItem data={this.state.data} handler={this.navigate} />}
      </View>
    );
  }
}
