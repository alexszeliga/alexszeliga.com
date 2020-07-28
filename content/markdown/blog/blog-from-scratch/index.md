---
title: Building a Blog from Scratch
date: "2020-07-12T22:40:32.169Z"
description: A short expository review of the process of building a blog from a developers point of view.
tags:
  - Code
  - Strategy
---
In the summer of 2020, I took the time to finally buckle down and make a website and portfolio. The choices I made throughout the process were intended to satisfy a few main criteria:
- Use the <a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer">JamStack</a> to build with modern JS and deploy a simple static site
- Build with Gatsby as a means to quickly get going
- Learn at least two new things along the way
  - Something I've been itching to know more about: <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud Platform</a>
  - Something totally random: <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">Bulma</a>

#### Clarke's Laws on the JAMStack: Fight me.
If you like technology and don't know <a href="https://en.wikipedia.org/wiki/Clarke%27s_three_laws" target="_blank" rel="noopener noreferrer">Arthur C. Clarke's Three Laws</a>, then I can't help you. Paraphrased, they are:
- If a wise person says it's possible, it probably is, but if they say it's impossible, they're probably wrong.
- The only way to know how something works is to break it, but maybe just a little bit.
- If it's really special, it should make smart people feel stupid.

The JAMStack has a lot of folks who think it's the solution to everything and many who think it solves nothing, so I guess we've ticked box one. It's a set of technologies designed to modified, molded, and re-imagined, taken apart and reassembled into any kind of web experience that can be statically rendered, so there's lanes but also a lot of pitfalls. For me, that's check number two. Additionally, it makes me scratch my head, even though I know how it all fits together. And this may be apocryphal, but I've had conversations with people I respect for their ability to be up-to-date on tech wherein JAMStack gets labeled as <a href="https://www.urbandictionary.com/define.php?term=JFM&utm_source=search-action" target="_blank" rel="noopener noreferrer">JFM</a>.
#### Something old, something new.
For the last eighteen months, I worked at a creative branding agency in Philadelphia called <a href="https://www.munroe.com/" target="_blank" rel="noopener noreferrer">Munroe Creative Partners</a>. At Munroe, I was part of a small team of digital professionals who were responsible for managing and building about 20 websites, each on a CMS of some kind, mostly WordPress. After the team grew from one to three, the team also took on all content management for about half of those sites.
Eventually, a larger more complex project landed on our team to create a digital version of an annual report with a requirement that the final product be a static site. After about 10 minutes of research, our team agreed on Gatsby to build the report.
I was really excited to be working with a more modern context. I graduated from a boot camp that focused on the MERN stack, so using Gatsby was a good pivot off of my React experience.
In building this blog, I opted to use Gatsby again, because I know that I wanted to make a blog, but the idea of a whole heavy CMS felt like a waste of time and resources to set up. Even with professional WordPress experience, I've tried and failed twice to set this blog up using a traditional CMS. Gatsby is great in that it's very developer friendly. I can manage every aspect of my site from my code editor and a repository. Since the frontend is built with React, I can quickly and easily iterate new ideas and deploy them by pushing to the repo (soon).
I had a single false start, when getting up and running, and that was trying to also use Netlify in addition to Gatsby. I love the idea of Netlify, but as a solo developer, even the idea of following Netlify's structure seemed like too much to remember.
#### The best way to beat boredom is to never rest
As I was ramping up this project, I had one false start. This project was built from a <a href="https://www.gatsbyjs.org/starters/?v=2" target="_blank" rel="noopener noreferrer">Gatsby Starter</a>. At first, when I thought I wanted a CMS to manage the blog, I used a <a href="https://www.gatsbyjs.org/starters/netlify-templates/gatsby-starter-netlify-cms/" target="_blank" rel="noopener noreferrer">starter featuring Netlify</a>. I ended up not using this starter, but before I bailed, I had played around with and read up on <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">Bulma</a>. When I refactored to use a much more simple <a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" target="_blank" rel="noopener noreferrer">starter</a>, I opted to keep using Bulma. Creating this blog and website wasn't intended to stretch my ability to design, but using a new CSS framework allowed me to use my existing skills with a fresh technical context.
Additionally, I knew I wanted to deploy this site using some cloud, and since I'm a high functional Google fanboy, I went with GCP. Being fair, deploying a static site using cloud storage is not specifically complex, and Google has perfect documentation for it. I've written a handful of apps that either interact with a Google API or rely on an integration with GSuite, so extending my skills on GCP felt like a good stretch goal.