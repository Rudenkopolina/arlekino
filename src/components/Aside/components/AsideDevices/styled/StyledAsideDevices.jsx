import styled from 'styled-components'

const StyledAsideDevices = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	&>header {
	  display: flex;
	  cursor: pointer;
	  width: 100%;
	  justify-content: space-between;
	  align-items: center;
	  padding: 15px 22px 9px 17px;
	  border-bottom:1px solid var(--panelBorderGray);
	  
	  	h3 {
        font-family: var(--fontGilroySemiBold);
        font-size: 14px;
        line-height: 20px;
        display: inline-block;
        padding: 0;
        margin: 0;
	    }
	}
	
`
export default StyledAsideDevices
