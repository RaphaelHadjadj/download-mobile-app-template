// React
import React, { memo } from 'react'

// Components
import styled from 'styled-components'


export default memo((props: Props) => (
    <Container>
        <Content>
            <Border />
            {props.uris.map((src, i) => (
                <Item key={i} src={src} />
            ))}
            <Border />
        </Content>
    </Container>
))

const Content = styled.div`
    position: relative;
    overflow-x: scroll;
    display: flex;
`

const Border = styled.div`
    min-width: 1em;
`

const Item = styled.img`
    border-radius: 20px;
    object-fit: cover;
    height: 100%;
    width: 70%;

    & + & {
        margin-left: 1rem;
    }
`

const Container = styled.div`
    margin: 1em 0 2em 0;
`

// Types
type Props = {
    uris: string[],
}