// Marco Rapaccini - Exploring cool React stuff with Material-UI and styled-components libraries

import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react'

// we can pass props and use them in styled-components
const AppContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const ThemeColorName = styled.div`
  color: #000;
`;

export default function App() {

  // this is the state that holds the current background color
  const [themeColor, setThemeColor] = useState("Azure");

  return (
    /* styled-components help us to define components with custom names (e.g. AppContainer) */
    <AppContainer backgroundColor={themeColor}>
      { /* Next component is a default switch button coming from Material-UI library */}
      <Switch
        onChange={() => setThemeColor(themeColor === "Azure" ? "Gainsboro" : "Azure")}
        name="themeColorSwitch"
      />
      <ThemeColorName>Color is: {themeColor}</ThemeColorName>
    </AppContainer>
  );
}
