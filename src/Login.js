import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,Button } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text style={styles.baseText}>
                Please Login
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <Button
                title="Login"
                onPress={() =>
                    navigation.navigate('Dashboard')
                }
            />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontFamily: "Cochin"
      },
      titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
});

export default Login;