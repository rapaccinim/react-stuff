/*
 *  Exploring cool React stuff with Material-UI and styled-components libraries.
 */ 

import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import LoadingSpinner from './components/LoadingSpinner';

// let's load/import non-critical components with React.lazy()
const ThemeColorController = React.lazy(()=> import('./components/ThemeColorController')); 
const SimpleModal = React.lazy(()=> import('./components/SimpleModal'));


// With styled-components it's possible to give specific names to HTML tags and pass them props
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #000;
`;

const App = () => {

  // let's define the state(s)
  const [themeColor, setThemeColor] = useState("Azure");
  const [showModalBox, setShowModalBox] = useState(false);

  return (
    <Suspense fallback={<LoadingSpinner src={process.env.PUBLIC_URL+"/assets/loadingSpinner.svg"}/>}>
      <AppContainer backgroundColor={themeColor}>
        <ThemeColorController themeColor={themeColor} setThemeColor={setThemeColor}/>
        <Button variant="contained" onClick={() => setShowModalBox(!showModalBox)}>Show Modal</Button>
        <SimpleModal showModalBox={showModalBox} setShowModalBox={setShowModalBox} />
      </AppContainer>
    </Suspense>
  );

}

export default App;