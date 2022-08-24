import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <Text style={{color: '#FFF'}}>
                Olá mundo
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})