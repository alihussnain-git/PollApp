import { Saga } from 'redux-saga';
import { sagaMiddleware } from '../store';

export function execute<T>(saga: Saga, ...args: Parameters<Saga>): Promise<T> {
  return sagaMiddleware.run(saga, ...args).toPromise() as Promise<T>;
}
