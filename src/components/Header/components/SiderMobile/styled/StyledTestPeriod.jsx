import styled  from 'styled-components'
import { Link } from 'react-router-dom'

const StyledTestPeriod = styled(Link)`
  padding: 20px 18px  20px 28px;
  font-family: var(--fontGilroySemiBold);
  text-transform: uppercase;
  font-size: 12px;
  line-height: 20px;
  color: var(--mainblue);
  display: inline-block;
  width: 100%;
  margin-bottom: 80px;
  
  @media (max-width: 767px) {
     padding: 20px 18px  20px 15px;
  }
   @media (min-width: 768px) and (max-width: 1249px) {
        padding: 20px 18px  20px 2px;
   }
`
export default StyledTestPeriod
