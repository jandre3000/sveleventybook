# Sveleventybook

## An Eleventy starter project featuring Svelte and Storybook

_Currently doesn't support client-side Javascript, but who needs that anyway!_ 😅

This starter project uses **Svelte.js** as a server-side templating engine for Eleventy.
Svelte allows us to leverage SFC's (single file components) to build (extremely) static
content-only websites. **Storybook** is used as a component workbench that allows you
to work on individual components in isolation.

This example features a few layouts to showcase a homepage, a blog index and a blog post.

### How does this work?

_This project tries to stick to as many Eleventy and Storybook defaults as possible_.

- All pages are routed to the [`_includes/svelte.11ty.js`](_includes/svelte.11ty.js) layout via this hack in [`_data/layout.js`](_data/layout.js).
- Broadly, the `svelte.11ty.js` layout does two things:
  - It compiles a Svelte template with data from the markdown files.
  - It chains the compiled Svelte HTML and CSS into another layout, `_includes/base.njk`,
    where the Svelte HTML is injected into the `<body>` and the CSS is inlined in the `<head>`.

### A few more details

- **Prettier** is used to format the Svelte-compiled HTML (and optionally everything else via an `npm run lint` command)
  _because if you care enough about HTML to use a template like this, you probably want it to look good_.
- A global CSS file is included in `_includes/styles/global.css` to provide some consistant typography (from [**Typebase.less**](https://devinhunt.github.io/typebase.css/) ). Since Svelte
  localizes all CSS by default, you may want a globl CSS file for variables or typography or stuff like that.
- You can specify which Svelte layout you want by adding the `_layout` key to the front-matter of a file
  e.g. a file with `_layout: Post.svelte` will be rendered with the following layout `_includes/layouts/Post.svelte`.

### Inspiration

Huge shout-outs go to [Marcus oberlehner](https://markus.oberlehner.net) for his [Preact + Eleventy](https://markus.oberlehner.net/blog/building-partially-hydrated-progressively-enhanced-static-websites-with-isomorphic-preact-and-eleventy/)
post, on which this approach is largely based.

### TODO

- Figure out partial hydration and client-side JS in Svelte.
