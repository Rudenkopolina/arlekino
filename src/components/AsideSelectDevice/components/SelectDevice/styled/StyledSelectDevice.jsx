import styled from 'styled-components';
import Triangle from  '../../../../../assets/img/traingle2.png'

const StyledSelectDevice = styled.div`
  height: 300px;
  background: var(--white);
  width: 287px;
  padding-top: 10px;
  border: 1px solid #EFEEF3;
  border-radius: 2px;
  position: relative;
  margin-top: 5px;
  &:after {
    content: '';
     cursor: pointer;
     width: 25px;
     height: 17px;
     display: inline-block;
     position: absolute;
     top: -14px;
     right: 48px;
     background: url(${(Triangle)}) center center no-repeat;
  }
  
`
export default StyledSelectDevice;