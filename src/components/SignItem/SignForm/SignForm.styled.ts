import React from 'react'
import styled from 'styled-components'
import palette from '../../../lib/css/palette'

const SignFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.cyan[8]};
    margin-bottom: 1rem;
  }
`

const SignFormInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom:: 1px solid ${palette.gray[5]};
    outline: none;
    padding-bottom: 0.5rem;
    width: 100%;
    &:focus{
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};

    }
    &+& {
        margin-top: 1rem;
    }
`

const SignFormFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: grey;
    }
  }
`

export { SignFormBlock, SignFormInput, SignFormFooter }
