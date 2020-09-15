import React , { useState } from 'react'
import { injectIntl } from 'react-intl'
import StyledInput from './styled/StyledInput'
import StyledInputPassword from './styled/StyledInputPassword'
import { Form } from 'antd'
import StyledUserFormPanel from './styled/StyledUserFormPanel'
import StyledEditIcon from './styled/StyledEditIcon'
import StyledForm from './styled/StyledForm'
import StyledAcceptIcon from './styled/StyledAcceptIcon'

const UserForm = ({
  handleSubmit,
  formName,
  intl
}) => {
  const [ isEditable, setEditable ] = useState(false);
  const toggleEditable = () => {
    setEditable(!isEditable);
  };
  const [form] = Form.useForm();

  return (
    <StyledForm>
      <Form form={form} layout="horizontal">
        <Form.Item
          label={intl.formatMessage({id: 'FormUser.Login'})}
          rules={[
            {
              required: true,
              message: 'Заполните поле',
            },
          ]}
        >
          <StyledInput
            name="login"
            defaultValue={'valeriy_p'}
            readOnly={ !isEditable }
          />
          <StyledUserFormPanel editable={true}>
            {(!isEditable)?
              (
                <StyledEditIcon onClick={toggleEditable} />
              )
              :
              (
                <>
                  <StyledAcceptIcon onClick={toggleEditable}></StyledAcceptIcon>
                  <i onClick={toggleEditable}></i>
                </>
              )
            }
          </StyledUserFormPanel>

        </Form.Item>

        <Form.Item
          label={intl.formatMessage({id: 'FormUser.Password'})}
          rules={[
            {
              required: true,
              message: 'Заполните поле',
            },
          ]}
        >

          <StyledInputPassword
            value={'valeriy_p'}
            name="pass"
            readOnly={ true }

          />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({id: 'FormUser.Email'})}
          rules={[
            {
              required: true,
              message: 'Заполните поле',
            },
          ]}
        >
          <StyledInput
            value={'valeriy@mail.ru'}
            placeholder={'valeriy@mail.ru'}
            name="mail"
            readOnly={ true }

          />
        </Form.Item>
      </Form>
    </StyledForm>
  )
};
export default injectIntl(UserForm);