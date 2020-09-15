import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import StyledSliderNotifications from './styled/StyledSliderNotifications'
import { Carousel } from 'antd';
import Styled from './styled/StyledNotificationsItem'

const SliderNotifications = () => (
  <StyledSliderNotifications>

    <Carousel fade arrows infinite={false} autoplay={false} dots={false}>
      <div>
        <Styled.Item>
          <Styled.Close />
          <Styled.Title type={'warning'}>
            <Styled.Warning> <FormattedMessage id='SliderNotifications.Note' /> </Styled.Warning>
            <FormattedMessage id='SliderNotifications.Title1' />
          </Styled.Title>

          <Styled.Txt>
            <p><FormattedMessage id='SliderNotifications.Txt1' /></p>
            <div>
              <Styled.More>
                <FormattedMessage id='SliderNotifications.More' />
              </Styled.More>
            </div>
          </Styled.Txt>

          <Styled.BottomPanel>

            <Styled.Date>
              <FormattedMessage id='SliderNotifications.Date' />
            </Styled.Date>
          </Styled.BottomPanel>

        </Styled.Item>
      </div>
      <div>
        <Styled.Item>
          <Styled.Close />
          <Styled.Title>
            <FormattedMessage id='SliderNotifications.Title1' />2
          </Styled.Title>

          <Styled.Txt>
            <FormattedMessage id='SliderNotifications.Txt1' />
            <div>
              <Styled.More>
                <FormattedMessage id='SliderNotifications.More' />
              </Styled.More>
            </div>
          </Styled.Txt>

          <Styled.BottomPanel>
            <Styled.Date>
              <FormattedMessage id='SliderNotifications.Date' />
            </Styled.Date>
          </Styled.BottomPanel>

        </Styled.Item>
      </div>
      <div>
        <Styled.Item>
          <Styled.Close />
          <Styled.Title>
            <FormattedMessage id='SliderNotifications.Title1' />3
          </Styled.Title>

          <Styled.Txt>
            <FormattedMessage id='SliderNotifications.Txt1' />
            <div>
              <Styled.More>
                <FormattedMessage id='SliderNotifications.More' />
              </Styled.More>
            </div>
          </Styled.Txt>

          <Styled.BottomPanel>
            <Styled.Date>
              <FormattedMessage id='SliderNotifications.Date' />
            </Styled.Date>
          </Styled.BottomPanel>

        </Styled.Item>
      </div>
    </Carousel>
  </StyledSliderNotifications>
)
export default injectIntl(SliderNotifications);
