// Marco Rapaccini - Loading Spinner component (useful to display while loading a page, etc)

import styled from 'styled-components';

const LoadingSpinnerSVG = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default function LoadingSpinner() {
    return (
        <LoadingSpinnerSVG alt="Loading spinner" src={process.env.PUBLIC_URL+"/assets/loadingSpinner.svg"}/>
    );
  }
