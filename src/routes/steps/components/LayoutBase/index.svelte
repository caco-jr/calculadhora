<script>
  import Header from "@components/Header";

  export let title = "";
</script>

<style>
  .c-layout-base {
    min-height: 100vh;
    background-color: var(--primary-color);
  }

  .c-layout-base__title {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
  }

  .c-layout-base__slot {
    display: flex;
    flex-flow: column;
    padding-bottom: 40px;
  }

  .c-layout-base > .container,
  .c-layout-base__slot {
    min-height: calc(100vh - 200px);
  }
</style>

<section class="c-layout-base">
  <Header />

  <section class="container">
    <h1 class="c-layout-base__title">{title}</h1>

    <section class="c-layout-base__slot">
      <slot />
    </section>
  </section>
</section>
