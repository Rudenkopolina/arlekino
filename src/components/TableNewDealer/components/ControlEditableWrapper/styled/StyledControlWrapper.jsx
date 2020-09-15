import styled, {css} from 'styled-components';

const StyledControlWrapper = styled.div`
		
		display: flex;
		
		.ant-form-item {
		  position: relative;
		}
		
		${({ control }) => {
      if (control && control === 'textarea') {
      return css`
              cursor:pointer;
              
               .editIcon {
                    opacity: 0;
                    
                } 
              &:hover {
                  .editIcon {
                    opacity: 1;
                     top: -2px;    
                  } 
              }  
     `
  }
}}
}
`;

export default StyledControlWrapper;