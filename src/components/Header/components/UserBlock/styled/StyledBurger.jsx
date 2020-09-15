import styled from 'styled-components'

const Row = styled.div`
	  display: flex;
    flex-direction: column;
    width: 17px;
    height: 16px;
    z-index: 500;
    position: absolute;
    right: 14px;
    top: 13px;
    
     @media (min-width: 320px) and (max-width: 767px) {
          right: 13px;
     }
    &:after {
      content: '';
      position: absolute;
      right: -6px;
      top: -7px;
      width: 25px;
      height: 25px;
      z-index: 2;
      cursor: pointer;
    
    }
    
`
const LineTop = styled.div`
	width: 100%;
  height: 2px;
  background-color: var(--gray);
  margin-bottom: 4px;	
  transition: transform .25s ease-in-out;
  transform: ${({ isCollapse }) => (isCollapse ? 'translateY(2px) rotate(45deg);' : 'none;')};  
  
`
const LineBottom = styled.div`
	width: 100%;
  height: 2px;
  background-color: var(--gray);
  margin-bottom: 4px;	
  transition: transform .25s ease-in-out;
  transform: ${({ isCollapse }) => (isCollapse ? 'translateY(-4px) rotate(-45deg);' : 'none;')};  
	
`
export default {
  Row,
  LineTop,
  LineBottom
}
