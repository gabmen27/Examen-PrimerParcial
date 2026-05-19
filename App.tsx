import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Provider from './provider/Provider';
import Navegacion from './components/Navegacion';

export default function App() {
  return (
 <Provider>
    <Navegacion />
 </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
