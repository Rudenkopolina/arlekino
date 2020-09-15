import styled from 'styled-components'
import { DEVICE } from '../../constants/media'

const StyledContainer = styled.div`
    max-width: 1250px;
    display: ${({ display }) => display === "flex" ? "flex" : "block"}};
    ${({ justify }) => justify && `justify-content: ${justify};`}
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
    
    @media ${DEVICE.laptopS} {
    max-width:1200px;
    }
    
    @media ${DEVICE.laptopL}  {
    max-width: 1250px;
    }

    @media ${DEVICE.desktop} {
    max-width: 1450px;
    }
`

export default StyledContainer
