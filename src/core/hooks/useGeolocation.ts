import { useState, useCallback } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert, PermissionsAndroid } from 'react-native';
import { ICoord } from '~/services/models/OpenWeatherModel';

/**
 * @description hooks to get Geolocation coords and request location permissions
 */
export function useGeolocation() {
  const [coords, setCoords] = useState<ICoord | null>(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted;
    } catch (err) {
      Alert.alert('Erro ao checar permissões');
      return false;
    }
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === 'granted';
    } catch (err) {
      Alert.alert('Erro ao requisitar permissões');
      return false;
    }
  };

  const getCurrentCoords = () => {
    Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => setCoords({
      lat: latitude,
      lon: longitude,
    }), () => {
      Alert.alert('É necessário aceitar a permissão', ' para continuar no app aceite as permissões de localização');
    });
  };

  const getGeolocation = useCallback(async () => {
    const permissionGranted = await checkPermission();
    if (!permissionGranted) {
      const granted = await requestPermission();
      if (granted) {
        getCurrentCoords();
      }
    } else {
      setHasLocationPermission(true);
      getCurrentCoords();
    }
  }, []);

  return {
    coords, getGeolocation, hasLocationPermission, requestPermission,
  };
}
