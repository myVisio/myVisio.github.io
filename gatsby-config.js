module.exports = {
  siteMetadata: {
    description: "Personal page of Moonyoung Heo",
    locale: "en",
    title: "Moonyoung Heo",
    formspreeEndpoint: "https://formspree.io/f/mnqlpzyj",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "bright-green",
      },
    },
  ],
};
