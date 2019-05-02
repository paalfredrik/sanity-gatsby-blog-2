export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5ccad953464bf55bf51c04cb',
                  name: 'Content Studio',
                  siteId: '239c5888-88bb-49ff-b536-bc7e0d544a35'
                },
                {
                  buildHookId: '5ccad8da4871d2e61eac0b93',
                  name: 'Blog Website',
                  siteId: 'b991913d-9c2e-4707-97ca-a83dc22f8399'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-gatsby-blog-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web.netlify.com', category: 'apps'}
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
