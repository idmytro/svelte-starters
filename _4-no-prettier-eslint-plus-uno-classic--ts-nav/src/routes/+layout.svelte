<script>
  import '../assets/main.css'
  import { page } from '$app/stores'

  let currentPath
  $: currentPath = $page.url.pathname
</script>

<div id="app">
  <header>
    <nav>
      <a href="/" aria-current={currentPath === '/' ? 'page' : undefined}>Home</a>
      <a href="/about" aria-current={currentPath === '/about' ? 'page' : undefined}>About</a>
    </nav>
  </header>
  <slot />
</div>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 0;
  padding: 1rem 0;
}

nav a {
  font-size: 1rem;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav a[aria-current='page'] {
  color: var(--color-text);
}

nav a[aria-current='page']:hover {
  background-color: transparent;
}
</style>
