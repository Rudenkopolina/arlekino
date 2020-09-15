import styled from 'styled-components'

const StyledDropdownList = styled.div`
    position: relative;
    padding: 13px 0; 
	  width: 346px;
    height: 122px;
    overflow-y: scroll;
    background: var(--white);
    border: 1px solid var(--panelBorderGray);
    box-sizing: border-box;
    border-radius: 4px;  
    &:before {
      content: '';
      position: absolute;
      top: -7px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background: var(--white);
    }
`
export default StyledDropdownList
