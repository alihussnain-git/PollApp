import React from 'react';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation';
import store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
