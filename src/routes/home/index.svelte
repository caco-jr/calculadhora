<script>
  import { STEP_INIT_URI } from "@lib/routesURI";
</script>

<style>
  .ct-landing {
    display: flex;
    align-items: center;
    min-height: 100vh;
    position: relative;
  }

  .ct-landing__content-box {
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .ct-landing__title {
    font-size: 60px;
    font-weight: 900;
    margin: 0;
  }

  .ct-landing__sub-title {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .ct-landing__button {
    background: transparent linear-gradient(180deg, #f17c77 0%, #fb5a53 100%) 0%
      0% no-repeat padding-box;
    border-radius: 42px;
    font-weight: 600;
    font-size: 26px;
    color: #fff;
    padding: 19px 120px;
    border: none;
    text-decoration: none;
  }

  .ct-landing__image {
    max-width: 60%;
    position: absolute;
    right: 0;
  }
</style>

<svelte:head>
  <title>CalculadHora</title>
</svelte:head>

<section class="ct-landing">
  <section class="container">
    <section class="ct-landing__content-box">
      <h1 class="ct-landing__title">CalculadHora</h1>
      <span class="ct-landing__sub-title">Você no controle do seu tempo</span>

      <a class="ct-landing__button" href={STEP_INIT_URI}>Iniciar</a>
    </section>
  </section>

  <img src="images/person.svg" alt="person" class="ct-landing__image" />
</section>
