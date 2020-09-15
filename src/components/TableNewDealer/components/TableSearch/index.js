import React from 'react'
import { injectIntl } from 'react-intl'
import { Input, Button } from 'antd'

import StyledTableSearch from './styled/StyledTableSearch'

const TableSearch = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    setInputLink,
    onHandleSearch,
    onHandleReset,
    intl
}) => (
    <StyledTableSearch>
        <Input
            ref={element => setInputLink(element)}
            placeholder={`${intl.formatMessage({ id: 'reports.search' })}...`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={onHandleSearch(selectedKeys, confirm)}
        />
        <Button shape="circle" icon="close-circle" onClick={onHandleReset(clearFilters)} />
    </StyledTableSearch>
)

TableSearch.propTypes = {
    setSelectedKeys: PropTypes.func.isRequired,
    selectedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
    confirm: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired,
    setInputLink: PropTypes.func.isRequired,
    onHandleSearch: PropTypes.func.isRequired,
    onHandleReset: PropTypes.func.isRequired,
    intl: IntlShape.isRequired
}

export default injectIntl(TableSearch)
