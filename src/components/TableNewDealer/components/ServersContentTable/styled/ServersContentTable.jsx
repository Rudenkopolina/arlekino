import styled from 'styled-components'

const Block = styled.div`
  padding-left: 15px;
  padding-top: 2px;
  
	p {
	  color: var(--gray);
	  font-size: 13px;
	}
	
`
const BlockOldDealer = styled.div`
  padding-top: 1px;
`
const Name = styled.div`
  font-size: 13px;
  line-height: 17px;
  color: var(--gray);
  letter-spacing: 0.16px;
`
const Type = styled.div`
  font-size: 13px;
  line-height: 17px;
  color: var(--mainblue);
  letter-spacing: 0.16px;
  a {
    display: inline-block;
    width: 100%;
    color: var(--mainblue);
    padding-top: 6px;
    &:hover {
       color: var(--mainblue); 
    }
    
  }
`
export default {
  Block,
  Name,
  BlockOldDealer,
  Type
}
