import styled from 'styled-components';
import React from 'react'
import ExpandIcon from '../../../../../../../assets/img/arrowdown.svg'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const StyledPanel = styled(({ key, ...props }) => <Panel id={key} key={key}{...props} />)`
      
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
    .ant-collapse-item-active {
        i {
          transform: rotate(180deg);
        }
    }
    i {
        cursor: pointer;
        position: relative;
        top: 0;
        width: 9px;
        height: 6px;
        display: inline-block;
        margin-left: 12px;
        background: url(${ExpandIcon}) center center no-repeat;
        background-size: contain;
    }
    
    
	 
`
export default StyledPanel;