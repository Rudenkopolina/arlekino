import styled from 'styled-components'

const StyledMessages = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-right: 20px;
  position: relative;
  top: 2px;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 30px;
    right: 1px;
    top: -6px;
    background: var(--panelBorderGray);   
  }
  
	i {
    cursor: pointer;
    margin-right: 12px;
    display: inline-block;
    position: relative;
    top: 0;
    width: 20px;
      img {
        width: 20px;
        height: 16px;
        object-fit: cover;
      }
	}
	
	p {
    font-family: var(--fontGilroySemiBold);
    font-size: 14px;
    position: relative;
    top: 1px;
    line-height: 17px;
    letter-spacing: 0.16px;
    color: var(--mainblack);
	}
`

export default StyledMessages
