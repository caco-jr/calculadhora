<script>
  import LoadSVG from "@components/LoadSVG";

  export let currentStepNumber = 0;
  let list = handleList();
  const totalSteps = 5;

  function handleList() {
    return [...Array(totalSteps)].map((_, index) => {
      const active = index <= Number(currentStepNumber);

      return {
        active
      };
    });
  }
</script>

<style>
  .c-progress {
    display: flex;
    justify-content: space-between;
    position: relative;
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
  }

  .c-progress__circle--active {
    border: 2px solid #fff;
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
  }

  .c-progress__bar[data-current-step="1"]::after {
    width: calc((100% / 4) * 1);
  }

  .c-progress__bar[data-current-step="2"]::after {
    width: calc((100% / 4) * 2);
  }

  .c-progress__bar[data-current-step="3"]::after {
    width: calc((100% / 4) * 3);
  }

  .c-progress__bar[data-current-step="4"]::after {
    width: calc((100% / 4) * 4);
  }
</style>

<section class="c-progress">
  {#each list as { active }, i}
    <div class="c-progress__circle" class:c-progress__circle--active={active}>
      {#if active}
        <LoadSVG name="check" />
      {/if}
    </div>
  {/each}

  <span class="c-progress__bar" data-current-step={currentStepNumber} />
</section>
