import styled from 'styled-components';

const StyledCellEditPanel = styled.div`
    align-items: center;
    justify-content: space-between;
    width: 36px;
    position: absolute;
    display: flex;
    right: 4px;
    height: 20px;

    label {
      margin-right: 0 !important;
    }
    .ant-form-item {
      margin-bottom: 0;
    }
  
  `
export default StyledCellEditPanel;