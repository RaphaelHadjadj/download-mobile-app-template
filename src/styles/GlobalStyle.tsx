// Utils
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        /* position: fixed; */
    }
    
    html,
    body {
        height: 100%;
    }

    body {
        font-family: 'Nunito', sans-serif;
        /* background-color: #f4f4f4; */
        background-color: #f8f8f8;
    }
`