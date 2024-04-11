import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { LogBox } from 'react-native';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
LogBox.ignoreAllLogs();
