module.exports = {
  siteMetadata: {
    title: `Wamaitha`,
    description: `Wamaitha's blog on machine learning`,
    keywords: [`machine learning`,`datascientist in kenya`, `datascience `, `machine learning for your business`, `blog`],
    author: `Wamaitha Nyamu`,
    siteUrl: `https://wamaithanyamu.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Blog`,
        link: `/`,
      },
      {
        name: `Work`,
        link: `/work`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `hello@wamaithanyamu.com`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/wamaithanyamu`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/wamaithanyamu`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        link: `https://www.instagram.com/wamaithanyamu`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  // In your gatsby-config.js
  // plugins: [
  //   {
  //     resolve: `gatsby-transformer-remark`,
  //     options: {
  //       plugins: [`gatsby-remark-responsive-iframe`],
  //     },
  //   },
  // ]
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-helium`,
      options: {
        // Core theme
        displaySiteLogo: false,
        displaySiteLogoMobile: false,
        footerContentLocation: "right",
        remarkImagesWidth: 1920,
        // Blog theme
        excerptLength: 200,
        // Helium
        useHero: true,
        useKatex:true,

      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [

          `gatsby-remark-responsive-iframe`
        ],
      },
    },

  ],
}
