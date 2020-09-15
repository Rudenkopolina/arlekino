import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import StyledAsideLinkList from './styled/StyledAsideLinkList'
import StyledPanel from './styled/StyledPanel'
import { Collapse } from 'antd';
import StyledPicon from './styled/StyledPicon'

const links = [
  {
    link: 'http://1srv.org/iptv/p/Sharavoz.Tv.ott.m3u'
  },
  {
    link: 'http://1srv.org/iptv/p/Sharavoz.Tv.ott.m3u23'
  },
  {
    link: 'http://1srv.org/iptv/p/Sharavoz.Tv.ott.m3u3'
  }
]



const AsideLinkList = ({intl}) => (
  <StyledAsideLinkList>
    <Collapse  expandIconPosition="right">
        {
          links.map( (link,index) => {
            return (
              <StyledPanel
                key={link.link}
                header={ intl.formatMessage({ id: `AsideLinkList.Item${index+1}` }) }
              >
                <a href='#' title={link.link} >{link.link}</a>
                <i></i>
              </StyledPanel>
            )
          })
        }
    </Collapse>

    <StyledPicon>
      <p>Picon<i></i></p>
    </StyledPicon>
  </StyledAsideLinkList>
)
export default injectIntl(AsideLinkList)
