<template>
  <footer class="main-footer">
    <div class="footer-left">
      <nav class="footer-nav">
        <div class="nav-column">
          <router-link to="/">Inicio</router-link>
          <router-link to="/valores">Valores y voz</router-link>
          <router-link to="/logo">Logo</router-link>
          <router-link to="/colores">Colores</router-link>
          <router-link to="/tipografia">Tipografia</router-link>
        </div>
        <div class="nav-column">
          <router-link to="/reticulas">Reticulas</router-link>
          <router-link to="/fotografia">Tratamiento fotografico</router-link>
          <router-link to="/elementos">Elementos graficos</router-link>
          <router-link to="/motion">Motion</router-link>
        </div>
      </nav>

      <div class="footer-buttons">
        <button class="btn-footer">Anterior</button>
        <button class="btn-footer">Siguiente</button>
      </div>
    </div>

    <img src="@/assets/svg/forma-giratoria2.svg" class="rotating-asterisk" alt="Asterisco">

    <div class="footer-right">
      <img src="@/assets/svg/logo-bandcamp.svg" class="footer-logo" alt="Bandcamp Logo">
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  background-color: var(--color-amarillo-retro);
  height: 26.375rem;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: var(--font-urbanist);
  font-weight: 700;

  .footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70%;
    text-align: left;
    z-index: 2;
  }

  .footer-nav {
    display: flex;
    gap: 5rem;

    .nav-column {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      a {
        text-decoration: none;
        color: #000;
        font-family: inherit;
        font-weight: inherit;
        font-size: 1.6rem;
        &:hover { text-decoration: underline; }
      }
    }
  }

  .footer-buttons {
    display: flex;
    gap: 1.5rem;

    .btn-footer {
      background: #000;
      color: var(--color-amarillo-retro);
      border: none;
      padding: 1.2rem 2.8rem;
      border-radius: 1.2rem;
      font-family: inherit;
      font-weight: inherit;
      cursor: pointer;
    }
  }

  .footer-right {
    z-index: 2;
    flex-shrink: 0;

    .footer-logo {
      width: 32.8125rem;
      height: 20.5rem;
      object-fit: contain;
    }
  }

  .rotating-asterisk {
    position: absolute;
    right: 20rem;
    bottom: -16.9375rem;
    width: 33.875rem;
    height: 33.875rem;
    z-index: 1;
    pointer-events: none;
    display: block;
    transform-origin: center center;
    animation: giroAsterisco 2s steps(4, end) infinite;
  }
}
</style>

<style>
@keyframes giroAsterisco {
  from { transform: rotate(0deg); }
  to { transform: rotate(-90deg); }
}
</style>
