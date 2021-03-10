import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

const getAll = (category) => {
  return axios.get(`http://prointeractive.com.br/beta/go/wp-json/wp/v2/${category}`);
}


getAll('product').then((res) => {
  res.data.map(
    (item)=> console.log(item.title.rendered)
    );
}).catch(error => {
  console.log(error)
});

  return (
    <View style={styles.container}>
      <Text>React Native Woocomerce</Text>
      <StatusBar style="auto" />
    </View>
  );

}