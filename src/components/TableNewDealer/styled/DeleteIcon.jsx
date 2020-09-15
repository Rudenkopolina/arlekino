import styled from 'styled-components'
import DeleteIcons from '../../../assets/img/update/close2.svg'

const DeleteIcon = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin-right: 5px;
  position: relative;
  top: 3px;
  left: 0;
  background: url(${DeleteIcons}) center center no-repeat;

`
export default DeleteIcon
