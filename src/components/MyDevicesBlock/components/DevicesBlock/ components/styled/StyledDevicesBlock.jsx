import styled from 'styled-components'
import ShowDevice from '../../../../../assets/img/plusdevices.svg'

const StyledDevicesBlock = styled.div`
	display: flex;
	width: 346px;

	header {
	  display: flex;
	  width: 100%;
	  height: 47px;
	  justify-content: space-between;
	  align-items: center;
	  background: #FFFFFF;
    border: 1px solid var(--panelBorderGray);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px 4px 0px 0px;
    padding: 0 24px;
    
    h3 {
        font-family: var(--fontGilroySemiBold);
        text-transform: uppercase;
        font-size: 13px;
        line-height: 20px;
        display: inline-block;
        padding: 0;
        margin: 0;
    }
     i {
        cursor: pointer;
        width: 20px;
        height: 18px;
        display: inline-block;
        background: url(${(ShowDevice)}) center center no-repeat;
     }
	}

`

export default StyledDevicesBlock
