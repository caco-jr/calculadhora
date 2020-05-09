<script>
  import TimePicker from "../components/TimePicker";

  let entryTime = { hours: 8, minutes: 30 };
  let entryLunchTime = { hours: 12, minutes: 30 };
  let backLunchTime = { hours: 13, minutes: 30 };
  let finishTime = { hours: 19, minutes: 30 };

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
</script>

<style>

</style>

<svelte:head>
  <title>Calculadhora | Home</title>
</svelte:head>

<p>Mudou entrada: {entryTime.hours}h {entryTime.minutes}m</p>

<p>
  Diferença de: {difference(entryTime, entryLunchTime).hours} horas e {difference(entryTime, entryLunchTime).minutes}
  minutos
</p>

<section class="c-home">
  <TimePicker bind:time={entryTime} className="c-home__timepicker-entry" />
  <br />
  <br />
  <br />
  <TimePicker bind:time={entryLunchTime} />
</section>
