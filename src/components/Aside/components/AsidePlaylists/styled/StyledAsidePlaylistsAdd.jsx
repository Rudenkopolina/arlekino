import styled from 'styled-components'
import IconAdd from '../../../../../assets/img/update/plus.svg';

const StyledAsidePlaylistAdd = styled.div`
    font-family: var(--fontGilroySemiBold);
    font-size: 14px;
    line-height: 20px;
    color: var(--mainblue);
    cursor:pointer;
    display: flex;
    align-items: center;
    
     i {
        cursor: pointer;
        width: 12px;
        height: 14px;
        display: inline-block;
        position:relative;
        top: -1px;
        margin-left: 8px;
        background: url(${(IconAdd)}) center center no-repeat;
     }
`
export default StyledAsidePlaylistAdd
