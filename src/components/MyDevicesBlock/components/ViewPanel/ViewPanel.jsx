import React from 'react'
import StyledViewPanel from './styled/StyledViewPanel'
import View1 from "../../../../assets/img/viewlist.svg"
import View2 from "../../../../assets/img/vievtable.svg"
import StyledTooltip from '../../../styled/StyledTooltip'
import { FormattedMessage } from 'react-intl'

const ViewPanel = () => (
    <StyledViewPanel>
        <div><img src={View1} alt='' /></div>
        <StyledTooltip
          autoAdjustOverflow
          arrowPointAtCenter
          placement= 'topLeft'
          title={<FormattedMessage id="Tooltip.TableView" />}>
          <div><img src={View2} alt='' /></div>
        </StyledTooltip>

    </StyledViewPanel>
)

export default (ViewPanel)
