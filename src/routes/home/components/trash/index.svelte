<script>
  import { difference, convertTime } from "../../../../lib/date";
  import TimePicker from "../../../../components/TimePicker";

  let entryTime = { hours: 8, minutes: 30 };
  let entryLunchTime = { hours: 12, minutes: 30 };
  let backLunchTime = { hours: 13, minutes: 30 };
  let finishTime = { hours: 18, minutes: 20 };
  $: timeToFinish = handleTimeToFinish(
    entryTime,
    entryLunchTime,
    backLunchTime
  );

  $: fullTimeWorked = handleFullTimeWorked(entryTime)
    .addTime(entryLunchTime)
    .addTime(backLunchTime)
    .finish(finishTime).total;

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
          const hours = currentValue.hours + accumulator.hours;
          const minutes = currentValue.minutes + accumulator.minutes;

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

</style>

<svelte:head>
  <title>Calculadhora | Home</title>
</svelte:head>

<p style="font-weight:bold; font-size:32px">
  Tempo trabalhado: {fullTimeWorked.hours} horas e {fullTimeWorked.minutes}
  minutos
</p>

<p style="font-weight:bold; font-size:24px">
  Horário previsto para finalizar: {timeToFinish.hours}h:{`${timeToFinish.minutes}`.padStart(2, '0')}min
</p>

<section class="c-home">
  <section>
    <p>Inicio do trabalho</p>
    <TimePicker bind:time={entryTime} className="c-home__timepicker-entry" />
  </section>

  <section>
    <p>Pausa para almoço</p>
    <TimePicker
      bind:time={entryLunchTime}
      className="c-home__timepicker-entryLunch" />
  </section>

  <section>
    <p>Volta do almoço</p>
    <TimePicker
      bind:time={backLunchTime}
      className="c-home__timepicker-backLunch" />
  </section>

  <section>
    <p>Fim do expediente</p>
    <TimePicker
      bind:time={finishTime}
      className="c-home__timepicker-backLunch" />
  </section>
</section>
