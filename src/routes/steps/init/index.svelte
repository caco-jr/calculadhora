<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Header from "@components/Header";

  import { STEP_LUNCH_START_URI, HOME_URI } from "@lib/routesURI";

  let timeInput;
  let inputValue = "8:48";

  onMount(() => {
    setTimeout(() => {
      timeInput.focus();
      timeInput.setSelectionRange(inputValue.length, inputValue.length);
    }, 500);
  });
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

  .ct-init__input {
    font-size: 159px;
    max-width: 100%;
    margin-top: 130px;
    text-align: center;
    background: transparent;
    border: none;
    color: #fff;
    font-weight: 600;
  }

  .ct-init__button {
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
  }

  .ct-init__checkbox-box {
    font-size: 25px;
    color: #fff;
    font-weight: 600;
    display: block;
    text-align: center;
  }
</style>

<svelte:head>
  <title>Carga Horária | CalculadHora</title>
</svelte:head>

<section class="ct-init">
  <Header />

  <section class="container">
    <h1 class="ct-init__title">Qual sua carga horária diária?</h1>

    <input class="ct-init__input" value={inputValue} bind:this={timeInput} />

    <a href={HOME_URI} class="ct-init__button">Próximo</a>

    <label class="ct-init__checkbox-box">Realiza pausas além do almoço?</label>
  </section>
</section>
