<script>
  import TimePicker from "../components/TimePicker";

  let time = new Date();
  $: _time = time.toLocaleTimeString("pt-BR");

  let entryTime = { hour: 10, minute: 30 };
</script>

<style>

</style>

<svelte:head>
  <title>Calculadhora | Home</title>
</svelte:head>

<p>Mudou: {entryTime.hour}h {entryTime.minute}m</p>

<section>
  <p>Horário de Entrada: {_time}</p>
  <TimePicker bind:time={entryTime} />
</section>
