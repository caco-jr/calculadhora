<script>
  import { fly } from "svelte/transition";

  import TimePicker from "@components/TimePicker";
  import Button from "@components/Button";
  import ProgressBar from "@components/ProgressBar";
  import LayoutBase from "@components/LayoutBase";

  import { STEP_INIT_URI } from "@lib/routesURI";
</script>

<style>
  .c-step-config {
    flex: 1;
  }

  .c-step-config :global(.c-timepicker__input) {
    font-size: 156px;
    display: block;
    margin: 100px auto 20px;
    max-width: 500px;
    padding-bottom: 20px;
  }

  .c-step-config__checkbox-box {
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

<LayoutBase title="Qual sua carga horária diária?">
  <section class="c-step-config">
    <TimePicker
      className="c-step-config__timepicker"
      autoFocus
      time={{ hours: '08', minutes: '48' }} />

    <Button tag="a" href={STEP_INIT_URI}>Próximo</Button>

    <label class="c-step-config__checkbox-box">
      Realiza pausas além do almoço?
    </label>
  </section>

  <ProgressBar currentStepNumber="0" />
</LayoutBase>
