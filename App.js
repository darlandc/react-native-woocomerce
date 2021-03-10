import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  const [state, setState] = useState({ data: [] });

  const getAll = (category) => {
    return axios.get(`http://prointeractive.com.br/beta/go/wp-json/wp/v2/${category}`);
  }

  getAll('product').then((res) => {
    setState({
      data: res.data
    });
  }).catch(error => {
    console.log(error)
  });

  if (state.data.length > 0) {
    return (
      <View style={styles.container}>
        <Text>React Native Woocomerce</Text>
        <StatusBar style="auto" />
        <main>
            <ul>
              {state.data.map((item) => (
              <li key={item.id}>{item.title.rendered}</li>
            ))}
            </ul>
          </main>
      </View>
    );
  } 
    else {
      return null
    }

}