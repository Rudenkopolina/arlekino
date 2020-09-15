import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Block = styled.div`
	padding-left: 10px;
	padding-top: 6px;
`
const ItemBuy = styled(Link)`
    font-family: var(--fontGilroyRegular);
    font-size: 12px;
    line-height: 14px; 
    letter-spacing: 0.16px;
    text-decoration: underline;
    margin-bottom: 4px;
    color: var(--mainblue);
    &:hover {
      color: var(--mainblue);
      text-decoration: underline;
    }
	a {
    font-family: var(--fontGilroyRegular);
    font-size: 12px;
    line-height: 14px; 
    letter-spacing: 0.16px;
    text-decoration: underline;
    color: var(--mainblue); 
	}
`
const ItemDate = styled.div`
    padding-top: 6px;
    a {
        font-family: var(--fontGilroyRegular);
        font-size: 12px;
        line-height: 14px; 
        letter-spacing: 0.16px;
        color: var(--gray) ;
    }
    font-family: var(--fontGilroyRegular);
    font-size: 12px;
    line-height: 14px; 
    letter-spacing: 0.16px;
    color: var(--gray);
    span {
      color: var(--red);
    }
`
export default {
  Block,
  ItemBuy,
  ItemDate,
}
