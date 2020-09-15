import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import Styled from './styled/StyledSteps'

const Steps = () => {
  return (
    <Styled.Steps>
      <Styled.Item>
        <i>1</i>
        <p><FormattedMessage id='Steps.Item1' /></p>
      </Styled.Item>

      <Styled.Item>
        <i>2</i>
        <p><FormattedMessage id='Steps.Item2' /></p>
      </Styled.Item>

      <Styled.Item>
        <i>3</i>
        <p><FormattedMessage id='Steps.Item3' /></p>
      </Styled.Item>

      <Styled.Item>
        <i>4</i>
        <p><FormattedMessage id='Steps.Item4' /></p>
      </Styled.Item>

      <Styled.Item>
        <i>5</i>
        <p><FormattedMessage id='Steps.Item5' /></p>
      </Styled.Item>

    </Styled.Steps>
	    )
}
export default injectIntl(Steps)
