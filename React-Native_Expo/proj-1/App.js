import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './pages/List';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World</Text>
    //   <Text>Goodbye!!!</Text>
    //   <Text>Hi bitch </Text>
    //   <StatusBar style="auto" />
    // </View>
    <List />
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
