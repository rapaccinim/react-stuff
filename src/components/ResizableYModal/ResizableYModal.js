/*
 * This component is a modal box that is vertically resizable.
 * A modal looks pretty easy to do, but when you have to deal with Y-axis resizing things start to get complicated.
 * No worries, I made from scratch this modal that could help :)
 * Source of inspiration: https://css-tricks.com/considerations-styling-modal/
 */ 

import styled, {keyframes} from 'styled-components';
import Button from '@material-ui/core/Button';

// animation for fade in
const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const ModalBox = styled.div`
    width: 100%;
    height: 100%;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  animation: ${fadeIn} 0.5s;
  -moz-animation: ${fadeIn} 0.5s;
  -webkit-animation: ${fadeIn} 0.5s;
  -o-animation: ${fadeIn} 0.5s;
`;

const ModalBoxContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 101;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(255,255,255,0.7);
    border-radius: 20px;
    box-shadow: 20px 15px 20px 0px rgb(255 255 255 / 20%);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ModalBoxControl = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`;

const ResizableYModal = ({ showModalBox, setShowModalBox }) => {
    return (
        showModalBox &&
        <ModalBox>
            <ModalOverlay showModalOverlay={showModalBox} onClick={() => setShowModalBox(!showModalBox)}/>
            <ModalBoxContent>
                <ModalBoxControl>
                    <Button variant="contained" color="secondary" onClick={() => setShowModalBox(!showModalBox)}>Close</Button>
                </ModalBoxControl>
                <div>Hello</div>
            </ModalBoxContent>
        </ModalBox>
    );
};

export default ResizableYModal;