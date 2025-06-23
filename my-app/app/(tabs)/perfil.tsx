import { View, Text, Image } from 'react-native';

export default function Perfil() {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: 'https://www.ceroacero.es/img/planteis/new/01/31/9520131_miguel_merentiel_20241216175509.jpg' }} style={{ width: 120, height: 120, borderRadius: 60 }} />
      <Text style={{ fontSize: 18, marginTop: 10 }}>Usuario: Mirko2de</Text>
    </View>
  );
}
