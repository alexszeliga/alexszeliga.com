var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var _ = require('lodash');

var now = new Date().toISOString();
var pathArr = __dirname.split('/');

if (argv._.length > 1) {
    var postType = argv._[0].toLowerCase();
    var postName = argv._[1];
    var postPath = `${pathArr.splice(0, pathArr.length - 1).join('/')}/content/markdown/${postType}/${_.kebabCase(postName)}/`;
    var frontmatter = createFrontMatter(postType, postName);
    createPost(postPath, postType, frontmatter)
} else {
    console.log(`Error: Two arguments required: 'node cms/new-post post-type "The Post Title."'`)
}

function createPost(path, postType, frontmatter) {
    if (!fs.existsSync(path)) {
        fs.mkdir(path, function (err) {
            fs.writeFile(path + 'index.md', frontmatter, 'utf8', function (err) {
                if (!err) {
                    console.log(`Success: New ${postType} post initialized and can be edited at ${path}index.md`);
                } else {
                    console.log(`Error: unable to create new post at '${path}index.md' for post type '${postType}'`)
                }
            })
        })
    } else {
        console.log(`Error: A ${postType} post named '${postName}' already exists.`);
    }
}

function createFrontMatter(postType, postName) {
    switch (postType) {
        case "blog":
            return `---\ntitle: ${postName}\ndate: "${now}"\ndescription: A Description\ntags:\n  - Default\n  - Tags\n---`;
        case "portfolio":
            return `---\ntitle: ${postName}\ndate: "${now}"\ndescription: A brief description of the project\nprojectUrls:\n  [\n    {\n      linkUrl: "/",\n      linkLabel: "Deployed Project",\n      isInternalLink: true,\n    },\n  ]\nimage: ./[filename].[jpg/png]\n---`;
        default:
            console.log(`Error: '${postType}' is not a valid post type.`);
            return `---\ntitle: ${postName}\ndate: "${now}"\ndescription: A brief description of the post\n---\n# Markdown Content\nMarkdown here!`;
    }
}