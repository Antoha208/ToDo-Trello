import React from 'react';
import { BrowserRouter } from 'react-router-dom'
//import { useSelector, useDispatch } from 'react-redux'


// import { ThemeProvider } from '@mui/material/styles'
import AppRouter from './AppRouter.js'

// import styles from './App.module.css'

const App = () => {

  return (
    // <ThemeProvider theme = {userStore.theme.includes('Dark') ? themeLight : themeDark}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
