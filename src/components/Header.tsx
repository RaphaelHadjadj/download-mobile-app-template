// React
import React, { memo } from 'react'

// Components
import styled from 'styled-components'

// Constants
import { color } from '@constants'


export default memo((props: Props) => (
    <Container>

        <Icon src={props.iconUri} />

        <Right>
            <Title>
                {props.title}
            </Title>

            <Developer>
                {props.developer}
            </Developer>

            <Channel>
                <div>{props.channel}</div>
                <div>•</div>
                <div>{props.version}</div>
            </Channel>

        </Right>

    </Container>
))

const Container = styled.div`
    flex-direction: row;
    margin: 2rem 1rem;
    display: flex;
`

const Icon = styled.img`
    box-shadow: 50px 32px 36px -14px rgba(0,0,0,0.10);
    border-radius: 20px;
    height: 100px;
    width: 100px;
`

const Right = styled.div`
    justify-content: space-around;
    flex-direction: column;
    margin-left: 1rem;
    display: flex;
`

const Title = styled.h1`
    color: ${color.primary};
    font-weight: 600;
`

const Developer = styled.h3`
    font-weight: 300;
    position: relative;
    color: #bbb;
    top: -5px;
`

const Channel = styled.h5`
    align-items: center;
    display: flex;

    div:nth-child(1) {
        background-color: ${color.primary};
        padding: 0.3em 1em;
        border-radius: 1em;
        color: white;
    }
    
    div:nth-child(1):first-letter {
        text-transform:capitalize;
    }

    div:nth-child(2) {
        margin: 0 0.5em;
        color: #eee;
    }

    div:nth-child(3) {
        color: ${color.secondary};
        font-weight: 800;
        margin: 0 0 0 0;
    }
`

// Types
type Props = {
    developer: string,
    version: string,
    channel: string,
    iconUri: string,
    title: string,
}