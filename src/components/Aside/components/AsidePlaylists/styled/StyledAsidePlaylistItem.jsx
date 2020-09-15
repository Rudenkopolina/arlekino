import styled from 'styled-components'
import PlayIcon from '../../../../../assets/img/playicon.svg'

const StyledAsidePlaylistItem = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	width: 100%;
	i {
	    display: inline-block;
	    width: 9px;
	    height: 9px;
	    margin-right: 6px;
	    position: relative;
	    top: -1px;
	    background: url(${(PlayIcon)}) center center no-repeat;    
	}
	p {
	    font-family: var(--fontGilroyRegular);
	    font-size: 13px;
      line-height: 17px;
      letter-spacing: 0.16px;
	}
`
export default StyledAsidePlaylistItem
