import { StyleSheet, Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider'
import { ModalApp } from './src/components/modal';

export default function App() {

  let senhas ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const[size,setSize] = useState(10)
  const[valorsenha,setValorsenha] = useState("")
  const[estadomodal,setEstadomodal] = useState(false)
  function gerarsenha(){
    let senha = "";
    for(let i = 0, n = senhas.length; i < size; i++){
      senha += senhas.charAt(Math.floor(Math.random() * n))
    }
    setValorsenha(senha)
    setEstadomodal(true);
  }


  return (
    <View style={styles.container}>
      <Image
      source={require("./Image/logo.png")}
      style={styles.logo}
       />

       <Text style={styles.title}>{size} Caracteres</Text>

       <View style={styles.area}>
          <Slider
          style={styles.slide}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000 '
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0)) }
          />
       </View>

       <TouchableOpacity style={styles.btn} onPress={gerarsenha}> 
        <Text style={styles.btntxt}>Gerar Senha</Text>
       </TouchableOpacity>

       <Modal visible={estadomodal} animationType='fade' transparent={true} >
         <ModalApp password={valorsenha} handleClose={() => setEstadomodal(false)}/>
       </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60,

  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor:"#FFF",
    borderRadius: 8,
    padding: 8,
  },
  btn:{
    backgroundColor: '#392de9',
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,


  },
  btntxt:{
    color: '#fff',
    fontSize: 20,

  }, 
  slide:{
    height: 50,
    width: "100%",   
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
