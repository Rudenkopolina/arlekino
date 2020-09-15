import React, { Component, createRef,  } from 'react'
import { injectIntl } from 'react-intl'
import StyledInput from './styled/StyledInput'
import { Form } from 'antd'
import StyledForm from './styled/StyledForm'
import ControlEditableWrapper from '../ControlWrapper/ControlWrapper'

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.inputRef= createRef()
    this.state =
      {
        isEditable: false, // Check here to configure the default column
      };
    this.formRef = React.createRef();
  }


render () {

  const { intl } = this.props

  return (
    <StyledForm>
      <Form layout="horizontal">
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
            defaultValue={ 'valeriy' }
            id="loginName"
            readOnly={ true }
          />

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
          <ControlEditableWrapper
            defaultValue={ 'password' }
            name="pass"
            id="password"
            type="password"
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

          <ControlEditableWrapper
            defaultValue={'valeriy@mail.ru'}
            placeholder={'valeriy@mail.ru'}
            name="mail"
          />

        </Form.Item>
      </Form>
    </StyledForm>
  )
}


};
export default injectIntl(UserForm);