import styled from 'styled-components'

const StyledAsideServersHeader = styled.header`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding-top: 17px;
	
	h3 {
	  font-family: var(--fontGilroySemiBold);
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    padding: 0;
    margin: 0;
	}
	p {
	  font-family: var(--fontGilroySemiBold);
    font-size: 14px;
    line-height: 20px;
    color: var(--mainblue);
    cursor:pointer;
    display: flex;
    align-items: center;
	}
	
`
export default StyledAsideServersHeader
