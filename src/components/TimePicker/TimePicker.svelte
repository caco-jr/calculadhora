<script>
  import Select from "svelte-select";

  export let className = "";
  export let time;

  const hoursList = Array.from(Array(24).keys()).map(item => ({
    value: item,
    label: `${item}`,
    type: "hours"
  }));

  const minutesList = Array.from(Array(60).keys()).map(item => ({
    value: item,
    label: `${item}`,
    type: "minutes"
  }));

  let selectedHour = time && hoursList.find(item => item.value === time.hours);
  let selectedMinute =
    time && minutesList.find(item => item.value === time.minutes);

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

<div class={`c-timepicker ${className}`}>
  <Select
    items={hoursList}
    bind:selectedValue={selectedHour}
    on:select={handleSelect} />

  <Select
    items={minutesList}
    bind:selectedValue={selectedMinute}
    on:select={handleSelect} />
</div>
