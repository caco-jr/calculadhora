<script>
  import Select from "svelte-select";

  export let time;

  const hours = Array.from(Array(24).keys()).map(item => ({
    value: item,
    label: `${item}`,
    type: "hour"
  }));

  const minutes = Array.from(Array(60).keys()).map(item => ({
    value: item,
    label: `${item}`,
    type: "minute"
  }));

  let selectedHour = time && hours.find(item => item.value === time.hour);
  let selectedMinute = time && minutes.find(item => item.value === time.minute);

  function handleSelect(selectedVal) {
    const { value, type } = selectedVal.detail;

    time = { ...time, [type]: value };
  }
</script>

<style>
  .c-timepicker {
    display: inline-flex;
  }
</style>

<div class="c-timepicker">
  <Select
    items={hours}
    bind:selectedValue={selectedHour}
    on:select={handleSelect} />

  <Select
    items={minutes}
    bind:selectedValue={selectedMinute}
    on:select={handleSelect} />
</div>
