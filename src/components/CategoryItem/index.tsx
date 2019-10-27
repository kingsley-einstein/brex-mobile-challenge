import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  textItem: {
    marginLeft: 14,
    marginTop: 16,
    marginBottom: 16,
    color: "black",
    fontSize: 15
  },
  viewFlexItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  divider: {
    flex: 1
  },
  icon: {
    marginRight: 14,
    fontSize: 20
  }
});

const CategoryItem = ({name, isCategory, id, handler}) => (
  <TouchableOpacity onPress={() => handler(id)}>
    <View style={styles.viewFlexItem}>
      <Text style={styles.textItem}>{name}</Text>
      <View style={styles.divider}></View>
      {isCategory && <Ionicons name="md-checkmark" color="#e9794b" style={styles.icon}/>}
    </View>
  </TouchableOpacity>
);

export default CategoryItem;
