import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app! </Text>
      <StatusBar style="auto" />
    </View>
  );
}
//yorum satırı
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'springgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    flexWrap: 'wrap'
  }
});