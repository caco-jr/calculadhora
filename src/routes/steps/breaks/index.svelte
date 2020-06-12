<script>
  import LayoutBase from "@components/LayoutBase";
  import ProgressBar from "@components/ProgressBar";
  import Button from "@components/Button";
  import { STEP_RESULT_URI } from "@lib/routesURI";

  let componentClassName = "c-step-breaks";
</script>

<style>
  .c-step-breaks {
    flex: 1;
  }
</style>

<svelte:head>
  <title>Pausas | CalculadHora</title>
</svelte:head>

<LayoutBase title="Pausas:">
  <section class={componentClassName}>
    <Button tag="a" href={STEP_RESULT_URI}>Próximo</Button>
  </section>

  <ProgressBar currentStepNumber="3" />
</LayoutBase>
