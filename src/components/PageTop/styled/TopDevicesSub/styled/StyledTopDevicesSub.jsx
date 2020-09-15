import styled from 'styled-components'

const TopDevicesSub = styled.div`
  width: 100%;
  background: var(--white);
  border: 1px solid var(--panelBorderGray);
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  height: 155px;
  margin-top: 10px;
  
  header {
    width: 100%;
    height: 36px;
    display: flex;
    background: var(--panelBgGray);
    border-bottom: 1px solid var(--panelBorderGray);
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    padding: 6px 22px 0 19px; 
    justify-content: space-between; 
    &> {
        span {
          font-family: var(--fontGilroySemiBold);
          font-size: 12px;
          line-height: 20px;
          color: var(--mainblue);
          cursor: pointer;
      } 
    }
  }
  h5 {
    font-family: var(--fontGilroyMedium);
    font-size: 12px;
    line-height: 24px;
    color: var(--gray);
  }
`

const Content = styled.div`
  background: var(--white);
  margin: 10px 8px 0 18px;
  width: 315px;
  height: 95px;
  overflow-x: hidden;
  overflow-y: scroll;
`
export default {
  Content,
  TopDevicesSub
};
