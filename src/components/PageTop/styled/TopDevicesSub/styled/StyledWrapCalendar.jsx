import styled, { css } from 'styled-components'

const StyledWrapCalendar = styled.div`
  position: relative;
  display: inline-block;
  
  ${({ isSubscribe }) => {
      if (isSubscribe) {
        return css`
                      span {
                        color: var(--orange);
                      }
                  `
      }
    }} 
`
export default StyledWrapCalendar
