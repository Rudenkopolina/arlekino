import styled from 'styled-components'

const Table = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const TableLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 186px;
  padding-right: 20px;
  position: relative;
  border-right: 1px solid var(--panelBorderGray);  
  
  p {
    width: 100%;
    display: inline-block;
    font-family: var(--fontGilroyRegular);
    font-size: 13px;
    line-height: 15px;
    padding-bottom: 7px; 
  }
`
const TableRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 128px;
  padding-left: 8px;
  &>div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
   p {
    width: 100%;
    display: inline-block;
    font-family: var(--fontGilroyRegular);
    font-size: 12px;
    height: 25px;
    padding-bottom: 6px; 
    span {
      color: var(--orange);
    }
  }
  
`

export default {
  Table,
  TableLeft,
  TableRight
}
