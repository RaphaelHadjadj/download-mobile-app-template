// React
import React from 'react'

// Components
import styled, { ThemeProvider } from 'styled-components'
import { Header, Screenshots, Links } from '@components'

// Sources
import screenshot1Source from '@images/screenshot_1.png'
import screenshot0Source from '@images/screenshot_0.png'
import iconSource from '@images/icon.png'

// Utils
import { graphql, useStaticQuery } from 'gatsby'

// Config
import { GlobalStyle, theme, media } from '@styles'


export default () => {

    const query = useStaticQuery(graphql`
        query Data {
            site {
                siteMetadata {
                    screensCount
                    developer
                    channel
                    version
                    title
                    host
                }
            }
        }
    `);

    const debugging = !!process.env.NODE_ENV;

    const data = query.site.siteMetadata;

    const AndroidLink = `${data.host}/files/app.apk`;

    const iOSLink = `itms-services://?${[
        'action=download-manifest',
        `url=${data.host}/files/manifest.plist`,
    ].join('&')}`;

    const screenshotsUris = !debugging ? (
        [...Array(+data.screensCount).keys()]
        .map(i => `${data.host}/files/screenshot_${i}.png`)
    ) : [
        screenshot0Source,
        screenshot1Source,
    ];

    const iconUri = !debugging
        ? `${data.host}/files/icon.png`
        : iconSource;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            
            <Wrapper>
                <Container>
                    <Header
                        developer={data.developer}
                        channel={data.channel}
                        version={data.version}
                        title={data.title}
                        iconUri={iconUri}
                    />

                    <Links
                        AndroidLink={AndroidLink}
                        iOSLink={iOSLink}
                    />

                    <Screenshots
                        uris={screenshotsUris}
                    />
                </Container>
            </Wrapper>

        </ThemeProvider>
    )
}

const Wrapper = styled.div`
    flex-direction: column;
    align-items: center;
    display: flex;
    flex: 1;
`

const Container = styled.div`
    flex-direction: column;
    max-width: ${media.md};
    align-items: center;
    display: flex;
`