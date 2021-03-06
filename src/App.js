/*
 *  Exploring cool React stuff with Material-UI and styled-components libraries.
 */ 

import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// let's load/import non-critical components with React.lazy()
const ThemeColorController = React.lazy(()=> import('./components/ThemeColorController/ThemeColorController')); 
const SimpleModal = React.lazy(()=> import('./components/SimpleModal/SimpleModal'));
const ScrollableYModal = React.lazy( () => import('./components/ScrollableYModal/ScrollableYModal'));

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

const MrWolfPic = styled.img`
  margin: 0px 0px 20px 0px;
`;

const App = () => {

  // let's define the state(s)
  const [themeColor, setThemeColor] = useState("Azure");
  const [showSimpleModal, setShowSimpleModal] = useState(false);
  const [showResizableYModal, setShowResizableYModal] = useState(false)

  return (
    <Suspense fallback={<LoadingSpinner src={process.env.PUBLIC_URL+"/assets/loadingSpinner.svg"}/>}>
      <AppContainer backgroundColor={themeColor}>
        <ThemeColorController themeColor={themeColor} setThemeColor={setThemeColor}/>
        <MrWolfPic src="https://i.gifer.com/fug.gif"/>
        <Button variant="contained" color="primary" onClick={() => setShowSimpleModal(!showSimpleModal)}>Hire Mr Wolf</Button>
        <br/>
        <Button variant="contained" onClick={() => setShowResizableYModal(!showResizableYModal)}>Mr Wolf Bio</Button>
        <SimpleModal showModalBox={showSimpleModal} setShowModalBox={setShowSimpleModal} />
        <ScrollableYModal showModalBox={showResizableYModal} setShowModalBox={setShowResizableYModal} />
      </AppContainer>
    </Suspense>
  );

}

export default App;