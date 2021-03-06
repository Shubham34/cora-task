import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function index () {
  return (
    <View style={styles.mainContent}>
      <View style={styles.content}>
        <Text style={styles.para}>
          Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
        </Text>
        <Text style={styles.para}>
          You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
        </Text>
        <Text style={styles.para}>
          Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.
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