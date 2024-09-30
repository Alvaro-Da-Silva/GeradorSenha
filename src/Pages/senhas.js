import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import useStorage from '../hooks/useStorage';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ItemSenha } from '../components/modal/itemSenha';

export function Senhas(){
    const[listasenhas,setListasenhas] = useState([])
    const foco = useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(() =>{
        async function caregarsenhas() {
            const senhas = await getItem("@pass");
            setListasenhas(senhas)

            
        }
        caregarsenhas();
    }, [foco])

   async function DeletarSenha(item){
        const senhas = await removeItem("@pass", item)
        setListasenhas(senhas)

    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList 
                style={styles.lista}
                data={listasenhas}
                keyExtractor={(item) => String(item)}
                renderItem={({item}) => <ItemSenha data={item} removerSenha={() => DeletarSenha(item)}/>}
                />
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
      },
      content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
      },
      lista:{
        flex: 1,
        paddingTop: 14,
      }
})