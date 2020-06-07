<script>
  import { HOME_URI } from "@lib/routesURI";
</script>

<style>
  @keyframes pulse {
    0% {
      will-change: transform;
    }

    20% {
      transform: scale(1);
    }

    40% {
      transform: scale(1.3);
    }

    60% {
      transform: scale(1.1);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1.1);
    }
  }

  .c-header {
    display: flex;
    justify-content: flex-end;
    padding-top: 80px;
  }

  .c-header__box {
    display: inline-flex;
    flex-flow: column;
    text-decoration: none;
    will-change: unset;
  }

  .c-header__box:hover {
    animation: pulse 0.4s forwards;
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
