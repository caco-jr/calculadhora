<script>
  import Header from "@components/Header";

  import { fly } from "svelte/transition";
</script>

<style>
  .ct-init {
    min-height: 100vh;
    background-color: var(--primary-color);
  }

  .ct-init__title {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
  }
</style>

<svelte:head>
  <title>Carga Horária | CalculadHora</title>
</svelte:head>

<section class="ct-init">
  <Header />

  <section class="container">
    <h1 class="ct-init__title">Qual sua carga horária diária?</h1>
  </section>
</section>
