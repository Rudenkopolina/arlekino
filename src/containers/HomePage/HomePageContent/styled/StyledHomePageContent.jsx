import styled from 'styled-components'
import { DEVICE } from '../../../../constants/media';

const HomePageContent = styled.div`
	flex: 1;
	
	@media ${DEVICE.tabletDevices1250} {
      flex-wrap: wrap;
      padding-top: 15px;
      overflow-x: hidden;
  }
`
const PageContent = styled.div`
	width: calc(100% - 353px);
	padding-bottom: 200px;

	@media ${DEVICE.wideScreen} {
     width: calc(100% - 420px);
  }
	
	@media ${DEVICE.tabletDevices1250} {
      width: 100%;
  }
	
`
export default {
  HomePageContent,
  PageContent
}
