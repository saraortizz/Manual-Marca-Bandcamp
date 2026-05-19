<script setup>
import lineaVertical from '@/assets/images/tratamiento-fotografico/lineaVertical.png'
import negro from '@/assets/images/tratamiento-fotografico/negro.jpg'
import azul from '@/assets/images/tratamiento-fotografico/azul.jpg'
import verde from '@/assets/images/tratamiento-fotografico/verde.jpg'
import naranja from '@/assets/images/tratamiento-fotografico/naranja.jpg'
import separacion from '@/assets/images/Linea1.svg'
import antesDespues from '@/assets/images/tratamiento-fotografico/antesDespues.png'
import heroTratFotografico from '@/assets/images/tratamiento-fotografico/hero-tratamiento-fotografico.jpg'
</script>

<template>
  <main class="page">
    <section class="hero">
      <Hero :image="heroTratFotografico" alt="Tratamiento fotográfico" />
    </section>
    <div class="page-content">
    <section class="subtitulo">
      <h1>EL TRATAMIENTO FOTOGRÁFICO DE BANDCAMP SERÁ LEVE, USADO PARA MEJORAR LA LEGIBILIDAD</h1>
    </section>
    <section class="fotografias">
      <h2>FOTOGRAFÍAS</h2>
      <div class="textos">
        <div class="column1">
          <p>El tratamiento de imagen pasa algo desapercibido. Aunque en las imágenes que suban los propios artistas no les cambiaremos nada para permitir todo deseo creativo, en las imágenes que compartamos nosotros (como lo que subamos a redes o la web) se realizarán ciertos ajustes.</p>
          <h4> Estos cambios, aunque leves, ayudan a dar consistencia a nuestra marca.</h4>
        </div>
        <div class="column2">
          <img class="lineaVertical" :src="lineaVertical">
          <h3>Se oscurecerán para mejorar la legibilidad, añadiendo un cuadro semitransparente. Ademas se añade un leve filtro de uno de nuestros colores acento y un granulado para aportar una textura más manual, reflejando así nuestros valores.</h3>
        </div>
      </div>
      <img class="antesDespues" :src="antesDespues">
    </section>
    <img class="separacion" :src="separacion">
    </div>
    <section class="ejemplos">
      <h2 class="textoEjemplos">EJEMPLOS</h2>
      <div class="principal">
        <img class="naranja" :src="naranja">
      </div>
      <div class="otros">
        <img class="azul" :src="azul">
        <img class="verde" :src="verde">
        <img class="negro" :src="negro">
      </div>
    </section>
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
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3rem;
}

.subtitulo {
  padding-top: 3rem;
}

h1 {
  font-size: 3rem;
  font-family:'Ramona';
  font-weight: 300;
  width: 85%;
}

h2 {
  font-family: 'Ramona';
  margin: 0;
}

.textos {
  display: grid;
  grid-template-columns: (1fr 1fr);
  gap: 2rem;
}
.column1 {
  width: 75%;
}

h4 {
  font-family: 'Urbanist';
  font-size: 1rem;
  width: 80%;
  margin-bottom: 1rem;
  margin-top: 0;
}

.column2 {
  display: flex;
  gap: 1rem;
  width: 75%;
}

.lineaVertical {
  height: 9rem;
}

h3 {
  margin-top: 0;
  font-size: 1.3rem;
}

.antesDespues {
  padding-top: 2rem;
  width: 100%;
}
.separacion {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
}

.ejemplos {
  box-sizing: border-box;
  width: min(100%, 86rem);
  margin: 0 auto;
}

.textoEjemplos {
  padding-left: 3rem;
  padding-bottom: 3rem;
}
.naranja {
  width: 100%;
  padding-left: 2rem;
}

.otros {
  display: grid;
  grid-template-columns: (1fr 1fr 1fr);
  padding-top: 3rem;
  width: 85%;
  padding-left: 7rem;
  padding-bottom: 5rem;
  gap: 1rem;

}
.azul {
  width: 100%;
  height: 100%;
}

.verde {
  width: 100%;
  height: 100%;
}
.negro {
  width: 100%;
  height: 100%;
}


</style>
