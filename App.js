import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider'


export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require("./Image/logo.png")}
      style={styles.logo}
       />

       <Text style={styles.title}>20 Caracteres</Text>

       <View style={styles.area}>
          <Slider
          style={styles.slide}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000 '
          thumbTintColor='#392de9'
          />
       </View>

       <TouchableOpacity style={styles.btn}> 
        <Text style={styles.btntxt}>Gerar Senha</Text>
       </TouchableOpacity>
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
    justifyContent: 'center'
    
  }
});
