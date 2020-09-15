import React, {Component, createRef } from 'react'
import StyledEditIcon from '../UserForm/styled/StyledEditIcon'
import StyledAcceptIcon from '../UserForm/styled/StyledAcceptIcon'
import StyledUserFormPanel from '../UserForm/styled/StyledUserFormPanel'
import StyledInput from '../UserForm/styled/StyledInput'
import StyledControlWrapper from '../UserForm/styled/StyledControlWrapper'


class ControlEditableWrapper extends Component  {

  constructor(props) {
    super(props);
    this.inputRef= createRef()
    this.state =
      {
        isEditable: false, // Check here to configure the default column
      };
    this.inputRef = React.createRef();
  }

  toggleEditable = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable
    }))
  };


  EditDevice = () => {
    const node = this.inputRef.current;
    this.setState(prevState => ({
        isEditable: true
      }),

      () => node.focus()
    )

    // console.log(node,this.state.isEditable);
  }

  render () {
    const { isEditable } = this.state;
    return (
      <StyledControlWrapper>

          <StyledInput
            {...this.props}
            ref={this.inputRef}
            readOnly={!isEditable}
            autoFocus={isEditable}
          />

        <StyledUserFormPanel>
          {(!isEditable) ?
            (
              <StyledEditIcon onClick={this.EditDevice}/>
            )
            :
            (
              <>
                <StyledAcceptIcon onClick={this.toggleEditable}>
                </StyledAcceptIcon>
                <i onClick={this.toggleEditable}></i>
              </>
            )
          }
        </StyledUserFormPanel>
      </StyledControlWrapper>

    )
  }
}

export default ControlEditableWrapper;