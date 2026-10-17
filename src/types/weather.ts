export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
}
export interface Condition {
  text: string;
  icon: string;
  code: number;
}
export interface Current {
  last_updated: string;
  temp_c: number;
  feelslike_c: number;
  humidity: number;
  wind_kph: number;
  wind_dir: string;
  preassure_mb: number;
  vis_km: number;
  uv: number;
  cloud: number;
  condition: Condition;
  is_day: number;
}

export interface WeatherType {
  location: Location;
  current: Current;
}
