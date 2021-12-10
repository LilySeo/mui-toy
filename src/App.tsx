import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AppBar from './components/AppBar';
import './App.css';
import MiniDrawer from "./components/MiniVariantDrawer";

import Switch from '@mui/material/Switch';
import { darkTheme, lightTheme } from './theme';

function App(): React.ReactElement  {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  };
  return (
    <div>
      
      <ThemeProvider theme={currentTheme}>
      <CssBaseline>
        <AppBar />
        <Switch
          // {...label}
          onClick={toggleTheme}
          defaultChecked
          sx={{ position: 'fixed', bottom: '30px', right: '30px' }}
        />
      {/* <MiniDrawer /> */}
      </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
