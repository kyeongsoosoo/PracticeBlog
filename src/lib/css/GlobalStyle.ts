import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        background: #e9ecef;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        padding-top: 40px;
        
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`

export default GlobalStyle
