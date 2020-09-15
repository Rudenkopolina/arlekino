import React, {Component, createRef } from 'react'
// import StyledEditIcon from '../../../../components/Forms/UserForm/styled/StyledEditIcon'
// import StyledAcceptIcon from '../../../../components/Forms/UserForm/styled/StyledAcceptIcon'
// import StyledUserFormPanel from '../../../../components/Forms/UserForm/styled/StyledUserFormPanel'
import StyledInput from './styled/StyledInput'
// import StyledControlWrapper from '../../../../components/Forms/UserForm/styled/StyledControlWrapper'


class ControlEditableWrapper extends Component  {

  constructor(props) {
    super(props);
    this.inputRef= createRef()
    this.state =
      {
        // isEditable: false, // Check here to configure the default column
      };
    this.inputRef = React.createRef();
  }

  // toggleEditable = () => {
  //   this.setState(prevState => ({
  //     isEditable: !prevState.isEditable
  //   }))
  // };


  EditDevice = () => {
    const node = this.inputRef.current;
    this.setState(prevState => ({
        isEditable: true
      }),

      () => node.focus()
    )
  }

  render () {
    const { isEditable } = this.props;
    return (

          <StyledInput
            name={this.props.name}
            id="test"
            defaultValue={this.props.name}
            readOnly={!isEditable}
            autoFocus={isEditable}
            iseditable={isEditable? 1: 0}
          />

    )
  }
}

export default ControlEditableWrapper;