<script>
  import { fly } from "svelte/transition";

  import { workload } from "@store";
  import TimePicker from "@components/TimePicker";
  import Button from "@components/Button";
  import ProgressBar from "@components/ProgressBar";
  import LayoutBase from "@components/LayoutBase";

  import { STEP_INIT_URI } from "@lib/routesURI";
</script>

<style>
  .c-step-config {
    flex: 1;
    text-align: center;
  }

  .c-step-config :global(.c-timepicker__input) {
    font-size: 110px;
    display: block;
    margin: 180px auto 0;
    max-width: 350px;
    padding-bottom: 16px;
  }

  .c-step-config :global(.c-step-config__button) {
    margin: 90px auto 30px;
  }

  .c-step-config__checkbox-box {
    font-size: 20px;
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
      time={$workload}
      onComplete={workload.update} />

    <Button className="c-step-config__button" tag="a" href={STEP_INIT_URI}>
      Próximo
    </Button>

    <label class="c-step-config__checkbox-box">
      Realiza pausas além do almoço?
    </label>
  </section>

  <ProgressBar currentStepNumber="0" />
</LayoutBase>
