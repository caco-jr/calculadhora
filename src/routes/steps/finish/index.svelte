<script>
  import { fly } from "svelte/transition";

  import TimePicker from "@components/TimePicker";
  import Button from "@components/Button";
  import ProgressBar from "@components/ProgressBar";
  import LayoutBase from "@components/LayoutBase";

  import { STEP_RESULT_URI } from "@lib/routesURI";
</script>

<style>
  .c-finish {
    flex: 1;
    text-align: center;
  }

  .c-finish :global(.c-timepicker__input) {
    font-size: 110px;
    display: block;
    margin: 180px auto 0;
    max-width: 350px;
  }

  .c-finish :global(.c-finish__button) {
    margin: 90px auto 30px;
  }
</style>

<svelte:head>
  <title>Término | CalculadHora</title>
</svelte:head>

<LayoutBase title="Término:">
  <section class="c-finish">
    <TimePicker
      className="c-finish__timepicker"
      autoFocus
      time={{ hours: '19', minutes: '48' }} />

    <Button tag="a" href={STEP_RESULT_URI} className="c-finish__button">
      Concluir
    </Button>
  </section>

  <ProgressBar currentStepNumber="4" />
</LayoutBase>
