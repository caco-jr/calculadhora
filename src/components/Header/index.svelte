<script>
  import { HOME_URI } from "@lib/routesURI";
</script>

<style>
  .c-header {
    display: flex;
    justify-content: flex-end;
    padding-top: 80px;
  }

  .c-header__box {
    display: inline-flex;
    flex-flow: column;
    text-decoration: none;
  }

  .c-header__title,
  .c-header__sub-title {
    color: #fff;
  }

  .c-header__title {
    font-size: 26px;
    font-weight: 900;
  }

  .c-header__sub-title {
    font-size: 12px;
    font-weight: 600;
    margin-top: 3px;
  }
</style>

<header class="container c-header">
  <a class="c-header__box" href={HOME_URI}>
    <span class="c-header__title">CalculadHora</span>
    <span class="c-header__sub-title">Você no controle do seu tempo</span>
  </a>
</header>
