<script>
  import TimePicker from "../components/TimePicker";

  let entryTime = { hours: 8, minutes: 30 };
  let entryLunchTime = { hours: 12, minutes: 30 };
  let backLunchTime = { hours: 13, minutes: 30 };
  let finishTime = { hours: 19, minutes: 30 };
  $: fullTimeWorked = handleFullTimeWorked(
    entryTime,
    entryLunchTime,
    backLunchTime,
    finishTime
  );

  function difference(start, end) {
    function handleDate({ hours, minutes }) {
      return new Date().setHours(hours, minutes);
    }

    const dateDiff = new Date(handleDate(end) - handleDate(start));

    return {
      hours: dateDiff.getUTCHours(),
      minutes: dateDiff.getUTCMinutes()
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

<p>Mudou entrada: {entryTime.hours}h {entryTime.minutes}m</p>

<p style="font-weight:bold; font-size:32px">
  Tempo trabalhado: {fullTimeWorked.hours} horas e {fullTimeWorked.minutes}
  minutos
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
