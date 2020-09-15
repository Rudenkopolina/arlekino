import styled from 'styled-components'

const PageTop = styled.section`
  	position: relative;
  	display: flex;
  	justify-content: space-between;
  	min-height: 215px;
`

const Title = styled.h2`
  width: calc(100% - 353px);
  font-family: var(--fontGilroyBold);
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 48px;
  text-align: center;
  color: #202020;
  padding-top: 90px;
  
  span {
    color: var(--orange);
  }
`

const Aside = styled.section`
  	display: flex;
  	flex-wrap: wrap;
    width: 353px;
    padding-top: 20px;
`

export default {
  Title,
  Aside,
  PageTop
};