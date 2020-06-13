<script>
  import { fly } from "svelte/transition";

  import TimePicker from "@components/TimePicker";
  import Button from "@components/Button";
  import ProgressBar from "@components/ProgressBar";
  import LayoutBase from "@components/LayoutBase";

  import { STEP_LUNCH_URI } from "@lib/routesURI";
</script>

<style>
  .ct-init {
    flex: 1;
    text-align: center;
  }

  .ct-init :global(.c-timepicker__input) {
    font-size: 110px;
    display: block;
    margin: 180px auto 0;
    max-width: 350px;
  }

  .ct-init :global(.ct-init__button) {
    margin: 90px auto 30px;
  }
</style>

<svelte:head>
  <title>Início | CalculadHora</title>
</svelte:head>

<LayoutBase title="Início:">
  <section class="ct-init">
    <TimePicker
      className="ct-init__timepicker"
      autoFocus
      time={{ hours: '10', minutes: '00' }} />

    <Button tag="a" href={STEP_LUNCH_URI} className="ct-init__button">
      Próximo
    </Button>
  </section>

  <ProgressBar currentStepNumber="1" />
</LayoutBase>
