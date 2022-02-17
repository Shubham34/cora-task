import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.priceDiscounted}>Price: 680 Rs </Text>
      <Text style={styles.priceMax}>
       MRP 900 Rs 
      </Text>
      <Text style={styles.greenDiscountPercent} >
          20 % off
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  priceMax: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 11,
    textAlignVertical: "center"
  },
  priceDiscounted: {
    color: 'green',
    textAlignVertical: "center",
    fontSize: 20
  },
  mainContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    textAlignVertical: "center",
    paddingStart: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  greenDiscountPercent: {
    color: 'green',
    fontSize: 10
  }
})