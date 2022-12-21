import React from "react";
import styles from "./styles";
import { Image, View, Text, TextInput, TouchableOpacity, Button } from "react-native";

export function Login() {
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
        <TouchableOpacity style={styles.buttonLogin}>
            <Text style={{color: '#FFF'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCadastrar}>
            <Text style={{color: '#FFF'}}>CADASTRE-SE</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{color: '#FFF'}}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
