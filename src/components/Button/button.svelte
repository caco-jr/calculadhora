<script>
  export let tag = "button";
  export let className = "";
  let _href = "";
  export { _href as href };
</script>

<style>
  .c-button {
    background-color: var(--secondary-color);
    font-size: 20px;
    font-weight: 600;
    padding: 12px 60px;
    border-radius: 42px;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    max-width: 300px;
    transition: 0.3s all ease;
    border: none;
  }

  .c-button:hover {
    background-color: var(--light-secondary-color);
  }
</style>

{#if tag === 'button'}
  <button class={`c-button ${className}`}>
    <slot />
  </button>
{:else}
  <a href={_href} class={`c-button ${className}`}>
    <slot />
  </a>
{/if}
