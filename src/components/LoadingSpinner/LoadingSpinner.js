/*
 * This component is responsible for showing a rotating spinner that can be used while waiting for content loading.
 * I'm using the Switch component coming from Material-UI.
 */ 

import styled from 'styled-components';

const LoadingSpinnerSVG = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LoadingSpinner = () => {
    return (
        <LoadingSpinnerSVG alt="Loading spinner" src={process.env.PUBLIC_URL+"/assets/loadingSpinner.svg"}/>
    );
};

export default LoadingSpinner;
