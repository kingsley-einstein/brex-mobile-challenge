import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  columnFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 1,
    width: "100vw"
  },
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100vw"
  },
  leftText: {
    color: "silver",
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 14,
    marginBottom: 16
  },
  rightText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 14,
    marginBottom: 18
  },
  topText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 14,
    marginBottom: 8,
    marginTop: 16
  },
  divider: {
    flex: 1
  }
});

const TransactionItem = ({name, amount, category, id, handler}) => (
  <TouchableOpacity onPress={() => handler(id)}>
    <View style={styles.columnFlex}>
      <Text style={styles.topText}>{name}</Text>
    <View style={styles.rowFlex}>
      <Text style={styles.leftText}>{category}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.rightText}>${amount}</Text>
    </View>
  </View>
  </TouchableOpacity>
);

export default TransactionItem;
