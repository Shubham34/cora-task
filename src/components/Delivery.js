import React from "react"
import { View, Text, StyleSheet } from "react-native"
 

export default function index (){
  
  return (
    <View style={styles.mainContent}>
      <Text style={styles.head}>
        Free Delivery in 48 Hours
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    margin: 20
  },
  head: {
    fontSize: 18,
    color: 'green',
    paddingBottom: 10,
  },
  para: {
    paddingBottom: 10
  }
})