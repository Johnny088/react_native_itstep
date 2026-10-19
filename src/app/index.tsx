import { CurrentWeather } from '@/components/CurrentWeather';
import { ForecastWeather } from '@/components/ForecastWeather';
import { SearchBar } from '@/components/SearchBar';
import { WeatherDetails } from '@/components/WeatherDetails';
import {
  getCurrentWeather,
  getThreeDaysForecast,
} from '@/services/weatherService';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  useEffect(() => {
    // getCurrentWeather('Dnipro');
    getThreeDaysForecast('Dnipro', 3);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <SearchBar />
      <WeatherDetails />
      <CurrentWeather />
      <ForecastWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    color: 'red',
  },
});
