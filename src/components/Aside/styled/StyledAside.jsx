import styled from 'styled-components'

const StyledAside = styled.div`
    width: 353px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column; 
    & > aside {
      width: 100%;
      background: #FFFFFF;
      border: 1px solid var(--panelBorderGray);
      box-sizing: border-box;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
      border-radius: 2px;
      position:relative;
      overflow: hidden;
      min-height: 686px;
      
      &:after {
        content: '';
        background: #6C7DFF;
        border-radius: 2px 2px 0px 0px;
        width: 100%;
        height: 2px;
        position: absolute;
        top:0;
        left: 0;
      }
    }  
`
export default StyledAside
