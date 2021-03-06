import styled from 'styled-components'

const StyledCharge = styled.div`
  padding-left: 25px;
  position: relative;
  top: 1px;
  @media (min-width: 1600px) {
  
  } 
  a {
    font-family: var(--fontGilroySemiBold);
    font-size: 14px;
    color: var(--mainblue);
    padding-right: 20px;
    text-transform: uppercase;
    width: 100%;
    display: inline-block;
    position: relative;
    top: 1px;
    &:hover {
      color: var(--orange);
    }
  }
	
`

export default StyledCharge
