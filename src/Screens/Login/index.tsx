import styles from "./styles";
import { Image, View, Text, TextInput, TouchableOpacity, } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";



export function Login() {
 const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../../images/logo.png")}
      />
      <Text style={styles.containerTitle}>iRemember</Text>
      <Text style={styles.containerSubtitle}>
        Nunca mais esqueça a hora de tomar seu remédio!
      </Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholderTextColor='#DEDEDE' placeholder="Seu Email" />
        <TextInput style={styles.input} placeholderTextColor='#DEDEDE' placeholder="Sua Senha" keyboardType="numeric" />
        <TouchableOpacity style={styles.buttonLogin}
          onPress={() => {navigation.navigate('Home')}}
        >
            <Text style={{color: '#FFF'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.buttonCadastrar} 
         onPress={() =>{ navigation.navigate('SignUp')}}
         >
            <Text style={{color: '#FFF'}}>CADASTRE-SE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{color: '#FFF'}}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
