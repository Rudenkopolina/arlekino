import React from 'react'
import { Input } from 'antd'
import Styled from '../../containers/HomePage/styled/StyledHomePageContent'

const EditableInput = ({}) => {
  const editable=true

  return (
    <div>
      <div>
        <Input readOnly={true} value={'ddddd'} />
        <Input readOnly={false} value={''} />
        <div> hfhfhf </div>
      </div>

    </div>
  )
}
export default EditableInput
