export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9334fa0359935b05553fd5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cug6osqa',
                  apiId: 'e70f355f-aae0-4ca7-b02f-eb39c98cc087'
                },
                {
                  buildHookId: '5d9334fa2f4fa60767f1f84e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mqsejmx8',
                  apiId: '1b32a150-bde5-4470-b542-6822249b26bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taranengermaar/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mqsejmx8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
