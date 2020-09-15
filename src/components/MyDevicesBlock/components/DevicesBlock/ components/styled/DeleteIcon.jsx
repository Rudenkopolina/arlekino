import styled from 'styled-components'
import Icon from '../../../../../../assets/img/close-red.svg'

const DeleteIcon = styled.div`
  display: block;
  width: 11px;
  height: 11px;
  cursor: pointer;
  margin-left: 10px;
  position: absolute;
  right: 0;
  top: 7px;
  z-index: 22;
  svg {
      margin: 0;
      padding: 0;
      width: 11px;
      height: 11px;
      position: absolute;
      left: 0;
      top: 0;
  }
   svg path {
    fill: var(--red);
    padding: 0;
    margin: 0;
  }
`
export default DeleteIcon
