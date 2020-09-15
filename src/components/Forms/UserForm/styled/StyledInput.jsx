import styled from 'styled-components';
import { Input } from 'antd';
import { DEVICE } from '../../../../constants/media'


const StyledInput = styled(Input)`
	&& {
		width: 167px;
		height: 32px;
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 13px;
		border: 1px solid var(--borderInput);
		box-sizing: border-box;
		border-radius: 2px;
		padding: 8px 11px;
		margin-right: 9px;
		color: var(--mainblack);
		@media ${DEVICE.tabletDevices1250} {
			min-width: 178px;
			width: calc(100% - 125px);
			height: 36px;
			font-size: 16px;
		}
			@media (max-width: 359px) {
            width: 147px;
            min-width: 148px;
       }
		
		.ant-input-affix-wrapper>input.ant-input {
				line-height: 16px;
		}
		.ant-input-suffix {
				display: none !important;
		}
		&:read-only {
			opacity: 0.5;  
		}
		&[readonly] {
    	opacity: 0.5;  
		}
		
		&:focus {
			border: solid 1px var(--borderInput);
		}
		&:hover {
		   border: 1px solid var(--borderInput);
       }
        
		.ant-input-focused {
			border: solid 1px var(--borderInput);
		}
        
        &[disabled]{
           opacity: 0.5;  
        }
        
			&[autofocus]::-moz-placeholder:focus {
			  color: var(--mainblack)  !important;
			}
			
			
			&[autofocus]:-moz-placeholder:focus {
			  color: var(--mainblack) !important;
			}
		
			&[autofocus]::-webkit-input-placeholder {
			  color: var(--mainblack) !important;
			}
			.ant-form-item-label {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				line-height: 15px;
				color: var(--gray);
				width: 60px;
				@media ${DEVICE.tabletDevices1250} {
					width: 70px;
					font-size: 16px;
				}
				
				font-family: var(--fontGilroyRegular);
			}
			.ant-form-item-label > label {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				line-height: 15px;
				color: var(--gray);
				width: 60px;
				font-family: var(--fontGilroyRegular);
				
				@media ${DEVICE.tabletDevices1250} {
					width: 70px;
					font-size: 16px;
				}
			}
	}
`;

export default StyledInput;

// const ItemWrapper = styled.div`
//   position: relative;
// `;
// const CommentItem = React.forwardRef(
// 	({ ...props}, ref) => {
// 		return (
// 			<ItemWrapper>
// 				<StyledInput {...props} ref={ref} />
// 			</ItemWrapper>
// 		);
// 	}
// );
// export default CommentItem;