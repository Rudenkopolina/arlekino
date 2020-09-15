import styled from 'styled-components';
import IconCopy from '../../../../../../../assets/img/copyicon.svg'

const StyledCopyLink = styled.div`
      
        cursor: pointer;
        width: 16px;
        height: 18px;
        position: relative;
        top: -3px;
        display: inline-block;
        margin-left: 10px;
        background: url(${(IconCopy)}) center center no-repeat; 
        background-size: contain;
	 
`
export default StyledCopyLink;