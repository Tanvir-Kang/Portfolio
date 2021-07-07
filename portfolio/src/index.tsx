import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core"
import { theme } from "../src/Utils/Theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>
    <App />
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
