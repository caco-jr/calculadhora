<script>
  import LayoutBase from "../components/LayoutBase";
  import ProgressBar from "../components/ProgressBar";
  import Button from "@components/Button";
  import { STEP_BREAK_URI } from "@lib/routesURI";
</script>

<svelte:head>
  <title>Início do almoço | CalculadHora</title>
</svelte:head>

<LayoutBase title="Almoço:">
  <section>Hora do almoço</section>

  <Button tag="a" href={STEP_BREAK_URI}>Próximo</Button>

  <ProgressBar currentStepNumber="1" />
</LayoutBase>
