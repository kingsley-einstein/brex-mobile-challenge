import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import components from './components';

const { 
  Home,
  TransactionDetail,
  ChangeCategory
} = components;

const Navigator = createStackNavigator({
  Transactions: {
    screen: Home,
    path: '/',
    navigationOptions: {
      headerBackTitle: "Transactions",
      headerTitle: "Transactions",
      headerTitleStyle: {
        fontWeight: "bold",
        marginHorizontal: "4px"
      },
      headerTitleContainerStyle: {
        left: "30%"
      }
    }
  },
  Details: {
    screen: TransactionDetail,
    path: '/transaction/:id',
    navigationOptions: {
      headerTitle: "Details",
      headerTitleStyle: {
        fontWeight: "bold",
        marginHorizontal: "4px",
        color: "black"
      },
      headerTitleContainerStyle: {
        left: "50%"
      },
      headerBackTitleStyle: {
        color: "#e9794b"
      },
      headerTintColor: "#e9794b"
    }
  },
  ChangeCategory: {
    screen: ChangeCategory,
    path: '/transaction/:transactionId/:categoryId',
    navigationOptions: {
      headerTitle: "Change Category",
      headerTitleStyle: {
        fontWeight: "bold",
        marginHorizontal: "4px",
        color: "black"
      },
      headerTitleContainerStyle: {
        left: "40%"
      },
      headerBackTitleStyle: {
        color: "#e9794b"
      },
      headerTintColor: "#e9794b"
    }
  }
}, {
  initialRouteName: "Transactions",
  headerMode: "screen",
  headerBackTitleVisible: true,
  navigationOptions: ({navigation}) => ({
    headerTitle: `${navigation.state.routeName}`
  })
});

const Container = createAppContainer(Navigator);

const App = () => {
  return (
    <Container />
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default App;
