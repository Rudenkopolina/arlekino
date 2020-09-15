import styled from 'styled-components'
import { Tooltip } from 'antd'

const StyledTooltip = styled(Tooltip)`
    && {
   
      .ant-tooltip-content {
          border: 1px solid var(--orange);
          background-color: var(--white);
          position: relative;
          height: 40px;
          border-radius: 3px;
          font-size: 13px;
          letter-spacing: normal; 
        }

        .ant-tooltip .ant-tooltip-arrow {
            border-top-color: var(--white);
            border-bottom-color: var(--white);
        }

        .ant-tooltip-arrow {
            border-top-color: var(--white);
        }

        .ant-tooltip-inner {
          
            padding: 1.2rem 1.6rem;
            text-align: left;
            vertical-align: middle;
            
            font-weight: normal;
            white-space: normal;
            color: var(--mainblack);
            background: var(--white);
            word-break: normal;
            overflow-wrap: break-word;
        }
    }
 `
export default StyledTooltip;
