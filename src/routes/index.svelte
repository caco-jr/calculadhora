<script>
  import { difference, convertTime } from "../lib/date.js";
  import TimePicker from "../components/TimePicker";

  let entryTime = { hours: 8, minutes: 30 };
  let entryLunchTime = { hours: 12, minutes: 30 };
  let backLunchTime = { hours: 13, minutes: 30 };
  let finishTime = { hours: 19, minutes: 30 };
  $: timeToFinish = handleTimeToFinish(entryTime);

  $: fullTimeWorked = handleFullTimeWorked(
    entryTime,
    entryLunchTime,
    backLunchTime,
    finishTime
  );

  function handleTimeToFinish(entry) {
    const date = new Date(convertTime(entry)).addHours(9, 48);

    return {
      hours: date.getHours(),
      minutes: date.getMinutes()
    };
  }

  function handleFullTimeWorked(entry, lunch, backLunch, finish) {
    const firstHalf = difference(entry, lunch);
    const secondHalf = difference(backLunch, finish);
    const hours = firstHalf.hours + secondHalf.hours;
    const minutes = firstHalf.minutes + secondHalf.minutes;

    if (minutes > 59) {
      return {
        hours: hours + 1,
        minutes: minutes - 60
      };
    }

    return { hours, minutes };
  }
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
  Horário previsto para finalizar: {timeToFinish.hours}h:{timeToFinish.minutes}min
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
