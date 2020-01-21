const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
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
              children_links {
                id
                title
                url
              }
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

      vendors: allContentfulVendor {
        edges {
          node {
            contentful_id
            permalink
          }
        }
      }

      redirects: allContentfulRedirect {
        edges {
          node {
            sourceUrl
            destinationUrl
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

    // Create Vendor Detail Pages
    result.data.vendors.edges.forEach(({ node }) => {
      createPage({
        path: `/vendors/${node.permalink}`,
        component: path.resolve(`./src/templates/vendor.js`),
        context: {
          permalink: node.permalink,
          id: node.contentful_id,
          // locations: result.data.locations.edges.map(e => e.node),
          navMenus: result.data.navMenus.edges.map(e => e.node),
          settings: result.data.settings.edges.map(e => e.node)
        }
      })
    })

    // Create Redirects
    result.data.redirects.edges.forEach(({ node }) => {
      createRedirect({
        fromPath: node.sourceUrl,
        toPath: node.destinationUrl,
        redirectInBrowser: true,
        isPermanent: true
      })
    })
  })
}
