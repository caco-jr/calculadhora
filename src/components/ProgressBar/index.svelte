<script>
  import LoadSVG from "@components/LoadSVG";
  import {
    STEP_CONFIG_URI,
    STEP_INIT_URI,
    STEP_LUNCH_URI,
    STEP_BREAK_URI,
    STEP_FINISH_URI
  } from "@lib/routesURI";

  export let currentStepNumber = 0;
  let list = handleList();
  const totalSteps = 5;

  function handleList() {
    return [...Array(totalSteps)].map((_, index) => {
      const active = index <= Number(currentStepNumber);
      let uri;

      switch (index) {
        case 0:
          uri = STEP_CONFIG_URI;
          break;

        case 1:
          uri = STEP_INIT_URI;
          break;

        case 2:
          uri = STEP_LUNCH_URI;
          break;

        case 3:
          uri = STEP_BREAK_URI;
          break;

        case 4:
          uri = STEP_FINISH_URI;
          break;

        default:
          break;
      }

      return {
        active,
        uri
      };
    });
  }
</script>

<style>
  .c-progress {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 60px 0 30px;
  }

  .c-progress__circle {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background-color: var(--primary-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transform: scale(1);
    transition: 0.3s all ease;
  }

  .c-progress__circle--active {
    border: 2px solid #fff;
  }

  .c-progress__circle--active:hover {
    transform: scale(1.2);
  }

  .c-progress__bar {
    height: 2px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    margin: auto 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
  }

  .c-progress__bar::after {
    content: "";
    background-color: #fff;
    height: 100%;
    display: inline-block;
    position: absolute;
    width: calc((100% / var(--total-step)) * var(--current-step));
  }
</style>

<section class="c-progress">
  {#each list as { active, uri }, i}
    {#if active}
      <a href={uri} class="c-progress__circle c-progress__circle--active">
        <LoadSVG name="check" />
      </a>
    {:else}
      <div class="c-progress__circle" />
    {/if}
  {/each}

  <span
    class="c-progress__bar"
    style={`--current-step: ${currentStepNumber}; --total-step: ${list.length - 1}`} />
</section>
