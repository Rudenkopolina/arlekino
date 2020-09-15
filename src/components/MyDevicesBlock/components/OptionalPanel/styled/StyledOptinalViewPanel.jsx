import styled, {css} from 'styled-components'
import CloseIcon from '../../../../../assets/img/closeorange.svg'
import { DEVICE } from '../../../../../constants/media'

const Panel = styled.div`
	display: flex;
	height: 50px;
	width: calc(100% - 19px);
	position:relative;
  @media ${DEVICE.tabletDevices1250} {
    width: 100%;
    flex-wrap: wrap;
  }
`
const Txt = styled.div`
	display: inline;
	font-family: var(--fontGilroyRegular);
  font-size: 15px;
  margin-top: 1px;
`
const TxtBig = styled.div`
	display: flex;
	font-family: var(--fontGilroyRegular);
  font-size: 15px;
  margin-top: 1px;
  margin-bottom: 20px;
  align-items: center;
 
`
const General = styled.div`
	display: flex;
	font-family: var(--fontGilroyMedium);
  font-size: 16px;
  margin-top: 1px;
  margin-left: 15px;
   @media (max-width: 359px) {
				 font-size: 14px;
   }
  p {
    padding-left: 5px;
  }
  i {
    cursor: pointer;
    position: relative;
    top: 8px;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 15px;
    background: url(${CloseIcon}) center center no-repeat;  
    background-size: contain;
}
`
const Button = styled.button`
  position:absolute;
  right: 44px;
  top: -15px;
  width: 79px;
  height: 48px;
  border: 2px solid var(--orange);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  font-family: var(--fontGilroyMedium);
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  display: ${({ view}) => ((view === 'table') ? 'none;' : 'block;')};
  
  @media ${DEVICE.tabletDevices1250} {
     position: static;
  }
  @media (max-width: 767px) {
   	width: 100%;
   	margin: 10px auto;
  }
  @media (min-width: 768px) and (max-width: 1249px) {
   	width: 100px;
   	margin: 20px 0;
  }
    &[disabled] {
		  	opacity: 0.5;
		  }
  
`
const LeftCol = styled.div`
  display: inline-flex;
  
    @media ${DEVICE.tabletDevices1250} {
    width: 100%; 
    display: flex;
    padding-right: 120px; 
    padding-left: 5px; 
    flex-direction: column;
  }
  
   @media (max-width: 359px) {
      padding-right: 40px; 
    }
   @media (max-width: 480px) {
      padding-right: 60px; 
   }
    width: calc(100% - 126px);
  
   ${({ isBigList}) => {
    if ( isBigList ) {
      return css`
           display: flex;
           width: 100%;
           flex-direction: column;   
           
            @media (max-width: 480px) {
              padding-right: 20px; 
            }  
            @media (max-width: 359px) {
                padding-right: 20px; 
            }    
      `}}}
    

`

const RightCol = styled.div`
  display: inline-flex;
  @media (max-width: 767px) {
      width: 100%;
      display: flex;
      padding-right: 5px;
      margin-top: 14px;
      justify-content: flex-end;
  } 
  @media (min-width: 768px) and (max-width: 1249px) {
   	justify-content: flex-start;
  }
`

const List = styled.div`
  max-width: 700px;
  position: relative;
  top: -2px; 
  @media ${DEVICE.tabletDevices1250} {
      margin-top: 15px;
   }
`
const ListBig = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
  top: -2px;
  left: -15px;  
`
const Item = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	position:relative;
	height: 30px;
	padding-left: 20px;
	padding-right: 20px;
	border-left: 1px solid var(--panelBorderGray);
	 @media ${DEVICE.tabletDevices1250} {
    	height: 36px;
    	height: 36px;
      padding-left: 0;
      border: none;
   }
 
	&:first-child {
	  padding-left: 15px;
	  border-left: none;
	   @media ${DEVICE.tabletDevices1250} {
	     padding-left: 0;
	  }
	  
	}
	
	p {
      font-family: var(--fontGilroyMedium);
      font-size: 16px;
      padding-right: 15px;
      
       @media (max-width: 359px) {
				 font-size: 13px;
        }
        
        @media (max-width: 400px) {
				 font-size: 14px;
        }
	}
	i {
	  cursor: pointer;
	  display: inline-block;
	  width: 10px;
    height: 10px;
	  background: url(${CloseIcon}) center center no-repeat;  
	  background-size: contain;
	}		
`
const ItemBig = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	position:relative;
	height: 23px;
	padding-left: 14px;
	padding-right: 14px;
	 @media ${DEVICE.tabletDevices1250} {
    	height: 24px;
   }
	&:first-child {
	  padding-left: 14px;
	   @media ${DEVICE.tabletDevices1250} {
	     
	  }
	  
	}
	
	p {
      font-family: var(--fontGilroyRegular);
      font-size: 12px;
      padding-right: 14px;
	}
	i {
	  cursor: pointer;
	  display: inline-block;
	  width: 10px;
    height: 10px;
	  background: url(${CloseIcon}) center center no-repeat;  
	  background-size: contain;
	}		
`
export default {
  Txt,
  Panel,
  Button,
  LeftCol,
  RightCol,
  TxtBig,
  List,
  General,
  ListBig,
  ItemBig,
  Item
}
