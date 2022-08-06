import React from "react";
import { Text, View, TextInput } from 'react-native';
import styles from './Input.style';

function Input ({label, placeHolder, onCahngeText}) {
    return(
        <View style={styles.container} >
            <Text style={styles.label} > {label} </Text>
            <View style={styles.inputContainer} >
                <TextInput placeholder={placeHolder} onChangeText={onCahngeText} />
            </View>
        </View>
    )
}

export default Input;