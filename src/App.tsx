import React from 'react';
// import { TimelinePage } from './pages/timeline/TimelinePage';
import { LoginPage } from './pages/login/LoginPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
          <LoginPage />
    </Provider>
  );
}

export default App;
