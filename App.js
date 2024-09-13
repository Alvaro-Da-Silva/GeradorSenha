import { StyleSheet, Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/Pages/home';
import { Senhas } from './src/Pages/senhas';

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator>

       <Tab.Screen 
       name='Home'  
       component={Home} 
       options={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          if(focused){
            return <Ionicons name="home" size={24} color="black" />
          }
          return <Ionicons name="home-outline" size={24} color="black" />

        } 


       }}
       
       />

       <Tab.Screen
        name='Senha' 
        component={Senhas} 
        options={{ 
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            if(focused){
              return <Ionicons name="lock-closed" size={24} color="black" /> 
            }
            return <Ionicons name="lock-closed-outline" size={24} color="black" />
  
          } 

        }}
        />
     </Tab.Navigator>
    </NavigationContainer>

 
  )
}

  




