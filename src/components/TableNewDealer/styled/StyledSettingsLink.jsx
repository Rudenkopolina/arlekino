import styled from 'styled-components'

const StyledSettingsLink = styled.div`
   opacity: ${({ userType }) => (userType === 'olddealer' ? '1' : '0.5')};
`
export default StyledSettingsLink;
