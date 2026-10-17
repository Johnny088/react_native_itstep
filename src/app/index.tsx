import { Text, View, StyleSheet } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/Colors';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'red',
  },
});
