import styled from 'styled-components'
// import { Radio } from 'antd';
import { DEVICE } from '../../../../../constants/media'

const StyledLangRadioGroup = styled.div`
    {
        width: 100%;
        display: flex;
        border: none;
        color: var(--hrefColor);
        @media ${DEVICE.tabletDevices1250} {
            justify-content: center;
        }
    }
`

export default StyledLangRadioGroup
