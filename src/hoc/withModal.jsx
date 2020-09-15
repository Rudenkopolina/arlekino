// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from "reselect";
//
// // import { isModalVisibleSelector } from '../services/modals/modals.selectors';
// // import { setModalStatusAction } from '../services/modals/modals.action';
// import StyledModal from './styled/StyledModal';
// import IconCloseSvg from '../assets/img/closewhite.svg';
//
// const ModalWrapper = ({
//     setModalStatus,
//     component: Component,
//     isModalVisible ,
//     footer = null,
//     ...props
// }) => (
//     <StyledModal
//         visible={isModalVisible}
//         footer={footer}
//         onCancel={setModalStatus.bind(null, null)}
//         {...props}
//         closeIcon={<img src={IconCloseSvg} alt="" />}
//     >
//         <Component
//             {...props}
//             setPopupStatus={setModalStatus}
//         />
//     </StyledModal>
// );
//
// // ModalWrapper.propTypes = {
// //     modalId: PropTypes.string.isRequired,
// //     component: PropTypes.elementType.isRequired
// // };
//
// export default connect(
//     createStructuredSelector({
//         isModalVisible: (state, { modalId }) => isModalVisibleSelector(state, modalId)
//     }),
//     {
//         setModalStatus: setModalStatusAction,
//     })(ModalWrapper);