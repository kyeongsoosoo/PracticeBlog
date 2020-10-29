import React from 'react'
import { Link } from 'react-router-dom'
import Styled from './SignTemplate.styled'

type SignTemplateProp = {
  children: React.ReactNode
}

function SignTemplate({ children }: SignTemplateProp) {
  return (
    <Styled.SignTemplateBlock>
      <Styled.WhiteBox>
        <div className="logo-area">
          <Link to="/">React</Link>
        </div>
        {children}
      </Styled.WhiteBox>
    </Styled.SignTemplateBlock>
  )
}

export default SignTemplate
