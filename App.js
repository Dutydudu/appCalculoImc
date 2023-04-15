import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

import {styles} from './styles';

export default function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState(0);
  const [retorno, setRetorno] = useState('Classificação');
  
 
  function Verificar(){
    const res = peso / (altura ** 2);
    setResultado(res);
    

    if (peso === 0 || altura === 0) {
      alert('Digite um valor:');
      return;
    }
    
    if (res < 18.5) {
      setRetorno(  'Abaixo do Peso' );
    } else if (res >= 18.6 && res <= 24.9) {
      setRetorno(  'Peso Normal' );
    } else if (res >= 25 && res <= 29.9) {
      setRetorno(  'Acima do peso' );
    } else if (res >= 30 && res <= 40) {
      setRetorno(  'Obesidade de grau II' );
    } else if (res >= 40) {
      setRetorno(  'Obesidade de grau III (Morbida)' );
    }
  }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Calculadora de IMC</Text>

          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Image
              source={{
                uri: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/08/escala-IMC-logo.jpg',
              }}
              style={{ width: 250, height: 150, marginTop: 10 }}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Digite o peso "
            onChangeText={(peso) => setPeso( peso )}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite a altura"
            onChangeText={(altura) => setAltura( altura )}
          />

          <Button title="Verificar" color='#9fd86b' onPress={Verificar} />

          <Text style={styles.texto}> {resultado} </Text>
          <Text style={styles.texto}> {retorno} </Text>
        </View>
      </View>
    );
  }
