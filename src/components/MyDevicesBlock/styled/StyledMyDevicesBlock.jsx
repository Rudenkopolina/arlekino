import styled from 'styled-components'
import Image from '../../../assets/img/imgcenter.png'

const Block = styled.div`
	width: calc(100% - 19px);
	margin-right: 19px;
	height: 367px;
	background: #FAFAFA;
	padding: 35px 0 50px 0;
	position: relative;	
	margin-bottom: 45px;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 367px;
		top: 0;
		left: -100%;
		background: #FAFAFA;
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
	line-height: 36px;
	color: var(--mainblack);
	position: relative;
	margin-bottom: 33px;
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
`

export default  {
	Block,
	Title,
	Img,
	Txt

}
