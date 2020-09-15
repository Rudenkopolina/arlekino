import React  from 'react'
import moment from 'moment'
import StyledDatePicker from './styled/StyledDatePicker'
import StyledDatePickerWrap from './styled/StyledDatePickerWrap'

const DatePicker = ({toggleVisible}) => {

  const disabledDate = current => {
   return moment().add(-1, 'days')  >= current ||
    moment().add(1, 'month')  <= current
  };


  return (
    <StyledDatePickerWrap>
      <StyledDatePicker
        showNow
        open={true}
        renderExtraFooter={() => (<div onClick={toggleVisible}><p>Применить</p><i onClick={toggleVisible}></i></div>)}
        onOk={toggleVisible}
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        getPopupContainer={trigger => trigger.parentNode}
        // onCalendarChange={value => {
        //   setDates(value);
        // }}
        dateRender={current => {
          const style = {};
          if (current.date() === 1) {
            style.border = '1px solid #FF9800';
            style.borderRadius = '50%';
          }

          return (
            <div className="ant-picker-cell-inner start-date" style={style}>
              {current.date()}
            </div>
          );
        }}
      />
    </StyledDatePickerWrap>
	    )
}
export default DatePicker;
