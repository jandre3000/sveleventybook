require("svelte/register")({ generate: "ssr" });

const path = require("path"),
  prettier = require("prettier"),
  glob = require("glob");

class svelteRenderer {
  /**
   * All the templates are given this `svelte.11ty.js`
   * layout by default, as specified in `_data/layout.js`.
   * However, after processing the Svelte templates, the output
   * will be fed into a "base.njk" nunjucks layout that will insert the
   * HTML in the body & the CSS into the head of the document.
   */
  data() {
    return {
      layout: "base.njk",
    };
  }
  /**
   * Compiles the Svelte layout based on a `_layout` parameter
   * in the page front-matter which specifies which Svelte layout
   * to use. Falls back to "Default.svelte".
   */
  render(data) {
    const svelteAppPath = path.resolve(
        __dirname,
        "layouts",
        data._layout || "Default.svelte"
      ),
      svelteComponentFiles = glob.sync(
        path.resolve(__dirname, "components", "**", "*.svelte")
      ),
      svelteApp = require(svelteAppPath).default,
      renderObject = svelteApp.render({ data: data, content: data.content });

    /**
     * Because of caching ,we have to delete all of the Svelte
     * files in the layouts dependency tree, as well as the
     * Svelte layout itself, from the require cache.
     */
    svelteComponentFiles.forEach((sveltePath) => {
      delete require.cache[require.resolve(sveltePath)];
    });

    delete require.cache[require.resolve(svelteAppPath)];

    /**
     * Returns the different Svelte components, in future this should
     * probably return some client-JS as well.
     * - `head` content is placed in the document head.
     * - `css` content in inlined in the document head.
     * - `body` content in placed in the document body.
     */
    return {
      head: renderObject.head,
      body: prettier.format(renderObject.html, { parser: "html" }),
      css: renderObject.css.code,
    };
  }
}

module.exports = svelteRenderer;
