import React , { useState, useEffect  } from 'react'
import StyledInput from './styled/StyledInput'
import { Form, Button } from 'antd'
import StyledForm from './styled/StyledForm'


const AddNewPlaylistForm = ({
  handleSubmit,
  formName,
  intl
}) => {
  const [form] = Form.useForm();
  const [, forceUpdate ] = useState(); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <StyledForm>
      <Form form={form} layout="inline">
        <Form.Item
            name="playlistname"
            rules={[
              {
                required: true,
                message: 'Заполните поле',
              },
            ]}
          >
            <StyledInput
              name="NewPlaylistName"
              placeholder= {intl.formatMessage({id: 'Modal.AddPlaylist.TxtForm'})}
            />
        </Form.Item>
        <Button htmlType="submit" >Ok</Button>
    </Form>
    </StyledForm>
  )
};

export default AddNewPlaylistForm;