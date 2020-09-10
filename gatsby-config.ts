// Utils
import dotenv from 'dotenv'


// Configure
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
})

export const siteMetadata = {
    description: 'Download Mobile App Template',
    screensCount: process.env.SCREENS_COUNT,
    identifier: process.env.IDENTIFIER,
    developer: process.env.DEVELOPER,
    channel: process.env.CHANNEL,
    version: process.env.VERSION,
    title: process.env.TITLE,
    host: process.env.HOST,
}

export const plugins = [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
        resolve: `gatsby-alias-imports`,
        options: {
            aliases: {
                '@components': `src/components`,
                '@constants': `src/constants`,
                '@images': `src/images`,
                '@styles': `src/styles`,
                '@pages': `src/pages`,
                '@types': `src/types`,
            },
        },
    },
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
            fonts: [
                // `limelight`,
                // `source sans pro\:300,400,400i,700`,
                `Nunito\:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900`
            ],
            display: 'swap',
        },
    },
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
]