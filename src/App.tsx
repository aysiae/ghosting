import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "./theme/theme";

const theme = createTheme(themeOptions);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
