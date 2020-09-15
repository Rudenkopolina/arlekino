import styled from 'styled-components'
import AcceptIcon from '../../../../../../assets/img/checkimg.svg'

const StyledAcceptIcon = styled.div`
  display: block;
  width: 20px;
  height: 18px;
  cursor: pointer;
  position: absolute;
  top: 4px;
  left: 0;
  background: url(${AcceptIcon}) center center no-repeat;
  
  @media (max-width: 767px) {
      left: -4px;
  }
`
export default StyledAcceptIcon
