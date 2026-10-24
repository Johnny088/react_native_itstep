import { WeatherType } from '@/types/weather';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  weather: WeatherType;
}

export const CurrentWeather = ({ weather }: Props) => {
  return (
    <View style={styles.container}>
      <Text>CurrentWeather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
