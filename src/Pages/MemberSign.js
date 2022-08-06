import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}){
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userHometown, setUserHomeTown] = useState(null);

    function handleSubmit(){

        if( !userName || !userSurname || !userAge || !userHometown ){  // Herhangi bir input bos kalırsa.
            Alert.alert('Zeyrek Fitness Salonu', 'Bilgilerden herhangi birisi boş bırakılamaz.');
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userHometown,
        };

        navigation.navigate('MemberResultScreen', {user});
    }

    return(
        <SafeAreaView >
            <Text style={styles.title} > Member Sign </Text>
            <Input label="Üye Adi" placeHolder="Üyenin adini giriniz..." onCahngeText={setUserName} />
            <Input label="Üye Soyadi" placeHolder="Üyenin soyadini giriniz..." onCahngeText={setUserSurname} />
            <Input label="Üye Yaşı" placeHolder="Üyenin yaşını giriniz..." onCahngeText={setUserAge} />
            <Input label="Üye Memleketi" placeHolder="Üyenin memleketini giriniz..." onCahngeText={setUserHomeTown} />
            <Button style={styles.buttonText} text="Üye Oluştur" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
    }
})

export default MemberSign;