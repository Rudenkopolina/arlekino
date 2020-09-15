import React, { Component} from 'react'
import { FormattedMessage } from 'react-intl'
import {Table } from 'antd'

import StyledTable from './styled/StyledTable'
import StyledTableBlock from './styled/StyledTableBlock'

import DeleteIcon from './styled/DeleteIcon'
import SettingIcon from './styled/SettingIcon'
import AddModalIcon from './styled/AddModalIcon'
import StyledTitleTable from './styled/StyledTitleTable'
import ReloadIcon from './styled/ReloadIcon'
import StyledThTop from './styled/StyledThTop'
// import StyledInput from './styled/StyledInput'
import StyledInputSearch from './styled/StyledInputSearch'
import AddDeviceModal from '../../components/Modal/AddDeviceModal/AddDeviceModal'
import DeleteDeviceModal from '../Modal/DeleteDeviceModal/DeleteDeviceModal'
import DropdownSelectChooseAction from './components/DropdownSelectChooseAction/DropdownSelect'
import StyledChooseAction from './styled/StyledChooseAction'
import SubscribeTopBlock from './components/SubscribeTopBlock/SubscribeTopBlock'
import SubscribeContentTable from './components/SubscribeContentTable/SubscribeContentTable'
import ServersTopBlock from './components/ServersTopBlock/ServersTopBlock'
import ServersContentTable from './components/ServersContentTable/ServersContentTable'
import ShowPagesFooter from './components/ShowPagesFooter/ShowPagesFooter'
import StyledTopSettings from './styled/StyledTopSettings'
import StyledDropdownSelectThTop from './styled/StyledDropdownSelectThTop'
import EditableCell from './components/EditableCell/EditableCell'
import StyledSettingsLink from './styled/StyledSettingsLink'


const data = [{
  key: '1',
  name: 'Телевизор на кухне1',
  subscribe: 'Купить подписку',
  servers: '-',
  reload: '',
  settings: 'Настройки',
  editable: '-',
}, {
  key: '2',
  name: 'Телевизор на кухне2',
  subscribe: 'Купить подписку',
  servers: '-',
  reload: '',
  settings: 'Настройки',
  editable: '-',
}
  , {
    key: '3',
    name: 'Телевизор на кухне3',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  },
   {
    key: '4',
    name: 'Телевизор',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  }
  , {
    key: '5',
    name: 'Телевизор на кухне',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  },
  {
    key: '6',
    name: 'Телевизор на кухне',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  },
   {
    key: '7',
    name: 'Телевизор на кухне',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  },
  {
    key: '8',
    name: 'Телевизор на кухне',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  },
  {
    key: '9',
    name: 'Телевизор',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  },
  {
    key: '10',
    name: 'Телевизор',
    subscribe: 'Купить подписку',
    servers: '-',
    reload: '',
    settings: 'Настройки',
    editable: '-',
  }
];


// const EditableContext = React.createContext();

// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const [editingComment, setEditingComment] = useState(false);
//   const inputRef = useRef();
//   const commentRef = useRef();
//   const form = useContext(EditableContext);
//   useEffect(() => {
//     if (editing) {
//       // inputRef.current.focus();
//     }
//   }, [editing]);
//
//   useEffect(() => {
//     if (editingComment) {
//       // commentRef.current.focus();
//     }
//   }, [editingComment]);
//
//   const toggleEditComment = () => {
//     setEditingComment(!editingComment);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };
//
//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };
//
//   const save = async e => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       // handleSave({ ...record, ...values });
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };
//
//   let childNode = children;
//
//   if (editable) {
//     childNode = (
//       <>
//         <Form.Item
//           name={dataIndex}
//           rules={[
//             {
//               required: true,
//               message: `${title} is required.`,
//             },
//           ]}
//         >
//           <ControlEditableWrapper
//             defaultValue={'Телевизор на кухне'}
//             placeholder={'Телевизор на кухне'}
//             name="table01"
//           />
//
//         </Form.Item>
//
//         <Form.Item
//           name={dataIndex}
//           rules={[
//             {
//               required: true,
//               message: `${title} is required.`,
//             },
//           ]}
//         >
//         <ControlEditableWrapper
//           defaultValue={'коментарий'}
//           placeholder={'Оставьте коментарий'}
//           name="comment01"
//         />
//
//       </Form.Item>
//       </>
//     );
//   }
//
//   return <td {...restProps}>{childNode}</td>;
// };

const FilterByNameInput = ({isVisible,toggleVisibleAddModal,isVisibleSettings}) => {
  return (
      <>
        <StyledThTop>
          <StyledTitleTable>устройства</StyledTitleTable>
          <AddModalIcon onClick={toggleVisibleAddModal} />
        </StyledThTop>
        <StyledTopSettings isVisibleSettings={isVisibleSettings}>
          <StyledInputSearch
            placeholder="Название устройства"
          />
        </StyledTopSettings>
        <AddDeviceModal isVisible={isVisible} toggleVisibility={toggleVisibleAddModal} />
      </>
)
}

