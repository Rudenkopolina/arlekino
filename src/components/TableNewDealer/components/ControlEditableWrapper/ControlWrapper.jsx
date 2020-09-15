import React, { Component, createRef } from 'react'
import StyledEditIcon from './styled/StyledEditIcon'
import StyledInput from './styled/StyledInput'
import StyledAcceptIcon from '../../../Forms/UserForm/styled/StyledAcceptIcon'
import StyledControlWrapper from './styled/StyledControlWrapper'
import StyledCellEditPanel from './styled/StyledCellEditPanel'
import StyledTextArea from './styled/StyledTextarea'
import StyledCellEditPanelRight from './styled/StyledCellEditPanelRight'
import StyledVipIcon from '../EditableCell/styled/StyledVipIcon'

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
  }

  render () {
    const { isEditable } = this.state;
    const { control } = this.props
    return (
      <StyledControlWrapper control={control}>

        {
          control && control === 'textarea' ?
            <StyledTextArea
              {...this.props}
              ref={this.inputRef}
              readOnly={!isEditable}
              autoFocus={isEditable}
              iseditable={isEditable ? 1: 0}
              rows={1}
              maxLength={19}
            />
            :
            <StyledInput
              {...this.props}
              ref={this.inputRef}
              maxLength={19}
              readOnly={!isEditable}
              autoFocus={isEditable}
              iseditable={isEditable ? 1: 0}
            />

        }

        <StyledCellEditPanel>
          {(!isEditable) ?
            (
              <>
                <StyledEditIcon className='editIcon' onClick={this.EditDevice}/>
                { ( control !== 'textarea') && <StyledVipIcon/> }
              </>
            )
            :

            (
              <StyledCellEditPanelRight control={control} >
                <StyledAcceptIcon onClick={this.toggleEditable}>
                </StyledAcceptIcon>
                <i onClick={this.toggleEditable}></i>
              </StyledCellEditPanelRight>
            )
          }
        </StyledCellEditPanel>
      </StyledControlWrapper>

    )
  }
}

export default ControlEditableWrapper;