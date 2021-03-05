<script>
  import Nav from "../components/Nav.svelte";
  export let content;
</script>

<pre> This is the Post.svelte layout </pre>

<Nav />

<main>
  {@html content}
</main>

<style>
  main {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
