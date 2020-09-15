import styled , {css} from 'styled-components'

const StyledFooter = styled.div`
	  width: 100%;
  	display: flex;
  	justify-content: space-between;
  	background: var(--footerBg);
    height: 60px;
    align-items: center;
    
    ${({isMobile}) => {
      if (isMobile ) {
        return css`
           @media (max-width: 1249px) {
              //position: absolute;
              //left: 0;
              //bottom: 60px;
              height: 100px; 
           }
           
            @media (min-width: 768px) and (max-width: 1249px){
              height: 100px; 
              display: block;
           }

        `}}}  
   

`

export default StyledFooter
