import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import useStorage from '../hooks/useStorage';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Senhas(){
    const[listasenhas,setListasenhas] = useState([])
    const foco = useIsFocused();
    const {getItem} = useStorage();

    useEffect(() =>{
        async function caregarsenhas() {
            const senhas = await getItem("@pass");
            console.log(senhas);

            
        }
        caregarsenhas();
    }, [foco])


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
        </SafeAreaView>    
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        backgroundColor:'#392de9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
      },
      title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',

      }
})