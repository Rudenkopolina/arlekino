import React from 'react'
import StyledThTop from '../../styled/StyledThTop'
import StyledTitleTable from '../../styled/StyledTitleTable'
import StyledSelectSubscribe from '../../styled/StyledSelectSubscribe'
import { Select } from 'antd'
import StyledTopSettings from '../../styled/StyledTopSettings'
const { Option } = Select

const SubscribeTopBlock = ({ isVisibleSettings }) => {
  return (
    <>
      <StyledThTop>
        <StyledTitleTable>Подписки</StyledTitleTable>
      </StyledThTop>

      <StyledTopSettings isVisibleSettings={isVisibleSettings}>
        <StyledSelectSubscribe
          defaultValue="Все"
          dropdownClassName="selectSubscribe"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <Option value="lucy0">Все</Option>
          <Option value="lucy2">Активные</Option>
          <Option value="lucy3">Неактивные</Option>
          <Option value="lucy4">Заканчивающиеся</Option>
        </StyledSelectSubscribe>
      </StyledTopSettings>

    </>

  )};

export default SubscribeTopBlock;