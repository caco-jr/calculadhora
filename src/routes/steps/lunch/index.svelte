<script>
  import LayoutBase from "../components/LayoutBase";
  import ProgressBar from "../components/ProgressBar";
  import Button from "@components/Button";
  import { STEP_BREAK_URI } from "@lib/routesURI";
</script>

<svelte:head>
  <title>Almoço | CalculadHora</title>
</svelte:head>

<LayoutBase title="Almoço:">

  <Button tag="a" href={STEP_BREAK_URI}>Próximo</Button>

  <ProgressBar currentStepNumber="2" />
</LayoutBase>
