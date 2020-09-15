import React  from 'react'
import { Select  } from 'antd'
import StyledSelectDevice from './styled/StyledSelectDevice'
import StyledSelect from './styled/StyledSelect'
const Option = Select.Option

const SelectDevice = ({isVisible, onSelect}) =>
{
	return (
		<>
			<StyledSelectDevice>
				<StyledSelect className="selectDeviceList"  placeholder="Введите название" listItemHeight={5}
				        style={{ width: 285 }}
				        bordered={false}
				        open={isVisible}
				        onSelect={onSelect}
				        showSearch>
					<Option className="selectDeviceItem" value="Детская">Детская</Option>
					<Option className="selectDeviceItem"  value="Спальня">Спальня</Option>
					<Option className="selectDeviceItem"  value="Телевизор на кухне">Телевизор на кухне</Option>
					<Option className="selectDeviceItem"  value="Спальня2">Спальня 2</Option>
				</StyledSelect>

			</StyledSelectDevice>
		</>
	)
}
export default SelectDevice


