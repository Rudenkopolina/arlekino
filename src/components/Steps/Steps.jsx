import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import Styled from './styled/StyledSteps'
import { Carousel } from 'antd';

const Steps = () => {

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <Styled.Steps isActiveBlock={true}>
      <Styled.Desktop>
        <Styled.Item isActive={true}>
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
      </Styled.Desktop>

      <Styled.StepsMobile>
        <Carousel {...settings}>
          <Styled.CarouselItem>
            <Styled.Item isActive={true}>
              <i>1</i>
              <p><FormattedMessage id='Steps.Item1' /></p>
            </Styled.Item>
          </Styled.CarouselItem>

          <Styled.CarouselItem>
            <Styled.Item>
              <i>2</i>
              <p><FormattedMessage id='Steps.Item2' /></p>
            </Styled.Item>
          </Styled.CarouselItem>

          <Styled.CarouselItem>
            <Styled.Item>
              <i>3</i>
              <p><FormattedMessage id='Steps.Item3' /></p>
            </Styled.Item>
          </Styled.CarouselItem>

          <Styled.CarouselItem>
            <Styled.Item>
              <i>4</i>
              <p><FormattedMessage id='Steps.Item4' /></p>
            </Styled.Item>
          </Styled.CarouselItem>

          <Styled.CarouselItem>
            <Styled.Item>
              <i>5</i>
              <p><FormattedMessage id='Steps.Item5' /></p>
            </Styled.Item>
          </Styled.CarouselItem>

          <Styled.CarouselItem>
            <Styled.Item>

              <p></p>
            </Styled.Item>
          </Styled.CarouselItem>

        </Carousel>

      </Styled.StepsMobile>
    </Styled.Steps>
	    )
}
export default injectIntl(Steps)
