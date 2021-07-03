/*
 * This component is responsible for changing the state regarding main application's background color.
 * I'm using the Switch component coming from Material-UI.
 */ 

import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';

const ThemeColorControllerContainer = styled.div`
    position: absolute;
    right: 30px;
    top: 30px;
`;

const ThemeColorController = ({ themeColor, setThemeColor }) => {

    return (
        <ThemeColorControllerContainer>
            <Switch
            onChange={() => setThemeColor(themeColor === "Azure" ? "Gainsboro" : "Azure")}
            name="themeColorSwitch"
            />
        </ThemeColorControllerContainer>
    );
}

export default ThemeColorController