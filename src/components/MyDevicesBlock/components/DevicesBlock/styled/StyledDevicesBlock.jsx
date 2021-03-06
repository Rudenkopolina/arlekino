import styled from 'styled-components'
import ShowDevice from '../../../../../assets/img/plusdevices.svg'
import { DEVICE } from '../../../../../constants/media'

const StyledDevicesBlock = styled.div`
	display: flex;
	width: 346px;
  flex-direction: column;
  
  @media (max-width: 359px) {
   	width: 100%;
  }
  
   @media ${DEVICE.wideScreen} {
      margin-left: 300px;
      margin-top: 30px;
    }
  @media ${DEVICE.tabletDevices1250} {
    margin-top: 40px;
  }
   @media (min-width: 360px) and (max-width: 574px) {
        width: 100%; 
    }
    @media (min-width: 575px) and (max-width: 767px) {
        width: 100%; 
    }

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
    cursor: pointer;
    position: relative;
    z-index: 2;
    
    h3 {
        font-family: var(--fontGilroySemiBold);
        text-transform: uppercase;
        font-size: 13px;
        line-height: 20px;
        display: inline-block;
        padding: 0;
        margin: 0;
        text-transform: uppercase;
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
