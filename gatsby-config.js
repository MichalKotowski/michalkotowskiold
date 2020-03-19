/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Michał Kotowski`,
        description: `Web developer based in Warsaw`,
        author: `Michał Kotowski`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Michał Kotowski`,
                short_name: `MichalKotowski`,
                start_url: `/`,
                background_color: `#0c0d0d`,
                theme_color: `#f2f3f2`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    '/*.js': ['cache-control: public, max-age=31536000, immutable'],
                    '/*.css': ['cache-control: public, max-age=31536000, immutable'],
                    '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-161203999-1",
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-react-helmet`
    ]
}