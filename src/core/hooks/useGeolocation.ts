import { useState, useCallback, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert, PermissionsAndroid } from 'react-native';
import { ICoord } from '~/services/models/OpenWeatherModel';

/**
 * @description hooks to get Geolocation coords and request location permissions
 */
export function useGeolocation() {
  const [coords, setCoords] = useState<ICoord | null>(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => setCoords({
        lat: latitude,
        lon: longitude,
      }), ({ message }) => {
        Alert.alert(message);
      });
    }
  }, [hasLocationPermission]);

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
      return granted;
    } catch (err) {
      Alert.alert('Erro ao requisitar permissões');
      return false;
    }
  };
  const getGeolocation = useCallback(async () => {
    const permissionGranted = await checkPermission();
    if (!permissionGranted) {
      requestPermission();
    } else {
      setHasLocationPermission(true);
    }
  }, []);

  return {
    coords, getGeolocation, hasLocationPermission, requestPermission,
  };
}
