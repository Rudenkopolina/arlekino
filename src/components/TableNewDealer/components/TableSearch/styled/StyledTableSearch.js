import styled from 'styled-components'

const StyledTableSearch = styled.div`
    position: relative;
    width: 16.5rem;

    && {
        button.ant-btn.ant-btn-icon-only {
            position: absolute;
            top: 50%;
            right: 0.2rem;
            transform: translateY(-50%);
            width: 3rem;
            height: 3rem;
            font-size: 1.4rem;
            font-weight: normal;
            color: #bfbfbf;
            background: transparent;

            &:hover {
                color: #8c8c8c;
            }
        }
    }

    input {
        padding-right: 3.8rem;
    }
`

export default StyledTableSearch
