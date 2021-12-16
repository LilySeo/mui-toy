import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '../components/AppBar';
import TableList from '../components/TableList'
import MiniDrawer from '../components/MiniVariantDrawer';

import Switch from '@mui/material/Switch';
import { darkTheme, lightTheme } from '../theme';

export default function SimpleContainer() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme);
    } else {
      setCurrentTheme(lightTheme);
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20px' }} />
        <AppBar />
        <TableList />
        <Switch
          // {...label}
          onClick={toggleTheme}
          defaultChecked
          sx={{ position: 'fixed', bottom: '30px', right: '30px' }}
        />
      {/* <MiniDrawer /> */}
      </Container>
    </React.Fragment>
  );
}