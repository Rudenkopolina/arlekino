import styled, { css } from 'styled-components'

const StyledDropdownItem = styled.div`
    width: 100%;
    display: flex;
    cursor:pointer;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;
    padding: 4px 23px 4px 26px;
    position: relative;
    height: 30px;
    font-family: var(--fontGilroyRegular);
    font-size: 15px;
    line-height: 20px;
    p {
      font-family: var(--fontGilroyRegular);
      font-size: 14px;
      line-height: 20px;
    }
    input {
    
    }
  
       ${({isActive,isEditable }) => {
          if (!isActive && !isEditable) {
            return css`
              &:hover {
                input {
                              color: var(--white) !important;
                              &::placeholder {
			                           color: var(--white) !important;
		                          }
		                          &:focus::-moz-placeholder {
                                    color: var(--white) !important;
                                }

                              &[autofocus]::-moz-placeholder:focus {
                                color: var(--white)  !important;
                              }
                            }
                             background: var(--mainblue);
                             color: var(--white); 
                             &::placeholder {
			                           color: var(--white) !important;
		                          }
                              svg path {
                                  fill: var(--white) !important;
                              } 
              }
               
             `}
        }}

      ${({isActive,isEditable }) => {
        if (isActive && !isEditable) {
            return css`
              cursor: pointer !important;
                      input {
                              color: var(--white) !important;
                              cursor: pointer !important;
                               &::placeholder {
			                           color: var(--white) !important;
		                          }
                            }
                             background: var(--mainblue);
                             color: var(--white); 
                              svg path {
                                  fill: var(--white) !important;
                              } 
                 `}
        }}
}
`

export default StyledDropdownItem
