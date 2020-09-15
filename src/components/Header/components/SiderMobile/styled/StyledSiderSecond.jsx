import styled , {css} from 'styled-components'
import { Layout } from 'antd';
const { Sider } = Layout;

const StyledSiderSecond = styled(Sider)`
	  position: fixed !important;
    left: -100%;
    height: 100%;
    padding: 0 0 50px 0;
    background: #fff;
    min-height: 100vh;
    flex: 0 0 0 !important; 
    max-width: 0!important; 
    min-width: 0 !important; 
    width: 0 !important; 
    z-index: 120;
    
       ${({ collapsed }) => {
          if (collapsed) {
            return css`
             left: 0;
             top: 125px;
             position: fixed !important;
             flex: 0 0 100% !important; 
             max-width: 100% !important; 
             min-width: 100% !important; 
             width: 100% !important;  
                   
       `}}}
       
       


`

export default StyledSiderSecond
