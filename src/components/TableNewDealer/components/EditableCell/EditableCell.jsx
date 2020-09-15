import React from 'react'
import {Form} from 'antd'
import ControlEditableWrapper from '../../components/ControlEditableWrapper/ControlWrapper'
import StyledEditableCell from './styled/StyledEditableCell'
const EditableCell = ({record}) => {
  return  (
    <StyledEditableCell>
      <Form.Item
        name={record.dataIndex}
        rules={[
          {
            required: true,
            message: `${record.title} is required.`,
          },
        ]}
      >
        <ControlEditableWrapper
          defaultValue={'Телевизор на кухне'}
          placeholder={'Телевизор на кухне'}
          name="table01"
        />
      </Form.Item>

      <Form.Item
        name={record.dataIndex}
        rules={[
          {
            required: true,
            message: `${record.title} is required.`,
          },
        ]}
      >
              <ControlEditableWrapper

                placeholder={'Введите коментарий'}
                name="comment01"
                control="textarea"
              />
            </Form.Item>
    </StyledEditableCell>
  )};

export default EditableCell;