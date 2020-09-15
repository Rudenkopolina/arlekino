import styled from 'styled-components'
import IconAdd from '../../../../../assets/img/update/plus.svg';
import IconAddMobile from '../../../../../assets/img/mobileadd.svg'
import { DEVICE } from '../../../../../constants/media'

const StyledAsidePlaylistAdd = styled.div`
    font-family: var(--fontGilroySemiBold);
    font-size: 14px;
    line-height: 20px;
    color: var(--mainblue);
    cursor:pointer;
    display: flex;
    align-items: center;
    p {
        display: inline-block;
        @media ${DEVICE.tabletDevices1250} {
            display: none;
        }
    }
    
     i {
        cursor: pointer;
        width: 12px;
        height: 14px;
        display: inline-block;
        position:relative;
        top: -1px;
        margin-left: 8px;
        background: url(${(IconAdd)}) center center no-repeat;
        
        @media ${DEVICE.tabletDevices1250} {
            width: 22px;
            height: 20px;
            top: -1px;
            right: 8px;
            margin-left: 8px;
            background: url(${(IconAddMobile)}) center center no-repeat;
            background-size: cover;
            z-index: 22;
        }
         @media (max-width: 767px)  {
            right: 13px;
          }
         @media (min-width: 768px) and (max-width: 1249px) {
             right: 8px;
          }
        
     }
`
export default StyledAsidePlaylistAdd
