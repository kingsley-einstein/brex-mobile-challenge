import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const styles = StyleSheet.create({
  columnFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    marginBottom: 14
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
  },
  marginized: {
    marginTop: 8
  },
  lowerTopText: {
    color: "black",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 14,
    marginBottom: 12,
    marginTop: 16,
    textTransform: "uppercase"
  },
  lowerRightText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 14,
    marginBottom: 14
  },
  lineDivider: {
    backgroundColor: "#fafafa",
    height: 8
  },
  coloredRightText: {
    color: "#e9794b",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 14,
    marginBottom: 14
  }
});

const DetailItem = ({data, handler}) => (
  <View style={styles.marginized}>
    <View style={styles.columnFlex}>
      <Text style={styles.topText}>{data.merchant.name}</Text>
      <View style={styles.rowFlex}>
        <Text style={styles.leftText}>{data.merchant.merchantCategory.name}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.rightText}>${data.amount}</Text>
      </View>
    </View>
    <View style={styles.lineDivider}></View>
    <View style={styles.columnFlex}>
      <Text style={styles.lowerTopText}>Details</Text>
      <View style={styles.rowFlex}>
        <Text style={styles.leftText}>Purchased at</Text>
        <View style={styles.divider}></View>
        <Text style={styles.lowerRightText}>{new Date(data.purchaseTime).toDateString()}</Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.leftText}>Merchant name</Text>
        <View style={styles.divider}></View>
        <Text style={styles.lowerRightText}>{data.merchant.name}</Text>
      </View>
      <View style={styles.rowFlex}>
        <Text style={styles.leftText}>Website</Text>
        <View style={styles.divider}></View>
        <Text style={styles.coloredRightText}>{data.merchant.website}</Text>
      </View>
    </View>
    <View style={styles.lineDivider}></View>
    <View style={styles.columnFlex}>
      <Text style={styles.lowerTopText}>Accounting</Text>
      <TouchableOpacity onPress={() => handler(data.id, data.integration.category ? data.integration.category.id: '')}>
        <View style={styles.rowFlex}>
          <Text style={styles.leftText}>QuickBooks Category</Text>
          <View style={styles.divider}></View>
          <Text style={styles.coloredRightText}>{data.integration.category ? data.integration.category.name : null} <Ionicons name="ios-arrow-forward" color="#e9794b"/></Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default DetailItem;
