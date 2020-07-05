# AlexSzeliga.com: The Repository
This repo is the development environment used to manage the theme and content for AlexSzeliga.com. It was adapted from the [Gatsby Blog Starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/). I selected this starter because it has [remark](https://remark.js.org/) baked in and the basics of a blog. I was specifically interested in automated page building with templates. I selected Gatsby because of GraphQL. I didn't want to mess with any kind of CMS at all, but I wanted the flexibility to manage content in a developer friendly way.
I knew I wanted to build a slightly more complex site by including a basic contact form, links to my professional profiles on places like GitHub and LinkedIn, and my portfolio.
I wanted to be able to maintain the portfolio content with markdown, so I modified the markdown content's subfolder structure and added specificity to the GraphQL queries related to the blog, and added modules and queries related to the portfolio.
And finally, I wanted to use a CSS framework to help me develop branding and design. My two criteria were that it be new and unfamiliar to me. I opted to use Bulma because it has a small component library and a peculiar class name syntax that has started to make sense to me. I can generally 'guess' my class names without referring to the docs, which is pretty neat.
## What I added:
- Bulma
- Nav, hero, footer, and a basic contact form
- Blog index page, portfolio index page, home page
- Build portfolio schema and query
## Todo:
- Build portfolio index page components
- Build blog index page components
- Hero variation for interior pages
- Add blog and portfolio content
- Finalize branding and design
  - Footer
  - Menu
  - Logo
  - Images
- Deploy static site on GCP using Cloud Storage