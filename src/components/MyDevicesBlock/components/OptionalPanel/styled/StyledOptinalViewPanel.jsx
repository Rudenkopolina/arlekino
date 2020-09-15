import styled from 'styled-components'
import CloseIcon from '../../../../../assets/img/closeorange.svg'

const Panel = styled.div`
	display: flex;
	height: 50px;
	width: calc(100% - 19px);
	position:relative;
`
const Txt = styled.div`
	display: inline;
	font-family: var(--fontGilroyRegular);
  font-size: 15px;
  margin-top: 1px;
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
    &[disabled] {
		  	opacity: 0.5;
		  }
  
`
const List = styled.div`
  max-width: 600px;
  max-height: 60px;
  overflow-x: hidden;
  position: relative;
  top: -2px;
  
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
	&:first-child {
	  padding-left: 15px;
	  border-left: none;
	}
	
	p {
      font-family: var(--fontGilroyMedium);
      font-size: 16px;
      padding-right: 15px;
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
  List,
  Item
}
