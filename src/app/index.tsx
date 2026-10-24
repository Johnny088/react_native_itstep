import { CurrentWeather } from '@/components/CurrentWeather';
import { ForecastWeather } from '@/components/ForecastWeather';
import { SearchBar } from '@/components/SearchBar';
import { WeatherDetails } from '@/components/WeatherDetails';
import {
  getCurrentWeather,
  getThreeDaysForecast,
} from '@/services/weatherService';
import { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import type { WeatherType } from '@/types/weather';

export default function Index() {
  const [city, setCity] = useState<string>('Dnipro');
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadWeather = async (cityName: string) => {
    if (!cityName.trim()) {
      setError('The city name cannot be empty');
      return;
    }
    try {
      setCity(cityName);
      setLoading(true);
      const result = await getCurrentWeather(city);
      // console.log(result);
      setWeather(result);
    } catch (err: any) {
      setError('Error: ' + err);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // getCurrentWeather('Dnipro');
    // getThreeDaysForecast('Dnipro', 3);
    loadWeather(city);
  }, []);
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather inform</Text>
        <Text style={styles.subtitle}>WeatherAPI.com</Text>
      </View>

      <SearchBar
        city={city}
        onSearch={() => loadWeather(city)}
        onChangeText={setCity}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}> getting weather's data...</Text>
        </View>
      )}

      {!loading && weather && (
        <View>
          <CurrentWeather weather={weather} />
        </View>
      )}

      <WeatherDetails />
      <ForecastWeather />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6ff',
  },

  content: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 50,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    color: 'navi',
    marginTop: 4,
    textAlign: 'center',
  },

  loading: {
    alignItems: 'center',
    padding: 40,
  },

  loadingText: {
    marginTop: 12,
    color: '#555',
  },

  error: {
    backgroundColor: '#fee2e2',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },

  errorText: {
    color: '#991b1b',
    fontSize: 16,
  },

  retry: {
    marginTop: 15,
    backgroundColor: '#dc2626',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  retryText: {
    color: '#fff',
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
  },
});
