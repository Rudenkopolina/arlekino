import styled from 'styled-components'
import IconSelect from '../../../assets/img/down-select.svg'

const StyledChooseAction = styled.div`
    width: 112px;
    height: 26px;
    border: 1px solid #ECECEC;
    box-sizing: border-box;
    border-radius: 2px;  
    background: var(--white);
    position:relative;
    margin-left: 10px;
    p {
      padding-left: 11px;
      font-family: var(--fontGilroySemiBold);
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 0.16px;
      padding-top: 2px;
      color: var(--mainblue);
    }
    i {
        width: 8px;
        height: 5px;
        background: url(${(IconSelect)}) center center no-repeat;
        background-size: contain;
        position: absolute;
        right: 9px;
        top: 10px;
    }
    && {
      &.ant-dropdown-open {
        i {
          transform: translateY(-1px) rotate(180deg);
        }
      }
    }
  
`
export default StyledChooseAction
