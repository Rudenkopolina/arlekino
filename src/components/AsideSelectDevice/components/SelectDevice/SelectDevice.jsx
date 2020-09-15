import React  from 'react'
import { Select  } from 'antd'
import StyledSelectDevice from './styled/StyledSelectDevice'
import StyledSelect from './styled/StyledSelect'
const Option = Select.Option

// getPopupContainer={trigger => trigger.parentNode}
const SelectDevice = ({isVisible, onSelect}) =>
{
	return (
		<>
			<StyledSelectDevice>
				<StyledSelect className="selectDeviceList"  placeholder="Введите название" listItemHeight={5}

				        style={{ width: 285 }} getPopupContainer={trigger => trigger.parentNode}
				        bordered={false}
				        open={isVisible}
				        onSelect={onSelect}
				        defaultValue={"Спальня"}
				              tabIndex={0}
				              showSearch>
					<Option className="selectDeviceItem" value="Детская">Детская</Option>
					<Option selected className="selectDeviceItem"  value="Спальня">Спальня</Option>
					<Option className="selectDeviceItem"  value="Телевизор на кухне">Телевизор</Option>
					<Option className="selectDeviceItem"  value="Спальня2">Спальня2</Option>
					<Option className="selectDeviceItem"  value="Телевизор на кухне2">Телевизор2</Option>
				</StyledSelect>

			</StyledSelectDevice>
		</>
	)
}
export default SelectDevice


