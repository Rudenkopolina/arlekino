import styled from 'styled-components'
import IconReload from '../../../../../../../assets/img/update/reload.svg';
import IconCopy from '../../../../../../../assets/img/copyicon.svg';

const StyledAsideOttId = styled.div`
	display: flex;
	width: 100%;
	height: 45px;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--panelBorderGray);
	padding: 0 22px 0 17px;
	cursor: pointer;
	

	
	&>header {
	  display: inline-flex;
	  cursor: pointer;
	   p {
	    cursor: pointer;
	    color: var(--gray);
      font-family: var(--fontGilroySemiBold);
      font-size: 14px;
      line-height: 20px;
      display: inline-block;
       i {
        cursor: pointer;
        width: 16px;
        height: 14px;
        display: inline-block;
        margin-left: 10px;
        position:relative;
        top:2px;
        background: url(${(IconReload)}) center center no-repeat;
     }
	   }
	}
	
	&>div {
	  display: inline-flex;
	
	
		p {
      color: var(--mainblack);
      font-family: var(--fontGilroySemiBold);
      font-size: 12px;
      line-height: 20px;
      display: inline-block;
      cursor: pointer;
	  }
	
    i {
          cursor: pointer;
          width: 16px;
          height: 18px;
          display: inline-block;
          margin-left: 14px;
          opacity: ${({ isOpacity }) => (isOpacity ? '0.5' : '1')};
          background: url(${(IconCopy)}) center center no-repeat;
          background-size: contain;
       }
	}


	
	
`
export default StyledAsideOttId
