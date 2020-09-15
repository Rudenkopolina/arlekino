import styled from 'styled-components';
import React from 'react';
import Delete from '../../../../assets/img/deleteIconModal.svg'

const StyledDeleteIconModal = styled.i`
	position:absolute;
	width: 50px;
  height: 50px;
	top: 16px;
	left: 29px;
	background: url(${(Delete )}) center center no-repeat;
`
export default StyledDeleteIconModal;