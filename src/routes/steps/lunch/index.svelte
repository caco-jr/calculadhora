<script>
  import { lunchStart, lunchFinish } from "@store";
  import TimePicker from "@components/TimePicker";
  import Button from "@components/Button";
  import { STEP_BREAK_URI } from "@lib/routesURI";
  import LayoutBase from "@components/LayoutBase";
  import ProgressBar from "@components/ProgressBar";

  let componentClassName = "c-lunch-step";
</script>

<style>
  .c-lunch-step {
    flex: 1;
    text-align: center;
  }

  .c-lunch-step__box {
    display: flex;
    justify-content: center;
    margin: 100px 0 200px;
  }

  .c-lunch-step__box-item {
    display: flex;
    align-items: center;
  }

  .c-lunch-step__box-item:first-child {
    margin-right: 60px;
  }

  .c-lunch-step__box-text {
    color: var(--complementary-color-03);
    font-size: 26px;
    font-weight: 600;
    margin-right: 14px;
  }

  .c-lunch-step :global(.c-lunch-timepicker .c-timepicker__input) {
    max-width: 190px;
    font-size: 60px;
  }
</style>

<svelte:head>
  <title>Almoço | CalculadHora</title>
</svelte:head>

<LayoutBase title="Almoço:">
  <section class={componentClassName}>
    <section class={`${componentClassName}__box`}>
      <section class={`${componentClassName}__box-item`}>
        <span class={`${componentClassName}__box-text`}>Pausa:</span>

        <TimePicker
          className="c-lunch-timepicker"
          autoFocus
          time={$lunchStart}
          onComplete={lunchStart.update} />
      </section>

      <section class={`${componentClassName}__box-item`}>
        <span class={`${componentClassName}__box-text`}>Retorno:</span>

        <TimePicker
          className="c-lunch-timepicker"
          time={$lunchFinish}
          onComplete={lunchFinish.update} />
      </section>
    </section>

    <Button
      tag="a"
      href={STEP_BREAK_URI}
      className={`${componentClassName}__button`}>
      Próximo
    </Button>
  </section>

  <ProgressBar currentStepNumber="2" />
</LayoutBase>
