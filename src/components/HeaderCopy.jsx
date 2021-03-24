import Font, { Text } from 'react-font'
import styled, { keyframes } from 'styled-components';
import { pulse, lightSpeedIn } from 'react-animations';


const pulseDiv = keyframes`
0% {
    transform: scale(0); 
  }
  50% {
    transform: scale(11.2); 
  }
  70% {
    transform: scale(0.65); 
  }
  100% {
    transform: scale(0); 
  }${pulse}`;

const lightDiv = keyframes`${lightSpeedIn}`;

const PulseDiv = styled.div`
  animation: 1s infinite ${pulseDiv};
`;
const LightDiv = styled.div`
  animation: 1s infinite ${lightDiv};
`;



const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background:#4e90e7;
`;
const Wrapper = styled.div`
  padding: 4em;
  background: #4e90e7;
`;
const Header = () => {
    return (
        <div>
            <h1 data-testid='title'>!</h1>
        </div>
    )
}

export default Header
