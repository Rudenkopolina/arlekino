import styled from 'styled-components'
import Picon from '../../../../../../../assets/img/download.svg'

const StyledPicon = styled.div`
	display: flex;
	width: 100%;
	cursor: pointer;
	p {
	  	padding: 2px 0;
      border: none;
      font-family: var(--fontGilroySemiBold);
      font-size: 12px;
      line-height: 20px;
      color: var(--mainblue);
      display: inline-block;
      
	}
	i {
	  display: inline-block;
	  cursor: pointer;
	  position: relative;
	  top: 3px;
	  width: 12px;
    height: 12px;
    margin-left: 6px;
    background: url(${Picon}) center center no-repeat;
	}
`
export default StyledPicon
