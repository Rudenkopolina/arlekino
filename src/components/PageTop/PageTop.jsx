import React  from 'react'
import { FormattedMessage } from 'react-intl'
import Styled from './styled/StyledPageTop'
import TopPanel from './components/TopPanel/TopPanel'
import TopDevicesSub from './styled/TopDevicesSub/TopDevicesSub'
import SliderNotifications from './components/SliderNofications/SliderNotifications'


// <TopDevicesSub/><SliderNotifications/>
const PageTop = () => {

  return (
    <Styled.PageTop>
        <Styled.Title>
          <FormattedMessage id='PageTop.Title1' />
          <span><FormattedMessage id='PageTop.Title2' /></span>
        </Styled.Title>

      <Styled.Aside>
        <TopPanel />
        <TopDevicesSub/>
      </Styled.Aside>

    </Styled.PageTop>
	    )
}
export default PageTop
