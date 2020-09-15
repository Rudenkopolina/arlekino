import React from 'react'
import styled from 'styled-components'

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

const StyledLangControl = styled.div` 
	display: flex;
  position: relative;
  margin: 0 1rem;
  padding-right: 1rem;
	&:after {
		content: '';
		width: 1px;
		height: 23px;
		position: absolute;
		top: 0;
		right: -1px;
		background: var(--headerBorder);
	}
`

const StyledLangRadioBtn = styled.div`
  font-family: var( --fontGilroySemiBold);
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.16px;
	color: var(--white);
	text-transform: uppercase;
	cursor:pointer;
	transition: all 0.3s ease-in;
	
		&:hover {
			 color: var(--orange);
		}
`

const StyledLangRadioGroup = styled.div`
    {
        width: 100%;
        display: flex;
        border: none;
        color: var(--hrefColor);
    }
`
