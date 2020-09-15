import React from 'react'
import Styled from './styled/StyledOptinalViewPanel'
import { FormattedMessage, injectIntl } from 'react-intl'

const devicesTest = [
  {

    name: 'Устройство 1'
  },
  {
    name: 'Телевизор на кухне 2'
  },
  {
    name: 'Телевизор на кухне 3'
  },
  {
    name: 'Устройство 1'
  },
  {
    name: 'Устройство 1'
  },
  {
    name: 'Устройство 1'
  },
  {
    name: 'Устройство 1'
  },
  {
    name: 'Устройство 1'
  },
  // {
  //   name: 'Устройство 1'
  // },
  // {
  //   name: 'Устройство 1'
  // },
  // {
  //   name: 'Устройство 1'
  // },
  // {
  //   name: 'Устройство 1'
  // }
]

const OptionalPanel = ({view}) => {
  const listBig = Object.keys(devicesTest).length > 3;
  return (
    <>
      <Styled.Panel>
        <Styled.LeftCol isBigList={listBig}>
          <div>

              {
                (Object.keys(devicesTest).length > 3) ?  (
                  <Styled.TxtBig>
                    <p><FormattedMessage id="OptionalPanel.Txt" />:</p>
                    <Styled.General>
                      {Object.keys(devicesTest).length}
                      <p><FormattedMessage id="OptionalPanel.TxtGeneral" /></p>
                      <i></i></Styled.General>
                  </Styled.TxtBig>
                ) :
                  (
                    <Styled.Txt><FormattedMessage id="OptionalPanel.Txt" />:</Styled.Txt>
                )
              }

          </div>

          {
            (Object.keys(devicesTest).length > 3) ?  (
                <Styled.ListBig>
                  {
                    devicesTest.map((device,index)=> (
                      <Styled.ItemBig key={index}>
                        <p>
                          { device.name }
                        </p>
                        <i></i>
                      </Styled.ItemBig>
                    ))
                  }
                </Styled.ListBig>
              ):
              (
                <Styled.List>
                  {
                    devicesTest.map((device,index) => (
                      <Styled.Item key={index}>
                        <p>
                          { device.name }
                        </p>
                        <i></i>
                      </Styled.Item>
                    ))
                  }
                </Styled.List>
              )
          }
        </Styled.LeftCol>

        <Styled.RightCol>
          <Styled.Button view={view}>
            <FormattedMessage id="OptionalPanel.Button" />
          </Styled.Button>
        </Styled.RightCol>
      </Styled.Panel>
    </>
  )
}

export default  injectIntl(OptionalPanel)
