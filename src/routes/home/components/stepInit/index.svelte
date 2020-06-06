<style>
  .ct-init {
    display: flex;
    align-items: center;
    min-height: 100vh;
    position: relative;
  }

  .ct-init__content-box {
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .ct-init__title {
    font-size: 77px;
    font-weight: 900;
    margin: 0;
  }

  .ct-init__sub-title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  .ct-init__button {
    background: transparent linear-gradient(180deg, #f17c77 0%, #fb5a53 100%) 0%
      0% no-repeat padding-box;
    border-radius: 42px;
    font-weight: 600;
    font-size: 36px;
    color: #fff;
    padding: 19px 120px;
    border: none;
  }

  .ct-init__image {
    max-width: 60%;
    position: absolute;
    right: 0;
  }
</style>

<section class="ct-init">
  <section class="container">
    <section class="ct-init__content-box">
      <h1 class="ct-init__title">CalculadHora</h1>
      <span class="ct-init__sub-title">Você no controle do seu tempo</span>

      <button class="ct-init__button">Iniciar</button>
    </section>
  </section>

  <img src="images/person.svg" alt="person" class="ct-init__image" />
</section>
