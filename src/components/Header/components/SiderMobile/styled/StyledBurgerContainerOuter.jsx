import styled , {css} from 'styled-components'


const StyledBurgerContainerOuter = styled.div` 
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    position: relative;
   
    
    ${({  isVisibleInner }) => {
        if (isVisibleInner) {
          return css`
             overflow-y: initial;
             height: 100vh;
        `}}}       
`

export default StyledBurgerContainerOuter
