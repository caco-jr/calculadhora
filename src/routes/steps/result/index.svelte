<script>
  import { difference, convertTime, formatTimeString } from "@lib/date";
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

  $: timeToFinish = handleTimeToFinish($initTime, $lunchStart, $finishTime);

  $: fullTimeWorked = handleFullTimeWorked($initTime)
    .addTime($lunchStart)
    .addTime($lunchFinish)
    .finish($finishTime).total;

  function handleTimeToFinish(entry, pause1, pauseReturn1) {
    const datePlus = new Date(convertTime(entry));
    const breakTime = new Date(convertTime(difference(pause1, pauseReturn1)));
    datePlus.addHours(breakTime.getHours() + 8, breakTime.getMinutes() + 48);

    const handleTimeObj = date => ({
      hours: date.getHours(),
      minutes: date.getMinutes()
    });

    return handleTimeObj(datePlus);
  }

  const handleFullTimeWorked = (a, finish) => {
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
          const hours = Number(currentValue.hours) + accumulator.hours;
          const minutes = Number(currentValue.minutes) + accumulator.minutes;

          if (minutes > 59) {
            return {
              hours: hours + 1,
              minutes: minutes - 60
            };
          }

          return {
            hours,
            minutes
          };
        },
        { hours: 0, minutes: 0 }
      );
    }

    return {
      total,
      periods: diff,
      leftovers: list,
      addTime: b => handleFullTimeWorked([...[a], b]),
      finish: b => handleFullTimeWorked([...[a], b], true)
    };
  };
</script>

<style>
  .c-step-result {
    flex: 1;
  }

  .c-step-result__title {
    color: #fff;
    font-size: 60px;
    font-weight: 600;
    margin: 60px 0 90px;
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
</style>

<svelte:head>
  <title>Resultados | CalculadHora</title>
</svelte:head>

<LayoutBase title="Resultado:">
  <section class={componentClassName}>
    <h2 class={`${componentClassName}__title`}>você está negativo!</h2>

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
        Horário previsto saída:
      </span>
      {formatTimeString(timeToFinish)}
    </p>

    <p class={`${componentClassName}__text`}>
      <span class={`${componentClassName}__text-marked`}>Banco de Horas:</span>
      00:40
    </p>
  </section>
</LayoutBase>
