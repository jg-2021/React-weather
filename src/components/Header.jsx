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

const Header = () => {
    return (
        <div>
            <PulseDiv>
            <Font family='Viga' onAllLoad={()=>console.log('all fonts loaded')}>
            <Text family='Rock Salt' style={{fontSize:65, margin:0}} onLoad={()=>console.log('loaded text 1')}>
            The  
            </Text>
            <LightDiv>
            <Text family='Monoton' style={{fontSize:45, margin:0}} onLoad={()=>console.log('loaded text 2')}>
            Customizable 
            </Text>
            </LightDiv>
            <Text family='Fredericka the Great' style={{fontSize:75, margin:0}} onLoad={()=>console.log('loaded text 3')}>
             Weather
            </Text>
            <Text family='Press Start 2P' style={{fontSize:65, margin:0, textDecorationLine:'underline'}} onLoad={()=>console.log('loaded text 4')}>
             App
            </Text>
            </Font>
            <div className='boxBounce'></div>
            </PulseDiv>
        </div>
    )
}

export default Header
