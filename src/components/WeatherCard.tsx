import { type ForecastDay } from '@/types/weather';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  weather: ForecastDay;
}

export const WeatherCard = ({ weather }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.location}>
        <Text style={styles.data}>{weather.date}</Text>
      </View>
      <View style={styles.main}>
        <Image
          source={{ uri: 'http:' + weather.day.condition.icon }}
          style={styles.icon}
        />
        <View>
          <Text style={styles.min}>min: {weather.day.mintemp_c}°</Text>
          <Text style={styles.max}>max: {weather.day.maxtemp_c}°C</Text>
        </View>
      </View>

      <Text style={styles.description}>{weather.day.condition.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  location: {
    marginBottom: 15,
  },
  data: {
    color: 'navy',
    fontSize: 18,
    fontWeight: 500,
  },
  icon: {
    width: 90,
    height: 90,
    marginRight: 15,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  min: {
    fontSize: 18,
    fontWeight: '700',
    color: 'blue',
  },
  max: {
    fontSize: 18,
    fontWeight: '700',
    color: 'red',
  },
  description: {
    fontSize: 24,
    color: 'teal',
  },
});
