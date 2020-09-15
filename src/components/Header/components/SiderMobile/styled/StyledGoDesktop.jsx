import styled from 'styled-components'

const StyledGoDesktop = styled.div`
  position: absolute;
  right: 28px;
  top: -2px;
  font-family: var(--fontGilroyMedium);
  font-size: 12px;
  line-height: 20px;
  color: var(--mainblue);
   @media (max-width: 767px) {
   	 top: 0;
   	 right: 27px;
  }
  @media (min-width: 768px) and (max-width: 1249px) {
   	 top: 0;
   	 right: 28px;
  }

`

export default StyledGoDesktop
