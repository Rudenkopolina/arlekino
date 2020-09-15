import styled from 'styled-components'
import Icon from '../../../../../../assets/img/checkicon.svg'

const CheckIcon = styled.div`
  display: block;
  position: absolute;
  left: 7px;
  top: 11px;
  width: 10px;
  height: 8px;
  cursor: pointer;
  background: url(${Icon}) center center no-repeat; 
  background-size: contain;
  margin-right: 8px;
`

export default CheckIcon
