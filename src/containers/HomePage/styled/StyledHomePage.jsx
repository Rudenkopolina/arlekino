import styled, {css} from 'styled-components'

const StyledHomePage = styled.div`
	position: relative;
	display: flex;
  min-height: 100vh;
  flex-direction: column;
 
   
    ${({  isShowMenu }) => {
      if (isShowMenu) {
        return css`
            height: 100vh;
            position: fixed;
            flex-wrap: wrap;
            flex-direction: row;
            width: 100%;
        `}}}  

  @media (min-width: 1250px) {
    flex-direction: column;
  } 
  
`
export default StyledHomePage
