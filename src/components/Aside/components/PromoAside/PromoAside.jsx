import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage, injectIntl } from 'react-intl'
import Styled from './styled/StyledPromoAside'

const PromoAside = () => {
  const [ isVisibleBlock, setVisibilityBlock ] = useState(true);
  const toggleVisibilityBlock = () => {
    setVisibilityBlock(!isVisibleBlock);
  };

  return (
    <Styled.Block isVisibleBlock={isVisibleBlock}>

      <Styled.Img/>
      <Styled.Close onClick={toggleVisibilityBlock}></Styled.Close>

      <Styled.TxtBlock>
        <p> <FormattedMessage id='PromoAside.Txt1' /> </p>
        <p> <FormattedMessage id='PromoAside.Txt2' /> </p>
      </Styled.TxtBlock>

      <Styled.BgTxt><FormattedMessage id='PromoAside.Txt3' /></Styled.BgTxt>

      <Link to=''>
        <FormattedMessage id='PromoAside.Href' />
      </Link>

    </Styled.Block>
	    )
}
export default injectIntl(PromoAside)
