import styled from 'styled-components'

const StyledTopSettings = styled.div`
    
    min-height: 22px;
    width: 100%;
    margin-bottom: 16px;
    
    position: absolute;
    top: 73px;
    left: 0;

    display: ${({ isVisibleSettings }) => (isVisibleSettings ? 'block' : 'none;')};

    
    &:last-child {

    }
  
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background: #EFEEF3;
      width: 1px;
      height: 22px; 
    }
`
export default StyledTopSettings
