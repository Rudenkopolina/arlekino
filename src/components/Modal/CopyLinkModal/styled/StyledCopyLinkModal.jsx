import styled from 'styled-components';
import Copy from '../../../../assets/img/copylinkicon.svg'

const StyledCopyLinkModal = styled.i`
	position:absolute;
	width: 50px;
  height: 50px;
	top: 16px;
	left: 29px;
	background: url(${(Copy)}) center center no-repeat;
	 p {
	    margin-bottom: 8px;
	 }
`
export default StyledCopyLinkModal;