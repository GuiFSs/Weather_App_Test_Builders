import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  static save(key: string, obj: any) {
    return AsyncStorage.setItem(key, JSON.stringify(obj));
  }

  static async get<T>(key:string) {
    const res = await AsyncStorage.getItem(key);
    if (!res) return null;
    const obj: T | null = JSON.parse(res);
    return obj;
  }

  static remove(key: string) {
    return AsyncStorage.removeItem(key);
  }

  static clear() {
    return AsyncStorage.clear();
  }
}

export default Storage;
