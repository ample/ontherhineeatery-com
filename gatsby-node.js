const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      pages: allContentfulPage(filter: { layout: { nin: ["home", "404"] } }) {
        edges {
          node {
            permalink
            contentful_id
            layout
          }
        }
      }

      navMenus: allContentfulNavMenu {
        edges {
          node {
            id
            title
            links {
              id
              title
              url
            }
          }
        }
      }

      settings: allContentfulSetting {
        edges {
          node {
            key
            value {
              value
            }
          }
        }
      }
    }
  `).then(result => {
    // Create Pages
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.permalink,
        component: path.resolve(`./src/templates/${node.layout}.js`),
        context: {
          permalink: node.permalink,
          id: node.contentful_id,
          // locations: result.data.locations.edges.map(e => e.node),
          navMenus: result.data.navMenus.edges.map(e => e.node),
          settings: result.data.settings.edges.map(e => e.node)
        }
      })
    })
  })
}
