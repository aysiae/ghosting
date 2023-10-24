import React from "react";
// import { TimelinePage } from './pages/timeline/TimelinePage';
import { LandingPage } from "./pages/landing/LandingPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {/* <TimelinePage /> */}
      <LandingPage />
    </Provider>
  );
}

export default App;
