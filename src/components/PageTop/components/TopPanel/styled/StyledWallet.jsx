import styled from 'styled-components'

const StyledWallet = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 20px;
  
  i {
    margin-right: 8px;
    display: inline-block;
    position: relative;
    top: -1px;
    width: 20px;
    cursor:pointer;
  }
  
	p {
      font-family: var(--fontGilroySemiBold);
      font-size: 16px;
      text-transform: uppercase;
      line-height: 17px;
      letter-spacing: 0.16px;
      color: var(--mainblack);
	 }
`

export default StyledWallet