class TableNewDealer extends Component {

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    isVisibleAddModal: false,
    isVisibleDeleteModal: false,
    rowsPerPage: 7,
    isVisibleSettings: false,
  };

  // handleShowSizeChange = (current, rowsPerPage) => {
  //   this.setState({ rowsPerPage })
  // }
  toggleSettings = () => {
    this.setState(prevState => ({
      isVisibleSettings: !prevState.isVisibleSettings
    }))
  }
  toggleVisibleAddModal = () => {
    this.setState(prevState => ({
      isVisibleAddModal: !prevState.isVisibleAddModal
    }))
  }
  toggleVisibleDeleteModal = () => {
    this.setState(prevState => ({
      isVisibleDeleteModal: !prevState.isVisibleDeleteModal
    }))
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  }

  render() {
    const { selectedRowKeys,isVisibleAddModal,isVisibleDeleteModal,rowsPerPage,isVisibleSettings } = this.state;

    const columns = [{
      title: (
        <FilterByNameInput isVisibleSettings={isVisibleSettings} isVisible={isVisibleAddModal} toggleVisibleAddModal={this.toggleVisibleAddModal}/>
      ),
      render: (record) => (
        <EditableCell record={record}></EditableCell>
      ),
      dataIndex: 'name',
      key: 'name',
      editable: true,
    }, {
      title: (
        <SubscribeTopBlock  isVisibleSettings={isVisibleSettings} />
      ),
      dataIndex: 'subscribe',
      key: 'subscribe',
      render:  (subscribe) => {
        return(
          <SubscribeContentTable userType={'newdealer'} subscribe={subscribe}/>
        )
      },
      // filters: [newdealer / olddealer  = userType
      //   {
      //     text: 'Все подписки',
      //     value: 'All',
      //   },
      //   {
      //     text: 'Активные подписки',
      //     value: 'active',
      //   },
      //   {
      //     text: 'Неактивные подписки',
      //     value: 'active',
      //   },
      //   {
      //     text: 'Заканчивающиеся подписки',
      //     value: 'active',
      //   },
      // ],

    },
      {
      dataIndex: 'reload',
      key: 'reload',
      title: (
        () => {
          return (
            <>
              <StyledThTop className="AutoUpdate">
                <ReloadIcon  />
              </StyledThTop>
              <StyledTopSettings  isVisibleSettings={isVisibleSettings}>
                <ReloadIcon   isActive={false} />
              </StyledTopSettings>
            </>
          )
        }

      ),
        render: (servers) => {
          const userType = 'newdealer'
          const content =  (userType && userType === 'newdealer') ? <ReloadIcon isActive={false} /> : <></>

          return content

         }
    },
      {
      dataIndex: 'servers',
      key: 'servers',
        title: (
          <ServersTopBlock isVisibleSettings={isVisibleSettings} />
        ),
        render: (servers) => {
          return(
            <ServersContentTable userType={'newdealer'} servers={servers} />
          )}
    }
      , {
        title: (
          <div>
            <StyledThTop>
              <StyledDropdownSelectThTop
                overlay={<DropdownSelectChooseAction userType={'newdealer'} />}
                placement="bottomRight"
                trigger={['click']}
              >
                <StyledChooseAction><p><FormattedMessage id="Table.DropDown.ThTop" /><i></i></p></StyledChooseAction>
              </StyledDropdownSelectThTop>
            </StyledThTop>
          </div>
        ),
        dataIndex: 'settings',
        key: 'settings',
        render: (text) => {
          const userType = 'newdealer'

          return(
            <StyledSettingsLink userType={userType}><a href="/">{text}</a></StyledSettingsLink>
          )}

      }
      , {
        title: (
          <SettingIcon onClick={this.toggleSettings}/>
        ),
        dataIndex: 'editable',
        key: 'editable',
        render: () => (
          <DeleteIcon onClick={this.toggleVisibleDeleteModal}></DeleteIcon>
        ),
      }];


    // const components = {
    //   body: {
    //     row: EditableRow
    //   },
    // };
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL
      ],
    }

    // const columnsData = columns.map(col => {
    //   if (!col.editable) {
    //     return col;
    //   }
    //
    //   return {
    //     ...col,
    //     onCell: record => ({
    //       record,
    //       editable: col.editable,
    //       dataIndex: col.dataIndex,
    //       title: col.title,
    //     }),
    //   };
    // });

    return (
      <StyledTableBlock>
        <div>
          <StyledTable
            isVisibleSettings={isVisibleSettings}
            footer={() => (<div><ShowPagesFooter></ShowPagesFooter></div>)}
            tableLayout='fixed'
            rowSelection={rowSelection}
            columns={ columns}
            dataSource={data}
            rowsPerPage={rowsPerPage}
            pagination={{ size: 'small' ,
              defaultPageSize: 10,
              pageSize: 10
            }}
          />
        </div>
        <DeleteDeviceModal isVisible={isVisibleDeleteModal} toggleVisibility={this.toggleVisibleDeleteModal} />

      </StyledTableBlock>
    )
  }
}
export default TableNewDealer
