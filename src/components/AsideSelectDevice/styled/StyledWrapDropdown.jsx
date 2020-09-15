import styled from 'styled-components'

const StyledWrapDropdown = styled.div` 
  position: relative;

     @media  (max-width: 1249px) {
         width: 100%;
         .ant-dropdown.ant-dropdown-placement-bottomLeft {
            top: 18px !important;
        }
     }
     .ant-empty-image {
        position: relative;
        &:before {
          position: relative;
          top: 20px;
          width: 100%;
          text-align: center;
          content: 'ничего не найдено'
        }
        svg {
          display: none;
        }
     }
  
`

export default StyledWrapDropdown
