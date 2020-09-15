import React from 'react'
import StyledLangControl from './styled/StyledLangControl'
import StyledLangRadioGroup from './styled/StyledLangRadioGroup'
import StyledLangRadioBtn from './styled/StyledLangRadioBtn'

const onLanguageSelect = event => {
  window.localStorage.setItem('lang', event.target.value)
  document.location.reload()
}

const LangControl = () => (
  <StyledLangControl>
    <StyledLangRadioGroup defaultValue={window.localStorage.getItem('lang') || 'ru'} onChange={onLanguageSelect}>
      <StyledLangRadioBtn value='ru'>Ru</StyledLangRadioBtn>
    </StyledLangRadioGroup>
  </StyledLangControl>
)

export default LangControl
