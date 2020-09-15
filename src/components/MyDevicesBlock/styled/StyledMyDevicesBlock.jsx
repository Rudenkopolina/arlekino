import styled from 'styled-components'
import Image from '../../../assets/img/imgcenter.png'
import { DEVICE } from '../../../constants/media'

const Block = styled.div`
	width: calc(100% - 19px);
	margin-right: 19px;
	min-height: 367px;
	height: auto;
	background: #FAFAFA;
	padding: 35px 0 50px 5px;
	position: relative;	
	margin-bottom: 45px;
	
	
	@media ${DEVICE.tabletDevices1250} {
			width: 100%;
			height: auto;
			margin-right: 0;
			min-height: auto;
			padding: 30px 0 50px 0;
	}
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		min-height: 367px;
		height: 100%;
		top: 0;
		left: -100%;
		@media ${DEVICE.tabletDevices1250} {
			width: 150%;
			height: 100%;
			right: -30%;
			left: auto;
			z-index: -1;
			min-height: auto;
		}
		background: #FAFAFA;
	}
	&:before {
		//content: '';
		//position: absolute;
		//width: 100%;
		//min-height: 367px;
		//height: 100%;
		//top: 0;
		//right: -100%;
		//background: #FAFAFA;	
		// @media ${DEVICE.tabletDevices1250} {
		// 	width: 150%;
		// 	height: 100%;
		// 	right: -30%;
		// 	left: auto;
		// 	z-index: -1;
		// 	min-height: auto;
		// }
	}
	
`
const Txt = styled.div`
	font-family: var(--fontGilroyRegular);
	margin-bottom: 22px;
	font-size: 15px;
	line-height: 20px;
`
const Title = styled.div`
	font-family: var(--fontGilroySemiBold);
	font-size: 24px;
	line-height: 1.6;
	color: var(--mainblack);
	position: relative;
	margin-bottom: 33px;
	@media ${DEVICE.tabletDevices1250} {
   	font-size: 20px;
   	padding-right: 55px;
  }
	&:after {
		content: '';
		height: 4px;
		position: absolute;
		width: 30px;
		bottom: -10px;
		left: 0;
		background: var(--orange);
	}
`

const Img = styled.div`
	height: 164px;
	position: absolute;
	width: 303px;
	bottom: 65px;
	right: 53px;
	background: url(${Image}) center center no-repeat;
	background-size: contain;
	
	@media ${DEVICE.tabletDevices1250} {
    //width: 308px;
    //height: 167px;
    //top: 184px;
    //left: 50%;
    //margin-left: -154px;
    display: none;
	}
`

export default  {
	Block,
	Title,
	Img,
	Txt

}
