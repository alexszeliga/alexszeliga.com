# AlexSzeliga.com: The Repository
This repo is the development environment used to manage the theme and content for AlexSzeliga.com. It was adapted from the [Gatsby Blog Starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/). I selected this starter because it has [remark](https://remark.js.org/) baked in and the basics of a blog. I was specifically interested in automated page building with templates. I selected Gatsby because of GraphQL. I didn't want to mess with any kind of CMS at all, but I wanted the flexibility to manage content in a developer friendly way.
I knew I wanted to build a slightly more complex site by including a basic contact form, links to my professional profiles on places like GitHub and LinkedIn, and my portfolio.
I wanted to be able to maintain the portfolio content with markdown, so I modified the markdown content's subfolder structure and added specificity to the GraphQL queries related to the blog, and added modules and queries related to the portfolio.
And finally, I wanted to use a CSS framework to help me develop branding and design. My two criteria were that it be new and unfamiliar to me. I opted to use Bulma because it has a small component library and a peculiar class name syntax that has started to make sense to me. I can generally 'guess' my class names without referring to the docs, which is pretty neat.

## Getting Started
If, for some reason, you want to work on my blog, here's how to get started:
- Clone the repository locally
- In a terminal, enter the following commands:
  - `npm i`
  - `gatsby develop`

Open your browser to http://localhost:8000 to see the blog in the browser.

## Adding content
The site is set up to allow the user to quickly and easily add new blog and portfolio content, through markdown. In order to create a new blog or portfolio post, simply execute the following command: `node bin/new-post blog "Blog Title Here"`, or `node bin/new-post portfolio "Portfolio Title Here"` 

## What I added:
- Bulma
- Nav, hero, footer, and a basic contact form
- Blog index page, portfolio index page, home page
- Build portfolio schema and query
- Hero variation for interior pages
- Build blog index page components
  - establish layout
- Reinstate tags
  - Add tags field to blog posts frontmatter.
  - Create pages for tags
- Deploy static site on GCP using Cloud Storage
- Build blog index page components
  - Add tag filtering to blog index page
- refine blog card component
- create script to initialize new posts (both blog and portfolio)
- Home page module for blog: each of the three cards at the top of the home page will have related content added from the blog.
- Home page content
## Todo:
- Refine portfolio index page components
- Add blog and portfolio content
- Finalize branding and design
  - Footer
  - Menu
  - Logo
  - Images
## Icebox:
- Rich blog content
  - specify caption and possible classes for internal elements