/*
* File: App.js
* Author: Bán Cnitia
* Copyright: 2022, Bán Cintia
* Group: Szoft II/N
* Date: 2022.01.10
* Github: https://github.com/bncinti/
* Licenc: GNU GPL
*/

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, } from 'react-native';

export default function App() {
  const [side, setSide] = useState();
  const [area, setArea] = useState();

  function calcArea() {
    let result = (Math.pow(side, 2) * Math.sqrt (25+10*Math.sqrt(5,2))) / 4
    setArea(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>
        Pentagon terület számító
        </Text>

      <Text style={styles.sidea}>Oldal</Text>
      
      <TextInput 
      style={styles.input}
      placeholder="Oldalhosszúság"
      onChangeText={ side => setSide(side) }/>
      
      <Button 
        title="Számít"
        onPress={calcArea}
        color='black'
      />

      <Text style={styles.areatext}>A pentagon területe: </Text>
      <Text style={styles.result}>{area}</Text>

      <Text style={styles.info}>A program kiszámolja egy pentagon (ötszög) területét.
        <br/> Bán Cintia <br/> 2022.01.10 </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f0fb',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
  },
  input: {
    borderWidth: 1,
    width: '50%',
    marginTop: 8,
    marginBottom: 15,
    textAlign: 'center'
  },
  mainTitle: {
    fontSize: 35,
    marginBottom: 27,
    fontWeight: 'bold',
  },
  sidea: {
    fontSize: 20,
    marginBottom: 10,
  },
  areatext: {
    marginTop: 10,
    marginBottom: 8,
    fontSize: 17,
  },
  info:{
    textAlign: 'center',
    position: 'relative',
    right: 500,
    top: 160,
  },
  result: {
    fontSize: 15,
  },
});

