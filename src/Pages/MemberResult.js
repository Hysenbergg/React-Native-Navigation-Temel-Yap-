import React from 'react';
import { SafeAreaView, Text, StyleSheet, View} from 'react-native';

function MemberResult({route}){
    
    const {user} = route.params;  // Diğer sayfadan gönderilen verileri bir sabite atadık.
    
    return(
        <SafeAreaView style={styles.container} >
            <Text style={styles.title} > Üye </Text>
            <View style={styles.info_container} >
                <Text style={styles.label}> Adi: {user.userName} </Text>
                <Text style={styles.label}> Soyadi: {user.userSurname} </Text>
                <Text style={styles.label}> Yaşi: {user.userAge} </Text>
                <Text style={styles.label}> Memleketi: {user.userHometown} </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        borderWidth: 4,
        borderColor: '#AF7AB3',
        textAlign: 'center',
        padding: 5,
        borderRadius: 10,
        width: 200,
    },
    info_container: {
        margin: 10,
       

    },
    label: {
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 10,
    }
})

export default MemberResult;