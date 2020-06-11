<script>
  import Header from "@components/Header";

  let title = "";
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
</style>

<section class="c-layout-base">
  <Header />

  <section class="container">
    <h1 class="c-layout-base__title">{title}</h1>

    <slot />
  </section>
</section>
