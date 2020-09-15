import React , { useState, useEffect  } from 'react'
import StyledInput from './styled/StyledInput'
import { Form, Button } from 'antd'
import StyledForm from './styled/StyledForm'

const AddNewDeviceForm = ({
  handleSubmit,
  formName,
  intl
}) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <StyledForm>
      <Form form={form} layout="inline">
        <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Заполните поле',
              },
            ]}
          >
            <StyledInput
              name="NewDeviceName"
              placeholder= {intl.formatMessage({id: 'Modal.Add.TxtForm'})}
            />
        </Form.Item>
        <Button htmlType="submit" >Ok</Button>
    </Form>
    </StyledForm>
  )
};


export default AddNewDeviceForm;