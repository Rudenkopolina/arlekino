import styled from 'styled-components'
import {Table} from 'antd'
import Check from '../../../assets/img/orangecehck.svg';
import Prev from '../../../assets/img/paginationprev.svg';
import PrevDisabled from '../../../assets/img/paginationprev-disabled.svg';
import Next from '../../../assets/img/pagination-next-ative.svg';
import NextDisabled from '../../../assets/img/pagination-next-disabled.svg';

const StyledTable = styled(Table)`
  && {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 834px;
    margin-left: 2px;

    box-shadow: 0px 0px 5px rgba(192, 192, 192, 0.35);
    
    .ant-table table {
      table-layout: fixed;
      width: 834px;
      white-space: nowrap;
      border-radius: 4px 4px 0 0;
    }
    .ant-table-thead {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
      
      }
      display: flex;
      width: 834px;
      justify-content: flex-start;
    }
    
    .ant-table-thead > tr > th, .ant-table-tbody > tr > td, .ant-table tfoot > tr > th, .ant-table tfoot > tr > td {
        padding:  0;
    }
   
    .ant-table-thead  tr th {
        position: relative;
        background: #FAFAFA;
        box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.15);
        padding-top: 18px;
        
        &:after {
            content: '';
            //position: absolute;
            //width: 100%;
            //height: 22px;
            //top: 22px;
            //background: red;
          
          }
     
    }
    .ant-table-thead tr th:nth-child(4) .AutoUpdate {
      &:after {
        top: 2px;
      }
    }
    
    .ant-table-tbody > tr {
      width: 834px;
    
  
    }
    .ant-table-thead >  tr {
      width: 100%;
    }
    .ant-table-tbody > tr > td.ant-table-cell  {
        position: relative;
        min-height: 72px;
    }
    .ant-table-thead  tr th:first-child{
        width: 55px !important;
        padding: 0  !important;
        margin: 0 !important;
    }
    .ant-table-thead tr th:last-child {
        width: 42px !important;
    }
    .ant-table-tbody > tr > td:first-child {
        width: 55px !important;
    }
    table > thead > tr:first-child th:last-child {
      width: 42px;
      padding: 0;
      margin: 0;

    }
    .ant-table-thead  tr th:nth-child(2){
        width: 210px;
        padding-left: 3px;
    }
    .ant-table-thead  tr th:nth-child(3){
        width: 181px;
    }
     .ant-table-thead  tr th:nth-child(4){
        width: 39px;
        padding-left: 0;
    }
    .ant-table-thead  tr th:nth-child(5){
        width: 151px;   
    }
   .ant-table-thead  tr th:nth-child(6){
        width: 155px;
        padding-left: 0;
        *:after {
          display: none;
        }
    }
    .ant-table-thead  tr th:nth-child(7){
        width: 42px;
    }
    .ant-form-item {
      margin-bottom: 0;
    }
    .ant-table-tbody > tr:first-child > td {
      margin-top: 3px;
    }
    .ant-table-tbody > tr > td.ant-table-cell:first-child {
        width: 55px !important;
        padding-top: 7px;
        padding-right: 0;
        margin: 0 !important;
    }
    .ant-table-tbody > tr > td:nth-child(2){
        width: 210px;
        padding-top: 0;
        padding-right: 0;
        padding-left: 3px;
    }
    .ant-table-tbody > tr > td:nth-child(3){
        width: 181px;
        padding-top: 0;
        padding-left: 3px;   
    }
    .ant-table-tbody > tr > td:nth-child(4){
        width: 39px;
        padding-left:0;  
        padding-top: 11px; 
           
    }
     .ant-table-tbody > tr > td:nth-child(5){
        width: 155px;   
           
    }
    .ant-table-tbody > tr > td:nth-child(6){
        width: 151px; 
        padding-top: 7px; 
        padding-left: 9px;      
    }
    .ant-table-tbody > tr > td:last-child{
        width: 42px;       
    }
     .ant-table-tbody > tr {
        width: 834px; 
        display: flex;
        flex-wrap: nowrap;      
    }
    
    .ant-table-tbody {
       
        width: 834px;
    }
    .ant-table-tbody > tr > td {
        padding-top: 9px;
    }
    

    
     table tr th.ant-table-selection-column, 
     table tr td.ant-table-selection-column {
        padding-left: 12px;
        padding-right: 0;
    }
    
    .ant-table-thead > tr > th {
        padding-left: 12px;
        padding-right: 0;
        padding-bottom: 0;
    }
    .ant-table-tbody {
      //min-height: 456px;
    }
    
    
     .ant-table-tbody > tr > td:nth-child(4) {
        padding-left: 0;
    }

    .ant-table-thead {
   
      min-height: ${({ isVisibleSettings }) => (isVisibleSettings ? '110px;' : '57px;')};
      
      background: #fff;
      border: 1px solid #EFEEF3; 
      border-radius: 4px 4px 0px 0px; 
      position: relative;
      &:after {
        
      }
    }
    .ant-table-cell {
      &:first-child {
      width: 20px;
      }
    }
    .ant-table-cell {
      a {
       font-size: 12px;
      }
      
    }
    .ant-table-selection-extra {
      right: 9px;
    }
    .ant-table-tbody > tr > td {
      border: none;
      padding-top: 7px;
      padding-bottom: 4px;
    }
     
    .ant-table-tbody > tr > td:first-child {
        padding-left: 3px;
    }
    .ant-table-tbody > tr:first-child {
      
        box-shadow: inset 0px 16px 26px -32px rgba(0,0,0,0.65);
    }
    
    .ant-table-tbody > tr.ant-table-row:hover > td {
      background: none;
    }
    
    .ant-table-tbody > tr > td:nth-child(6) {
      a {
        color: var(--mainblue);
        &:hover {
          var(--mainblue);
        }
      }
    }
    .ant-table-tbody > tr.ant-table-row-selected > td {
      background: transparent;
      border-bottom: 0;
      border: none;
      box-shadow: none;
    }
    .ant-table-footer {
      width: 100%;
      height: 47px;
      position: relative;
      background: #FFFFFF;
      border-radius: 0px 0px 4px 4px;
      box-shadow: 0px 0px 20px rgba(192, 192, 192, 0.25);
    }
    
    //pagination
    .ant-pagination {
      position: absolute;
      right: 45px;
      margin: 0;
      bottom: 12px;
    } 
    .ant-spin-container {
      position: relative;
    }
  
    .ant-pagination-item-link {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 12px;
        text-align: center;
        background-color: transparent;
        border: none;
        border-radius: 0;
        outline: none;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        color: var(--gray) !important;
        font-family: var(--fontGilroyMedium);
        
    }
    .ant-pagination-item a {
      font-family: var(--fontGilroyMedium);
      font-size: 12px;
      padding: 0 7px;
      width: 23px;
      color: var(--gray);
    }
    .ant-pagination-item {
        border: none;
        font-size: 12px;
        font-family: var(--fontGilroyMedium);
        background-color: transparent;
        box-shadow: none;
        color: var(--gray);
        
    }
    .ant-pagination-item-active {
        border: none;
        background-color: transparent;
        box-shadow: none;
        font-size: 12px;
        font-family: var(--fontGilroyRegular);
        color: var(--mainblack);    
    }
    .ant-pagination-item-active a {
        color: var(--mainblack);
    }
    .ant-pagination-item {
       min-width: auto;
       height: auto;
     }
     .ant-pagination-prev {
        cursor: pointer;
        margin-right: 7px;
        position: relative;
        top: 2px;
        svg {
          display: none;
        } 
        &.ant-pagination-disabled {
          opacity: 0.5; 
          .ant-pagination-item-link {
            background: url(${PrevDisabled}) center center no-repeat;  
          }   
        }    
        .ant-pagination-item-link {
            width: 6px;
            height: 10px;
            background: url(${Prev}) center center no-repeat;
            background-size: contain;  
        }
        
     }

     .ant-pagination-next {
      cursor: pointer;
      margin-left: 5px;
      position: relative;
      top: 2px;
        svg {
          display: none;
        } 
        &.ant-pagination-disabled {
          opacity: 0.5;   
          .ant-pagination-item-link {
            background: url(${NextDisabled}) center center no-repeat;  
          }   
        }
        .ant-pagination-item-link {
            width: 6px;
            height: 10px;
            background: url(${Next}) center center no-repeat;
            background-size: contain;
        }
           
     }

     .ant-pagination-prev, 
     .ant-pagination-next, 
     .ant-pagination-jump-prev, 
     .ant-pagination-jump-next {
        height: 14px;
        min-width: auto;
     }
    .ant-table-row:nth-child(2n+1) {
      background: #FAFAFA;
    }
    
    .ant-pagination-options {
        display: inline-block;
        margin-left: 16px;
        vertical-align: middle;
        //position: absolute;
        //left: 50%;
        //top: 10px;
        //margin-left: -75px;
    }
    
    .ant-checkbox-inner { 
      width: 18px;
      height: 18px;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #fff;
      border-color: #D0CCDB;
      width: 18px;
      height: 18px;
    }
    .ant-table-selection-extra {
       display: none;
    }
    .ant-checkbox-wrapper {
        position: relative;
        top: 2px;
     }   
    .ant-checkbox-wrapper:hover .ant-checkbox-inner, 
    .ant-checkbox:hover .ant-checkbox-inner, 
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      background-color: #fff;
      border-color: #D0CCDB;
    }
    .ant-checkbox-checked::after {
      border: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after {
          opacity: 1;
          width: 10px;
          height: 9px;
          transform: none;
          border: none;
          top: 3px;
          left: 3px;
          transition: all 0.2s ease-in 0.1s;
          z-index: 22;
          background: url(${Check}) center center no-repeat;
          background-size: contain;
      }
      .ant-checkbox-checked .ant-checkbox-inner {
          border-color: #D0CCDB;
      }
      .ant-checkbox-indeterminate .ant-checkbox-inner::after {
         background: none;
      }

    .editable-cell-value-wrap {
      font-family: var(--fontGilroySemiBold);
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
    .ant-table-tbody > tr > td:nth-child(2){
      padding-left: 0;
      padding-right: 0;
     
    }
 }   
`
export default StyledTable
