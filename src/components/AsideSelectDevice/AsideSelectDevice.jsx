import React from 'react'
import { Dropdown  } from 'antd';
import StyledAsideSelectDevice from './styled/StyledAsideSelectDevice'
import SelectDevice from './components/SelectDevice/SelectDevice'
import StyledWrapDropdown from './styled/StyledWrapDropdown'
const AsideSelectDevice = ({nameDevice, isVisible,toggleVisibility,onSelect}) => {

	return (
		<StyledWrapDropdown>
			<div>
			<Dropdown placement="bottomLeft" getPopupContainer={trigger => trigger.parentNode} visible={isVisible} onBlur={toggleVisibility} onClick={toggleVisibility} overlay={<SelectDevice nameDevice={nameDevice}  onSelect={onSelect} isVisible={isVisible} toggleVisibility={toggleVisibility}  />} trigger={['click']}>

				<StyledAsideSelectDevice isVisible={isVisible}>
					<p>{nameDevice}
						<i></i>
					</p>
				</StyledAsideSelectDevice>
			</Dropdown>
			</div>
		</StyledWrapDropdown>

	)
}
export default AsideSelectDevice


