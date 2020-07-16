import { useState, useCallback } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import { ICoord } from '../../services/models/OpenWeatherModel';

export function useGeolocation() {
  const [coords, setCoords] = useState<ICoord | null>(null);

  const getGeolocation = useCallback(() => {
    Geolocation.getCurrentPosition(({ coords: newCoords }) => setCoords({
      lat: newCoords.latitude,
      lon: newCoords.longitude,
    }), ({ message }) => {
      Alert.alert(message);
    });
  }, []);

  return {
    coords, getGeolocation,
  };
}
