import { View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import * as Clipboard from 'expo-clipboard'

export function ModalApp({password, handleClose}){

   async function copiarsenha(){
    await Clipboard.setStringAsync(password)
    alert("Senha copiada")

    handleClose();
    }
    return(
        <View style={styles.conteiner}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable style={styles.boxsenha} onLongPress={copiarsenha}>
                    <Text style={styles.txt}>{password}</Text>
                </Pressable>
                <View style={styles.boxbtns}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttontxt}> Voltar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonsave]}>
                        <Text style={styles.buttonsavetxt}> Salvar senha </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: '#fff',
        width: '85%',
        paddingBottom: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        margin: 24,
    },
    boxsenha:{
        backgroundColor: '#0e0e0e',
        width: '90%',
        padding: 14,
        borderRadius: 8,
    },
    txt:{
        color: '#fff',
        textAlign: 'center',
    }, 
    boxbtns: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginBottom: 14,
        marginTop: 14,
        padding: 8,
    },
    buttonsave:{
        backgroundColor: '#392DE9',
        borderRadius: 8,
    },
    buttonsavetxt:{
        color:'#fff',
        fontWeight: 'bold',

    }
})