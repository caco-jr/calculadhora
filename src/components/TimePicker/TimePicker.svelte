<script>
  import Select from "svelte-select";

  export let className = "";
  export let time;

  const hoursList = Array.from(Array(24).keys()).map(item => ({
    value: item,
    label: `${item}`.padStart(2, "0"),
    type: "hours"
  }));

  const minutesList = Array.from(Array(60).keys()).map(item => ({
    value: item,
    label: `${item}`.padStart(2, "0"),
    type: "minutes"
  }));

  let selectedHour = time && hoursList.find(item => item.value === time.hours);
  let selectedMinute =
    time && minutesList.find(item => item.value === time.minutes);

  function handleSelect(selectedVal) {
    const { value, type } = selectedVal.detail;

    time = { ...time, [type]: value };
  }

  function handleInputValue(time) {
    return `${time.hours.toString().padStart(2, "0")}:${time.minutes}`;
  }

  function handleChange(event) {
    const value = event.target.value;
    const separatedValue = value.split(":");

    time = {
      ...time,
      hours: separatedValue[0],
      minutes: separatedValue[1]
    };
  }
</script>

<style>
  .c-timepicker {
    display: inline-flex;
  }

  @media (max-width: 767px) {
    .c-timepicker__mobile {
      display: inline-flex;
    }

    .c-timepicker__desktop {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .c-timepicker__mobile {
      display: none;
    }

    .c-timepicker__desktop {
      display: inline-flex;
    }
  }
</style>

<div class={`c-timepicker ${className}`}>
  <div class={`c-timepicker__desktop ${className}__desktop`}>
    <Select
      items={hoursList}
      bind:selectedValue={selectedHour}
      on:select={handleSelect} />

    <Select
      items={minutesList}
      bind:selectedValue={selectedMinute}
      on:select={handleSelect} />
  </div>

  <div class={`c-timepicker__mobile ${className}__mobile`}>
    <input
      type="time"
      on:change={handleChange}
      value={handleInputValue(time)} />
  </div>
</div>
