import React from 'react'
import StyledThTop from '../../styled/StyledThTop'
import StyledTitleTable from '../../styled/StyledTitleTable'
import StyledInput from '../../styled/StyledInput'
import StyledTopSettings from '../../styled/StyledTopSettings'


const ServersTopBlock = ({isVisibleSettings}) => {

  return (
    <>
      <StyledThTop>
        <StyledTitleTable>Cервер</StyledTitleTable>
      </StyledThTop>

      <StyledTopSettings isVisibleSettings={isVisibleSettings}>
        <StyledInput
          width='128px'
          placeholder="Имя сервера"
          onChange={() => {}}
        />
      </StyledTopSettings>

    </>

  )};

export default ServersTopBlock;