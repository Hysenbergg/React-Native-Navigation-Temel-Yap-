import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

function Welcome(props) {

    function gotoMemberSign(){    // Burada üye kayıt sayfasına gittiğimiz fonksiyon.
        props.navigation.navigate('MemberSignScreen');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.welcomeText}> Zeyrek Fitness'a Hoşgeldiniz </Text>
            <Button text="Üye Kaydı Oluştur" onPress={gotoMemberSign} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
})

export default Welcome;