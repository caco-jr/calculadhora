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
  }

  .ct-init :global(.c-timepicker__input) {
    font-size: 156px;
    display: block;
    margin: 100px auto 20px;
    max-width: 500px;
    padding-bottom: 20px;
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

    <Button tag="a" href={STEP_LUNCH_URI}>Próximo</Button>
  </section>

  <ProgressBar currentStepNumber="1" />
</LayoutBase>
