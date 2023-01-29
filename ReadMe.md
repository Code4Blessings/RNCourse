# RNCourse
React_Native Course Inspired by Udemy course by Academind  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197320#overview

## Core Components, Styling, & Colors

**A typical skeleton for a React Native Component**

1. Import of the components from react-native
2. Functional Component
3. Stylesheet

```
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
});

```