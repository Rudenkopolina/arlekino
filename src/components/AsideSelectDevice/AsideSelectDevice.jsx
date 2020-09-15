import React from 'react'
import { Dropdown  } from 'antd';
import StyledAsideSelectDevice from './styled/StyledAsideSelectDevice'
import SelectDevice from './components/SelectDevice/SelectDevice'

const AsideSelectDevice = ({nameDevice, isVisible,toggleVisibility,onSelect}) => {

	return (
		<Dropdown placement="bottomRight" visible={isVisible} onClick={toggleVisibility} overlay={<SelectDevice nameDevice={nameDevice} onSelect={onSelect} isVisible={isVisible} toggleVisibility={toggleVisibility}  />} trigger={['click']}>

			<StyledAsideSelectDevice isVisible={isVisible}>
				<p>{nameDevice}
					<i></i>
				</p>
			</StyledAsideSelectDevice>
		</Dropdown>

	)
}
export default AsideSelectDevice


