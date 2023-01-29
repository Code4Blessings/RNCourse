import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
       <Text style={styles.secondText}>Another Piece of Text</Text>
      </View>
       <Text style={styles.secondText}>Hello Robin!</Text>
       <Button title='Tap Me!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondText: {
    margin: 16, 
    borderWidth: 2, 
    borderColor: 'blue', 
    padding: 16
  },
});

