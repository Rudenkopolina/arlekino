import styled from 'styled-components'

const StyledMessages = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 20px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 30px;
    right: 1px;
    top: -4px;
    background: var(--panelBorderGray);   
  }
  
	i {
    cursor: pointer;
    margin-right: 12px;
    display: inline-block;
    position: relative;
    top: -1px;
    width: 20px;
	}
	
	p {
    font-family: var(--fontGilroySemiBold);
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.16px;
    color: var(--mainblack);
	}
`

export default StyledMessages
