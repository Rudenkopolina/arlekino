import styled from 'styled-components'

const StyledAsideServersContent = styled.div`
	display: flex;
	width: 100%;
	height: 157px;
	padding: 12px 10px 6px 14px;
	border: 1px solid var(--panelBorderGray);
	background: var(--panelBgGray);
  border-radius: 4px;
  margin-bottom: 30px;
  
   @media  (max-width: 767px) {
        margin-top: 12px;	
        margin-bottom: 4px;
   }
   
   @media (min-width: 1250px) {
	    margin-top: 33px;
	 }

   @media (min-width: 768px) and (max-width: 1249px) {
       margin-top: 12px;	
   }
`
export default StyledAsideServersContent
