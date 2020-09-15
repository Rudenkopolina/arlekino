import styled from 'styled-components';
import { DEVICE } from '../../../../constants/media'


const StyledWrapperInput = styled.div`
		
		border: 1px solid blue;
		width: 167px;
		@media ${DEVICE.tabletDevices1250} {
			//min-width: 178px;
			//width: calc(100% - 125px);
		}
`;

export default StyledWrapperInput;