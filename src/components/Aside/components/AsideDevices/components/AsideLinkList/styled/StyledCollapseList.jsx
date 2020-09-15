import styled from 'styled-components'
import { Collapse } from 'antd';

const StyledAsideLinkList = styled(Collapse)`
	display: flex;
	width: 100%;
	height: 45px;
	padding: 0 22px 0 17px;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--panelBorderGray);

	p {
	  font-family: var(--gray);
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
     i {
        cursor: pointer;
        width: 14px;
        height: 13px;
        display: inline-block;
        margin-left: 10px;
        background: url(${(IconReload)}) center center no-repeat;
     }
	}
	
`
export default StyledAsideLinkList
