import styled, {css} from 'styled-components'
import { DEVICE } from '../../../../../constants/media';
import Triangle from  '../../../../../assets/img/traingle2.png'

const Block = styled.div`
	display: flex;
  flex-wrap: wrap;
  padding: 12px 0 12px 0;
  
  width: ${({ userType }) => (userType === 'olddealer' ? '280px;' : '256px;')};
  background: var(--white);
  position:relative;
  margin-top: 10px;
  border: 1px solid #EFEEF3;
  right: -20px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
   &:after {
       content: '';
       cursor: pointer;
       width: 25px;
       height: 17px;
       display: inline-block;
       position: absolute;
       top: -15px;
       right: 41px;
       background: url(${(Triangle)}) center center no-repeat;
    }
	@media ${DEVICE.tabletDevices1250} {     
      
  }
`
const Item = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	height: 28px;
  padding: 5px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;  
    letter-spacing: 0.16px;
    margin: 6px 0;
    padding-left: 24px;
    color: ${({ isActive }) => (isActive? 'var(--mainblack);' : 'var(--gray);')};
  }
  
  &:hover {    
      
  ${({ isActive }) => {
      if (isActive ) {
        return css`
              background: var(--mainblue);
              color: var(--white);
              p {
                color: var(--white);
              }
          `}
      else {
        return css`
              background: var(--white);
              color: var(--gray);
              p {
                color: var(--gray);
              }
          `}
      }
    }}
  }

`

const ItemBuy = styled.div`
	  font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;  
    letter-spacing: 0.16px;
    color: var(--white);
    padding: 3px 6px;
    cursor: pointer;
    background: var(--orange);
    margin: 3px 0;
    border-radius: 2px;
    margin-left: 18px;
    display: inline-flex;
`
export default {
  Block,
  Item,
  ItemBuy
}
