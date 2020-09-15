import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import StyledAsideLinkList from './styled/StyledAsideLinkList'
import StyledPanel from './styled/StyledPanel'
import { Collapse } from 'antd';
import StyledPicon from './styled/StyledPicon'
import CopyLinkModal from '../../../../../Modal/CopyLinkModal/CopyLinkModal'
import StyledCopyLink from './styled/StyledCopyLink'

const links = [
  {
    id: '1',
    link: 'http://1srv.org/iptv/p/Sharavoz.Tv.ott.m3u1'
  },
  {
    id: '2',
    link: 'http://1srv.org/iptv/p/Sharavoz.Tv.ott.m3u23'
  },
  {
    id: '3',
    link: 'http://1srv.org/iptv/p/Sharavoz.Tv.ott.m3u32'
  }
]


const AsideLinkList = ({intl}) => {
  const [ isVisibleCopyModal, setVisibleCopyModal ] = useState(false);
  const toggleVisibleCopyModal = () => {
    setVisibleCopyModal(!isVisibleCopyModal)
  };

  return (
    <StyledAsideLinkList>
      <Collapse expandIconPosition="right">
        {
          links.map( (link,index) => {
            return (
              <StyledPanel
                key={ link.id }
                header={
                  intl.formatMessage({id: `AsideLinkList.Item${index+1}`}, { icon: <i  key={ link.id }></i> }) }

              >
                <a href={link.link} title={link.link} >{link.link}</a>
                <StyledCopyLink onClick={toggleVisibleCopyModal} ></StyledCopyLink>
              </StyledPanel>
            )
          })
        }
      </Collapse>

      <StyledPicon>
        <p>Picon<i></i></p>
      </StyledPicon>
      <CopyLinkModal isVisible={isVisibleCopyModal} toggleVisibility={toggleVisibleCopyModal}/>
    </StyledAsideLinkList>
  )
}

export default injectIntl(AsideLinkList)

