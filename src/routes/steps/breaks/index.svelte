<script>
  import LayoutBase from "../components/LayoutBase";
  import ProgressBar from "../components/ProgressBar";
  import Button from "@components/Button";
  import { STEP_RESULT_URI } from "@lib/routesURI";
</script>

<svelte:head>
  <title>Pausas | CalculadHora</title>
</svelte:head>

<LayoutBase title="Pausas:">
  <section>Apagar</section>

  <Button tag="a" href={STEP_RESULT_URI}>Próximo</Button>

  <ProgressBar currentStepNumber="2" />
</LayoutBase>
