<script setup>
import heroLogo from '@/assets/images/logo/hero-logo.png'
import logoPrincipal from '@/assets/images/logo/bandcamp-logo.png'
import colores from '@/assets/images/logo/bandcamp-logo-colores-principales.png'
import imgexcepcional from '@/assets/images/logo/logo-con-huella-prueba.png'
import logoHuella from '@/assets/images/logo/logo-huella.png'
import logoHuellaColores from '@/assets/images/logo/logo-huella-colores.png'
import areaRespeto from '@/assets/images/logo/area-de-respeto.png'
import convivenciaMarcas from '@/assets/images/logo/logo-con-mas-marcas.png'
import separador from '@/assets/images/Linea1.svg'
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroLogo" alt="Logo" />
    </section>
    <div class="page-content">
    <section class="subtitulo">
      <h1>NUESTRO LOGO REFLEJA EL ESPÍTIRU “HANDMADE” Y REBELDE QUE NOS REPRESENTA</h1>
    </section>
    <img class="logo-linea" :src="separador">
    <section class="logoPrincipal">
      <div class="imagen">
        <img class="imgLogoPrincipal" :src="logoPrincipal">
      </div>
      <div class="texto">
        <p>Está creado a partir de la generación de unos caracteres propios. Se compone de dos niveles de texto, sin posibilidad de que esto se divida de otra forma distinta.</p>
        <p>Siempre irá en uno de los colores de nuestra paleta principal: Negro oveja, Blanco Puro o Amarillo Retro. Dependerá del mejor contraste que genere con el fondo.</p>
        <DownloadButton/>
      </div>
    </section>
    <section class="coloresAceptados">
      <h2>VERSIONES ACEPTADAS</h2>
      <img class="imgVersionesAceptadas" :src="colores">
    </section>
    <img class="logo-linea" :src="separador">
    <section class="usoExcepcional">
      <h2>USO EXCEPCIONAL</h2>
      <div class="explicacion"><p>Únicamente para usos publicitarios, el logotipo puede ir acompañado de huellas de los artistas miembros de Bandcamp, las cuales han sido creadas en nuestra web, como parte de la experiencia que ofrecemos.</p></div>
      <img class="excepcional" :src="imgexcepcional">
    </section>
    <section class="usoIsotipo">
      <h2>USO DEL ISOTIPO</h2>
      <div class="textosIso">
        <h4>El logotipo estará acompañado de la huella, que actúa como isotipo, en publicidad de los artistas. </h4>
        <p>Abarca cualquier tipo de publicidad donde intervenga Bandcamp. El logotipo irá acompañado de la huella del artista. Además existen unas combinaciones de color limitadas</p>
      </div>
      <div class="imgsIso">
        <div class="isoPrincipal"><img class="logoHuella" :src="logoHuella"></div>
        <h4>Uso permitido del color en esta versión</h4>
        <img class="logoHuellaColores" :src="logoHuellaColores">
      </div>
    </section>
    <img class="logo-linea" :src="separador">
    <section class="areas">
      <h2>ÁREA DE RESPETO</h2>
      <div class="textoArea"><p>Para ambos casos, tanto el logo oficial como el de usos publicitarios, se utiliza el tamaño de la M para medir el área de respeto mínimo que se debe dejar para su correcto uso.</p></div>
      <img class="areaRespeto" :src="areaRespeto">
      <img class="logo-linea" :src="separador">
    </section>
    <section class="convivencia">
      <h2>CONVIVENCIA CON OTRAS MARCAS</h2>
      <img class="marcas" :src="convivenciaMarcas">
    </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}

.page-content {
  box-sizing: border-box;
  width: min(100%, 83rem);
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
}

.subtitulo {
  padding-top: 3rem;
  display: flex;
  justify-content: center;
}

h1 {
  font-size: 3rem;
  font-family:'Ramona';
  font-weight: 300;
  width: 85%;
  text-align: center;
}

.logo-linea {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
}

.logoPrincipal {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.imagen{
  width: 65%;
  padding-left: 8rem;
}
.imgLogoPrincipal{
  width: 100%;
}

.texto {
  padding-top: 2rem;
  width: 35%;
  padding-right: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

p{
  margin: 0;
}

h2 {
  font-family: 'Ramona';
}
.imgVersionesAceptadas {
  width: 100%;
}

.explicacion {
  width: 50%;
}

.excepcional {
  width: 100%;
}

.textosIso {
  width: 50%;
}

h4 {
  font-family: 'Urbanist';
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.isoPrincipal {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.logoHuella {
  width: 50%;
}

.logoHuellaColores {
  width: 100%;
}

.textoArea {
  width: 50%;
}
.areaRespeto{
  margin-top: 1rem;
  width: 100%;
}

.marcas {
  width: 100%;
}
</style>
