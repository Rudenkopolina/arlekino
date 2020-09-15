import styled from 'styled-components';
import IconCopy from '../../../../../../../assets/img/copyicon.svg'
import { Collapse } from 'antd';
const { Panel } = Collapse;


const StyledPanel = styled(Panel)`
      
	  border-radius: 0;
	  box-shadow: none;
	  border: none;
	  background-color: transparent;
	  position: relative;
	  margin-top: 8px;
	  margin-bottom: 8px;
	  
    font-style: normal;
    font-weight: normal;
    line-height: 12px;
    color: var(--gray);
    a {
        font-size: 12px;
        line-height: 12px;
        color: var(--gray);
    }
    i {
        cursor: pointer;
        width: 16px;
        height: 18px;
        position: relative;
        top: -3px;
        display: inline-block;
        margin-left: 10px;
        background: url(${(IconCopy)}) center center no-repeat; 
        background-size: contain;
    }
    
    
	 
`
export default StyledPanel;