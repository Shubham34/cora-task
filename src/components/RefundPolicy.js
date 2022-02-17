import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function index () {
  return (
    <View style={styles.mainContent}>
      <View style={styles.content}>
        <Text style={styles.para}>
          Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  head: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 20,
    marginStart: 20,
    paddingBottom: 5
  },
  para: {
    paddingBottom: 10
  }
})