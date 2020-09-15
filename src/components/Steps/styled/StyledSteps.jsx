import styled from 'styled-components'

const Steps = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;
`
const Item = styled.div`
  display: inline-flex;
  width: 90px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 64px;
  margin-left: 80px;
  cursor: pointer;
  &:hover {
    i {
        color: var(--white);
        background: var(--mainblue);
    }
    p {
        color: var(--mainblue);
    }
  }

  &:first-child {
    margin-left: 0;
    i {
        color: var(--white);
        background: var(--mainblue);
    }
    p {
        color: var(--mainblue);
    }
  }
  
  i {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    background: var(--white);
    border: 1px solid var(--panelBorderGray);
    box-sizing: border-box;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.05);
    font-family: var(--fontGilroyBold);
    font-size: 18px;
    line-height: 28px;
    border-radius: 50%;
    color: var(--gray); 
    padding-top: 1px;
    transition: all 0.3s ease-in;
    &:hover {
        color: var(--white);
        background: var(--mainblue);
    }
  }
  p {
    width: 100%;
    padding-top: 4px;
    font-family: var(--fontGilroyRegular);
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: var(--gray);
    transition: all 0.3s ease-in;
     &:hover {
        color: var(--mainblue);
    }
  }
`
export default {
  Steps,
  Item
}
