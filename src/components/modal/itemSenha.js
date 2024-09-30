import React from "react";
import { View,Text,StyleSheet,Pressable } from "react-native";

export  function ItemSenha({data,removerSenha}) {
    return(
        <Pressable onLongPress={removerSenha} style={styles.conteiner}>
            <Text style={styles.txt}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    txt:{
        color: '#fff'
    }
})