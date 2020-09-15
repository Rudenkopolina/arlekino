import React, { useState } from 'react'

import DatePicker from '../../../DatePicker/DatePicker'
import { Dropdown } from 'antd'

const DropDownPicker = ({children}) => {

  const [ isVisibleDate, setVisibleDate ] = useState(false);
  const toggleVisibleDate = () => {
    setVisibleDate(!isVisibleDate)
  };

  return (
          <Dropdown getPopupContainer={trigger => trigger.parentNode} placement="bottomLeft" visible={isVisibleDate} onClick={toggleVisibleDate} overlay={<DatePicker isVisible={isVisibleDate} toggleVisible={toggleVisibleDate} />} trigger={['click']}>
            {children}
          </Dropdown>
  )
}
export default DropDownPicker;
