import styled  from 'styled-components'

const Block = styled.div`
  position: absolute;
  width: 200px;
  display: flex;
  align-items: center;
  left: 50%;
  bottom: 14px;
  margin-left: -140px;
`
const Txt = styled.div`
  font-family: var(--fontGilroyMedium);
  font-size: 12px;
  color: var(--mainblack);
  margin-right: 24px;
`
const Item = styled.div`
  font-family: var(--fontGilroySemiBold);
  font-size: 12px;
  margin-right: 15px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#A6A6A6' : 'var(--orange)')};
`
export default  {
  Block,
  Txt,
  Item
};
