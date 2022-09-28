import { StatusBar } from "react-native";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.secao1}>
        <Text style={styles.texto}>
          “Atividade 1”
        </Text>
        <Text style={styles.texto}>
          Nome: Gabriel Meira de Oliveira
        </Text>
        <Text style={styles.texto}>
          RA: 2019203025
        </Text>
        <Text style={styles.texto}>
          19/09/2022
        </Text>
      </View>
      <View style={styles.secao2}>
        <View style={styles.quadradoVermelho}></View>
        <View style={styles.quadradoVerde}></View>
        <View style={styles.quadradoAzul}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secao1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  texto: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },

  secao2: {
    flex: 1,
    backgroundColor: '#EEE',
  },

  quadradoVermelho: {
    backgroundColor: '#A20202',
    position: 'absolute',
    left: 200,
    top: 150,
    height: 50,
    width: 50,
    zIndex: 2,
  },

  quadradoVerde: {
    backgroundColor: '#02FA2F',
    position: 'absolute',
    left: 190,
    top: 150,
    height: 50,
    width: 50,
    zIndex: 3,
  },

  quadradoAzul: {
    backgroundColor: '#00AAFF',
    position: 'absolute',
    left: 200,
    top: 190,
    height: 50,
    width: 50,
    zIndex: 1,
  },
});
