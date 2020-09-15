import styled, {css} from 'styled-components'
import Icon from '../../../assets/img/reloadicontable.svg'
import IconNotActive from '../../../assets/img/reloadgrey.svg'

const ReloadIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 14px;
  cursor: pointer;
  margin-right: 0;
  position: relative;
  margin-left: 10px;
  background: url(${Icon}) center center no-repeat;
  background-size: contain;
  ${({ isActive }) => {
    if (isActive === false) {
      return css`
                position: relative;
                top: 0;
                background: url(${IconNotActive}) center center no-repeat;
      	`
    }
    else {
      return css`
                position: relative;
                top: 2px; 
               background: url(${Icon}) center center no-repeat; 
      	`
    }
  }}
 
 
  
`
export default ReloadIcon
