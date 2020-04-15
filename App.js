import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions , Button ,Image } from 'react-native';
import { LinearGradient } from 'expo-Linear-gradient';
import { blue } from 'color-name';

//Get screen dimensions
const {heigh, width } = Dimensions.get('window') ;

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={['#fff' , '#fff']}>
        <Text style={styles.appTitle}>New neighbour</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Name"/>
          <TextInput style={styles.input} placeholder="Phone number"/>
          <TextInput style={styles.input} placeholder="Adress"/>
          <TextInput style={styles.input} placeholder="About me"/>
          <Button title='Save' onPress={() => {}} color='pink'/>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },

  appTitle: {
    color: '#fff',
    fontSize: 36 ,
    marginTop: 60 ,
    marginBotton: 30 ,
    fontWeight: '300' ,
    backgroundColor: 'blue'
  },

  card: {
    backgroundColor: '#fff' ,
    flex: 1 ,
    width: width-25 ,
    borderTopLeftRadius: 10 ,
    borderTopRightRadius: 10
  },

  input: {
    padding: 20 ,
    borderBottomColor: '#bbb' ,
    borderBottomWidth: 1 ,
    fontSize: 24 ,
    borderColor: 'pink'
  }
});
