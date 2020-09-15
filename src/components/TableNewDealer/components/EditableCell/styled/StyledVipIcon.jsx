import styled from 'styled-components'
import Icon from '../../../../../assets/img/viptable.svg'

const StyledVipIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  position: absolute;
  top: 5px;
  right: 0;
  left: -15px;
  background: url(${Icon}) center center no-repeat;
  background-size: cover;
`
export default StyledVipIcon
