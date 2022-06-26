import AsyncStorage from '@react-native-async-storage/async-storage';
import LOGS from '../constants/LOGS';
import LogService from './LogService';

class StorageService {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  private _logError(error: any) {
    LogService.logError(`${LOGS.STORAGE_SERVICE_ERROR}_${this.key}`, error);
  }

  async getItem() {
    try {
      const result = await AsyncStorage.getItem(this.key);
      return result;
    } catch (error) {
      this._logError(error);
    }
  }

  async setItem(value: string) {
    try {
      await AsyncStorage.setItem(this.key, value);
    } catch (error) {
      this._logError(error);
    }
  }

  async removeItem(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(this.key);
      return true;
    } catch (error) {
      this._logError(error);
      return false;
    }
  }
}

export default {
  tokenService: new StorageService('token'),
  // add new services here...
};
