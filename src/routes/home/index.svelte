<script>
  import { STEP_CONFIG_URI } from "@lib/routesURI";
  import { fly } from "svelte/transition";
</script>

<style>
  .ct-landing {
    display: flex;
    flex-wrap: wrap;
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
    font-size: 45px;
    font-weight: 900;
    margin: 0;
  }

  .ct-landing__sub-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: center;
  }

  .ct-landing__button {
    background: transparent linear-gradient(180deg, #f17c77 0%, #fb5a53 100%) 0%
      0% no-repeat padding-box;
    border-radius: 42px;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    padding: 12px 50px;
    border: none;
    text-decoration: none;
  }

  .ct-landing__image {
    max-width: 65%;
    position: absolute;
    right: 0;
  }

  @media (max-width: 768px) {
    .ct-landing__content-box {
      display: flex;
      margin-top: 100px;
    }

    .ct-landing__image {
      position: relative;
      max-width: 100%;
      max-height: 365px;
    }
  }

  @media (max-width: 320px) {
    .ct-landing__title {
      font-size: 36px;
    }

    .ct-landing__sub-title {
      font-size: 16px;
    }
  }
</style>

<svelte:head>
  <title>CalculadHora</title>
</svelte:head>

<section
  class="ct-landing"
  in:fly={{ x: 300, duration: 500 }}
  out:fly={{ x: -300, duration: 300 }}>
  <section class="container">
    <section class="ct-landing__content-box">
      <h1 class="ct-landing__title">CalculadHora</h1>
      <span class="ct-landing__sub-title">Você no controle do seu tempo</span>

      <a class="ct-landing__button" href={STEP_CONFIG_URI}>Iniciar</a>
    </section>
  </section>

  <img src="images/person.svg" alt="person" class="ct-landing__image" />
</section>
