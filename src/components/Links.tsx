// React
import React, { memo } from 'react'

// Components
import styled from 'styled-components'

// Constants
import { color } from '@constants'


export default memo((props: Props) => {

    const [_, ...colorCode] = color.primary;

    return (
        <Container>

            <Button href={props.iOSLink}>
                <Icon src={`https://img.icons8.com/ios-filled/128/${colorCode}/mac-os.png`} />
                <Title>iPhone</Title>
            </Button>

            <Button href={props.AndroidLink}>
                <Icon src={`https://img.icons8.com/ios-filled/128/${colorCode}/android-os.png`} />
                <Title>Android</Title>
            </Button>

        </Container>
    )
})

const Container = styled.div`
    flex-direction: row;
    margin: 0.5rem 1rem;
    display: flex;
`

const Button = styled.a`
    box-shadow: 50px 32px 36px -14px rgba(0,0,0,0.10);
    justify-content: center;
    background-color: white;
    text-decoration: none;
    align-items: center;
    border-radius: 10px;
    padding: 1em 1em;
    display: flex;
    flex: 1;

    & + & {
        margin-left: 1rem;
    }
`

const Title = styled.h4`
    color: ${color.primary};
`

const Icon = styled.img`
    margin: 0 0.5rem 0 0;
    height: 20px;
    width: 20px;
`

// Types
type Props = {
    AndroidLink: string,
    iOSLink: string,
}