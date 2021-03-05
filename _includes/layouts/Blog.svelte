<script>
  import Nav from "../components/Nav.svelte";
  export let data;
</script>

<pre> This is the Blog.svelte layout </pre>

<Nav />

<main>
  <h1>Blog index</h1>

  <ul>
    {#each data.collections["post"] as post}
      <li>
        <a href={post.url}>
          {post.data.title}
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
