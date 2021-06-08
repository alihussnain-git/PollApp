import { API } from '.';
import { EntryPoint } from '../redux/entryPoint/types';

export function fetchEntryPoint() {
  return API.get<EntryPoint>('').then((response) => response?.data);
}
