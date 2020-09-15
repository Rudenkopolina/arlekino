import React from 'react'
import Styled from './styled/ShowPagesFooter'

const ShowPagesFooter = () => {
  return (
    <Styled.Block>
      <Styled.Txt>Показывать по</Styled.Txt>
        <Styled.Item isActive={true}>10</Styled.Item>
        <Styled.Item>20</Styled.Item>
        <Styled.Item>30</Styled.Item>
    </Styled.Block>
  )};

export default ShowPagesFooter;