<script>
  import {
    difference,
    convertTime,
    formatTimeString,
    formatTimeObject
  } from "@lib/date";
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

  $: timeToFinish = handleTimeToFinish($initTime, $lunchStart, $lunchFinish);

  $: fullTimeWorked = handleTotalTimeWorked($initTime)
    .addTime($lunchStart)
    .addTime($lunchFinish)
    .finish($finishTime)
    .getTotal();

  $: bankOfHours = handleBankOfHours(fullTimeWorked, $workload);

  function handleBankOfHours(totalTime, _workload) {
    if (convertTime(_workload) < convertTime(totalTime)) {
      return { ...difference(_workload, totalTime), status: "positive" };
    }

    return { ...difference(totalTime, _workload), status: "negative" };
  }

  function handleTimeToFinish(entry, pause1, pauseReturn1) {
    const datePlus = new Date(convertTime(entry));
    const breakTime = new Date(convertTime(difference(pause1, pauseReturn1)));

    datePlus.addHours(breakTime.getHours() + 8, breakTime.getMinutes() + 48);
    return formatTimeObject(datePlus.getHours(), datePlus.getMinutes());
  }

  const handleTotalTimeWorked = (a, finish) => {
    let total;
    let list = [...[a]].flat(Infinity);
    let diff = [];

    if (list.length >= 2 && finish) {
      while (list.length >= 2) {
        let cutList = list.splice(0, 2);
        diff = [...diff, difference(cutList[0], cutList[1])];
      }

      total = diff.reduce(
        (accumulator, currentValue) => {
          const hours = Number(currentValue.hours) + Number(accumulator.hours);
          const minutes =
            Number(currentValue.minutes) + Number(accumulator.minutes);

          if (minutes > 59) {
            return formatTimeObject(hours + 1, minutes - 60);
          }

          return formatTimeObject(hours, minutes);
        },
        { hours: 0, minutes: 0 }
      );
    }

    return {
      getTotal: () => total,
      periods: diff,
      leftovers: list,
      addTime: b => handleTotalTimeWorked([...[a], b]),
      finish: b => handleTotalTimeWorked([...[a], b], true)
    };
  };
</script>

<style>
  .c-step-result {
    flex: 1;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
  }

  .c-step-result__title,
  .c-step-result__title-marked {
    color: #fff;
    font-size: 60px;
    font-weight: 600;
    margin: 60px 0 90px;
  }

  .c-step-result__title-marked {
    font-weight: 700;
  }

  .c-step-result__title-marked--negative {
    color: var(--secondary-color);
  }

  .c-step-result__title-marked--positive {
    color: #00ff88;
  }

  .c-step-result__text,
  .c-step-result__text-marked {
    font-size: 36px;
    font-weight: 700;
  }

  .c-step-result__text {
    color: #fff;
    margin-bottom: 20px;
  }

  .c-step-result__text-marked {
    color: var(--secondary-color);
  }

  .c-step-result__image {
    margin-top: 90px;
  }
</style>

<svelte:head>
  <title>Resultados | CalculadHora</title>
</svelte:head>

<LayoutBase title="Resultado:">
  <section class={componentClassName}>
    <section>
      <h2 class={`${componentClassName}__title`}>
        você está
        <span
          class={`${componentClassName}__title-marked ${componentClassName}__title-marked--${bankOfHours.status}`}>
          {#if bankOfHours.status === 'positive'}positivo{:else}negativo{/if}
        </span>
        !
      </h2>

      <p class={`${componentClassName}__text`}>
        <span class={`${componentClassName}__text-marked`}>
          Horário previsto de saída:
        </span>
        {formatTimeString(timeToFinish)}
      </p>

      <p class={`${componentClassName}__text`}>
        <span class={`${componentClassName}__text-marked`}>
          Horas trabalhadas:
        </span>
        {formatTimeString(fullTimeWorked)}
      </p>

      <p class={`${componentClassName}__text`}>
        <span class={`${componentClassName}__text-marked`}>Carga horária:</span>
        {formatTimeString($workload)}
      </p>

      <p class={`${componentClassName}__text`}>
        <span class={`${componentClassName}__text-marked`}>
          Banco de Horas:
        </span>
        {#if bankOfHours.status === 'negative'}-{/if}
        {formatTimeString(bankOfHours)}
      </p>
    </section>

    {#if bankOfHours.status === 'positive'}
      <img
        src="images/success-person.svg"
        alt="person"
        class={`${componentClassName}__image`} />
    {:else}
      <img
        src="images/working-person.svg"
        alt="person"
        class={`${componentClassName}__image`} />
    {/if}

  </section>
</LayoutBase>
