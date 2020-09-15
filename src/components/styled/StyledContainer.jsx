import styled, { css } from 'styled-components'
import { DEVICE } from '../../constants/media';

const StyledContainer = styled.div`
	max-width: 1280px;
	position: ${({ relative }) => relative && "relative"};
  display: ${({ display }) => display === "flex" ? "flex" : "block"}};
  
 
  @media (max-width: 1249px) {
    padding-bottom: ${({ paddingbottom }) => paddingbottom  ? paddingbottom : "0"}};
  }
   ${({ justify }) => {
    if (justify) {
        return css`
                 justify-content: ${justify};  
                `}}}
	  width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
	 @media (min-width: 576px) {
	       max-width:540px;
	  }
	  
	
	@media (min-width: 767px) {
	        max-width:720px
	}

	@media (min-width: 992px) {
	        max-width:960px;
	}
	
	@media (min-width: 1200px) {
        max-width:1200px;
    }
    
    @media (min-width: 1270px) {
        max-width: 1270px;
        padding-right: 10px;
        padding-left: 10px;
    }
    
     @media (min-width: 1280px) {
        max-width: 1280px;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    @media (min-width: 1630px) {
        max-width: 1600px;
    }
    
    @media (min-width: 1920px) {
        max-width: 1800px;
    }
    
    @media ${DEVICE.tabletDevices1250} {
        flex-wrap: wrap;
    }

`

export default StyledContainer
