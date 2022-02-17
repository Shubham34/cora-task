import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={styles.mainContent}>
      <Text style={styles.name}>Vitamin D3 Oral Solution 60000IU</Text>
      <Text style={styles.brand}>DePURA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  brand: {
    fontSize: 20,
    color: 'orange',
    paddingBottom: 10
  },
  mainContent: {
    padding: 10,
    backgroundColor: 'white'
  }
})