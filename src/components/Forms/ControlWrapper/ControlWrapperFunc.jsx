// import React, { useState, useRef, useEffect } from 'react'
// import StyledEditIcon from '../UserForm/styled/StyledEditIcon'
// import StyledAcceptIcon from '../UserForm/styled/StyledAcceptIcon'
// import StyledUserFormPanel from '../UserForm/styled/StyledUserFormPanel'
// import StyledInput from '../UserForm/styled/StyledInput'
// import StyledControlWrapper from '../UserForm/styled/StyledControlWrapper'
//
//
// const ControlEditableWrapper = ({ ... props }) => {
//     const [ isEditable, setEditable ] = useState(false);
//     const toggleEditable = () => {
//         setEditable(!isEditable)
//     };
//
//     const inputRef = useRef(null);
//
//
//     useEffect(() => {
//       if (inputRef && inputRef.current && isEditable) {
//         inputRef.current.focus();
//         console.log('editable focus work')
//       }
//     },[isEditable,inputRef.current]);
//
//     return (
//       <StyledControlWrapper>
//
//           <StyledInput
//               {...props}
//               innerRef={inputRef}
//               ref={inputRef}
//               readOnly={!isEditable }
//               autoFocus={isEditable}
//             />
//
//           <StyledUserFormPanel>
//               {(!isEditable)?
//                 (
//                   <StyledEditIcon onClick={toggleEditable}  />
//                 )
//                 :
//                 (
//                   <>
//                       <StyledAcceptIcon onClick={toggleEditable}>
//                       </StyledAcceptIcon>
//                       <i onClick={toggleEditable}></i>
//                   </>
//                 )
//               }
//           </StyledUserFormPanel>
//       </StyledControlWrapper>
//
//     )
// }
//
// export default ControlEditableWrapper;