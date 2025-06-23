import { FlatList, Text, View } from 'react-native';

const productos = ['Lionel messi', 'Cristiano Ronaldo', 'Diego Armando Maradona', 'Angel Di Maria'];

export default function Productos() {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text style={{ padding: 10 }}>{item}</Text>}
    />
  );
}
