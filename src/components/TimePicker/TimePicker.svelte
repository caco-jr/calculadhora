<script>
  import { onMount } from "svelte";
  import IMask from "imask";
  import { imask } from "svelte-imask";

  import { formatTimeString } from "@lib/date";

  export let time;
  export let autoFocus = false;
  export let className = "";
  export let onComplete;

  let timeInputRef;

  const options = {
    overwrite: true,
    autofix: true,
    mask: "HH:MM",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        placeholderChar: "H",
        from: 0,
        to: 23,
        maxLength: 2
      },
      MM: {
        mask: IMask.MaskedRange,
        placeholderChar: "M",
        from: 0,
        to: 59,
        maxLength: 2
      }
    }
  };

  let timeString = handleInputValue(time);

  function complete({ detail: imask }) {
    handleTimeFormat(imask._value);
    onComplete(time);
  }

  function handleInputValue(timeValue) {
    if (!timeValue) {
      return "00:00";
    }

    return formatTimeString(timeValue);
  }

  function handleTimeFormat(value) {
    const separatedValue = value.split(":");

    time = {
      ...time,
      hours: separatedValue[0],
      minutes: separatedValue[1]
    };
  }

  function handleAutoFocus() {
    if (!autoFocus) {
      return;
    }

    setTimeout(() => {
      timeInputRef.focus();
      timeInputRef.setSelectionRange(timeString.length, timeString.length);
    }, 500);
  }

  onMount(() => {
    handleAutoFocus();
  });
</script>

<style>
  .c-timepicker__input {
    max-width: 100%;
    text-align: center;
    background: transparent;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 26px;
    padding: 6px 8px;
    border-bottom: 1px solid rgb(255, 255, 255, 0.4);
    transition: 0.3s all ease;
  }

  .c-timepicker__input:hover {
    border-color: rgb(255, 255, 255, 0.6);
  }

  .c-timepicker__input:focus {
    border-color: rgb(255, 255, 255, 1);
  }

  .c-timepicker__input::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
</style>

<div class={`c-timepicker ${className}`}>
  <input
    use:imask={options}
    bind:value={timeString}
    bind:this={timeInputRef}
    class="c-timepicker__input"
    name="time"
    type="text"
    inputmode="numeric"
    placeholder="00:00"
    on:complete={complete} />
</div>
