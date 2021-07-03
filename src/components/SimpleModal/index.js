/*
* This component is responsible for showing the overlay and the modal
*/ 

import styled, {keyframes} from 'styled-components';

// animation for fade in
const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const ModalOverlay = styled.div`
  display: ${props => `${props.showModalOverlay ? `block` : `none`}`};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.25);
  animation: ${fadeIn} 0.5s;
  -moz-animation: ${fadeIn} 0.5s;
  -webkit-animation: ${fadeIn} 0.5s;
  -o-animation: ${fadeIn} 0.5s;
`;

const ModalBoxControl = styled.div`

`;

const SimpleModal = ({ showModalBox, setShowModalBox }) => {

    return (
        <ModalOverlay showModalOverlay={showModalBox}>
            <ModalBoxControl onClick={() => setShowModalBox(!showModalBox)}>Button</ModalBoxControl>
            <div>Modal content</div>
        </ModalOverlay>
    );
}

export default SimpleModal;

