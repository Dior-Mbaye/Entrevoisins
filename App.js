import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';
import { Image , Icon} from 'react-native-elements' ;

const DATA = [
  {
    id: '1',
    image: 'https://i.pravatar.cc/150?u=838433638',
    title: 'Caroline',
  },
  {
    id: '2',
    image: 'https://i.pravatar.cc/150?u=838433638',
    title: 'Jack',
  },
  {
    id: '3',
    image: 'https://i.pravatar.cc/150?u=838433638',
    title: 'Chloé',
  },
  {
    id: '4',
    image: 'https://i.pravatar.cc/150?u=838433638',
    title: 'Vincent',
  },
  {
    id: '5',
    image: 'https://i.pravatar.cc/150?u=838433638',
    title: 'Elodi',
  },
  {
    id: '6',
    image: 'https://i.pravatar.cc/150?u=838433638',
    title: 'Sylvin',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Image
          style={styles.tinyLogo}
          source={{uri : 'https://i.pravatar.cc/150?u=838433638'}}
      />
      <Text style={styles.title}>{title}</Text>
      <Icon name='delete'/>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});
