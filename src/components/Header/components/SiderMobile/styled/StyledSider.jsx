import styled , {css} from 'styled-components'
import { Layout } from 'antd';
const { Sider } = Layout;


const StyledSider = styled(Sider)` 
    position: fixed !important;
    left: -100%;
    height: 100%;
    padding: 0 0 50px 0;
    background: #fff;
    min-height: 100vh;
    z-index: 100;
    top: 62px;
    flex: 0 0 0 !important; 
    max-width: 0!important; 
    min-width: 0 !important; 
    width: 0 !important; 
    
    
    .ant-layout-sider-children {
      min-height: 100vh;
      @media (min-width: 768px) and (max-width: 1249px) {
          min-height: 100vh;
          height: 100%;
      }
    }
 
       ${({  collapsed }) => {
          if ( collapsed) {
            return css`
             left: 0;
             position: fixed !important;
             flex: 0 0 100% !important; 
             max-width: 100% !important; 
             min-width: 100% !important; 
             width: 100% !important; 
                `}}}
      
    
`

export default StyledSider
