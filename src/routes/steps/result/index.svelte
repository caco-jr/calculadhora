<script>
  import { formatTimeString } from "@lib/date";
  import LayoutBase from "@components/LayoutBase";
  import ProgressBar from "@components/ProgressBar";
  import {
    workload,
    initTime,
    lunchStart,
    lunchFinish,
    finishTime
  } from "@store";

  let componentClassName = "c-step-result";
</script>

<style>
  .c-step-result {
    flex: 1;
  }
</style>

<svelte:head>
  <title>Resultados | CalculadHora</title>
</svelte:head>

<LayoutBase title="Resultado:">
  <section class={componentClassName}>
    <h2>você está negativo!</h2>
    <p>que tal trabalhar mais um pouquinho?</p>

    <p>
      <span>Horas trabalhadas:</span>
      08:00
    </p>

    <p>
      <span>Carga horária:</span>
      {formatTimeString($workload)}
    </p>

    <p>
      <span>Horário previsto saída:</span>
      18:00
    </p>

    <p>
      <span>Banco de Horas:</span>
      00:40
    </p>
  </section>
</LayoutBase>
