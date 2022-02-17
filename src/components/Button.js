import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function index ({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'orange',
        margin: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
})