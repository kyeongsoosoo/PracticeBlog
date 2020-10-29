import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import palette from '../../lib/css/palette'

type ButtonProps = {
  fullWidth?: string
  cyan?: string
  to: string
  children?: React.ReactNode
  onClick?: (e: Click) => void
}

type Click =
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>

const buttonStyle = css<ButtonProps>`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      padding-top: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${({ cyan }) =>
    cyan &&
    css`
      background: ${palette.cyan[2]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`
const StyledButton = styled.button`
  ${buttonStyle}
`

const StyledLink = styled(Link)`
  ${buttonStyle}
`
function Button(props: ButtonProps) {
  return props.to ? (
    <StyledLink {...props}>{props.children}</StyledLink>
  ) : (
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default Button
