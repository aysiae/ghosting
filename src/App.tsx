import React from 'react';
import { TimelinePage } from './pages/timeline/TimelinePage';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
          <TimelinePage />
    </Provider>
  );
}

export default App;
