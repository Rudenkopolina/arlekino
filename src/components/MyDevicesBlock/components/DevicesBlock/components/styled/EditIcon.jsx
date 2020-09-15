import styled from 'styled-components'

const EditIcon = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  cursor: pointer;
  margin-right: 0;
  margin-left: 0;
  position: absolute;
  top: 4px;
  left: 7px;
  
  svg {
      margin: 0;
      padding: 0;
  }
  svg path {
    padding: 0;
    margin: 0;
    fill: var(--mainblue);
  }
`

export default EditIcon
