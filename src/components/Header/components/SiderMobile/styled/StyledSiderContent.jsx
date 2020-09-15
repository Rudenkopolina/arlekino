import styled from 'styled-components'

const StyledSiderContent = styled.div`
  width: 100%;
  position: relative;
   height: 100%;
 
    @media (max-width: 767px){
       
       .siderBtn {
          margin-bottom: 100px !important;
       }
   }
   @media (max-width: 767px) and (orientation: landscape){
        
       .siderBtn {
          margin-bottom: 100px !important;
       }
   }
   
   @media (min-width: 320px) and (max-width: 767px) and (orientation: landscape){
       //.siderBtn {
       //   margin-bottom: 200px;
       //}
   }
`

export default StyledSiderContent
