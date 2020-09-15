import styled from 'styled-components'
import { DatePicker } from 'antd'

const StyledDatePicker = styled(DatePicker)`
  && {
    .ant-picker-time-panel {
      //display: none !important;
    }
    .ant-picker-datetime-panel .ant-picker-time-panel {
      //display: none !important;
    }
     .ant-picker-cell .ant-picker-cell-today {
        border: 1px solid #5C70CF;
        border-radius: 50%;  
     }
     .ant-picker-cell-inner {
        font-size: 12px;
        font-family: var(--fontGilroyRegular); 
     }

}
     
`

export default StyledDatePicker;
