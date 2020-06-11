<script>
  export let tag = "button";
  let _href = "";
  export { _href as href };
</script>

<style>
  .c-button {
    background-color: var(--secondary-color);
    font-size: 31px;
    font-weight: 600;
    letter-spacing: 0;
    padding: 15px 85px;
    border-radius: 42px;
    color: #fff;
    text-decoration: none;
    display: block;
    max-width: 300px;
    margin: 90px auto 55px;
    transition: 0.3s all ease;
    border: none;
  }
</style>

{#if tag === 'button'}
  <button class="c-button">
    <slot />
  </button>
{:else}
  <a href={_href} class="c-button">
    <slot />
  </a>
{/if}
