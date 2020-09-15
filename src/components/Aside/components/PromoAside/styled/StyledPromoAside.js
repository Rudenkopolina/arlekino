import styled from 'styled-components'
import Gift from '../../../../../assets/img/gift.svg'
import BgPromo from '../../../../../assets/img/bgpromo.png'
import IconClose from '../../../../../assets/img/update/close1.svg'

const Block = styled.section`
    cursor: pointer;
  	position: relative;
  	display: ${({ isVisibleBlock }) => (isVisibleBlock ? 'flex;' : 'none;')};
  	width: 100%;
  	height: 115px;
  	background: var(--white);
    border: 1px solid var(--panelBorderGray);
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
    border-radius: 4px;
    padding: 83px 21px 12px 12px;
    background: url(${BgPromo}) 0 0 no-repeat; 
    overflow: hidden;
    justify-content: space-between;
    margin-bottom: 20px;
    
    a {
      font-family: var(--fontGilroyRegular);
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: var(--mainblue);
      &:hover {
        color: var(--orange);
      }
    }
    
`

const TxtBlock = styled.div`
  position: absolute;
  top: 23px;
  left: 100px;
  p {
    color: var(--mainblack);
    font-family: var(--fontGilroyRegular);
    font-size: 13px;
  }
`
const BgTxt = styled.p`
    color: var(--white);
    font-family: var(--fontGilroyRegular);
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    padding: 1px 5px;
    background: var(--orange);
    position:relative;
    top: 2px;
`

const Img = styled.div`
  position: absolute;
  width: 98px;
  height: 100px;
  left: 0;
  top: 0; 
  background: url(${Gift}) 0 0 no-repeat; 
  background-size: contain;
`

const Close = styled.div`
  position: absolute;
  width: 11px;
  height: 12px;
  top: 12px;
  right: 15px;
  cursor: pointer;
  background: url(${IconClose}) center center no-repeat;
`

export default {
  Img,
  Close,
  TxtBlock,
  BgTxt,
  Block
};