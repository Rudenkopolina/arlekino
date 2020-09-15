import React, { useState } from 'react'
import { FormattedMessage,  injectIntl } from 'react-intl'
import Styled from './styled/StyledIntro';
import step1 from '../../assets/img/step1.svg'
import step2 from '../../assets/img/step2.svg'
import step3 from '../../assets/img/step3.svg'
import step4 from '../../assets/img/step4.svg'
import step5 from '../../assets/img/step5.svg'

const Intro = () => {
  const [ isVisibleBlock, setVisibilityBlock ] = useState(true);
  const toggleVisibilityBlock = () => {
    setVisibilityBlock(!isVisibleBlock);
  };

  return (
    <Styled.Block isVisibleBlock={isVisibleBlock}>
      <Styled.Title><FormattedMessage id="Intro.Title1" /> <span><FormattedMessage id="Intro.Title2" /></span></Styled.Title>
      <Styled.Close onClick={toggleVisibilityBlock}/>
      <Styled.Img />
      <Styled.Subtitle>
        <FormattedMessage id="Intro.Go" />
      </Styled.Subtitle>
      <Styled.Steps>
        <Styled.Item>
          <header><FormattedMessage id="Intro.Step1Icon" /><i><img src={step1}  alt='' /></i></header>
          <p>
            <FormattedMessage id="Intro.Step1Txt" />
          </p>
        </Styled.Item>

        <Styled.Item>
          <header><FormattedMessage id="Intro.Step2Icon" /><i><img src={step2}  alt='' /></i></header>
          <p>
            <FormattedMessage id="Intro.Step2Txt" />
          </p>
        </Styled.Item>

        <Styled.Item>
          <header><FormattedMessage id="Intro.Step3Icon" /><i><img src={step3}  alt='' /></i></header>
          <p>
            <FormattedMessage id="Intro.Step3Txt" />
          </p>
        </Styled.Item>

        <Styled.Item>
          <header><FormattedMessage id="Intro.Step4Icon" /><i><img src={step4}  alt='' /></i></header>
          <p>
            <FormattedMessage id="Intro.Step4Txt" />
          </p>
        </Styled.Item>

        <Styled.Item>
          <header><FormattedMessage id="Intro.Step5Icon" /><i><img src={step5}  alt='' /></i></header>
          <p>
            <FormattedMessage id="Intro.Step5Txt" />
          </p>
        </Styled.Item>

      </Styled.Steps>
    </Styled.Block>
	    )
}
export default injectIntl(Intro)
