import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  forecastHandler: (days: number) => void;
}

export const ForecastWeather = ({ forecastHandler }: Props) => {
  const handleForecast = (days: number) => {
    forecastHandler(days);
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => handleForecast(1)}>
        <Text>forecast for tomorrow</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  button: {
    width: 260,
    color: '#fff',
    fontWeight: '800',
    fontSize: 24,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
