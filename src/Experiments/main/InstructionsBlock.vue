<template>
  <Screen>
    <div class="instructions">
      <h2>{{ pages[page].title }}</h2>

      <div v-html="pages[page].text"></div>

      <div class="button-container">
        <button v-if="page > 0" @click="previousPage">
          Back
        </button>

        <button
          v-if="page < pages.length - 1"
          @click="pageForward"
        >
          Next
        </button>

        <button
          v-else
          @click="pageForward"
        >
          Continue
        </button>
      </div>
    </div>
  </Screen>
</template>

<script>
export default {
  name: "InstructionsWithBack",
  data() {
    return {
      page: 0,
      pages: [
        {
          title: "Das Spiel",
          text: `
            <p>
              Im eigentlichen Spiel übernimmt Leo immer die Sprecherrolle und du übernimmst immer die Höhrerrolle.
              
              Allerdings <strong>hat das Spiel eine Besonderheit: Aus Leos Perspektive gibt es ein verdecktes Feld!</strong> 
            </p>

            <p>
              <strong>Aus Leos Perspektive ist eines der Objekte in jedem Gitter durch ein Hindernis verdeckt</strong>. Daher <strong>sieht Leo in jedem Gitter nur drei Objekte</strong> und das vierte Feld ist grau markiert. 
              
              Dieses graue Feld stellt somit das Feld dar, das Leo nicht sieht.
            </p>

            <p>
              Hier ist ein Beispiel dafür, was Leo sieht (links) und was du siehst (rechts):
            </p>

            <div class="instruction-figure">
              <img
                src="instructions/example_view.png"
                alt="Example of speaker and listener views"
                class="example-image"
              />
            </div>

            <p>
              Allerdings <strong>weiß Leo nicht, dass er eins der Felder nicht sieht</strong>. Er denkt, dass du auch nur drei Objekte siehst.
              
              Abgesehen von dem Objekt, das für Leo nicht sichtbar ist, sehen du und Leo dieselben Objekte.
            </p>

            <p>
              Deswegen ist deine Aufgabe nicht nur, anhand von Leos Beschreibung auf das entsprechende Objekt zu klicken, sondern auch <strong>herauszufinden, welches Feld für Leo nicht sichtbar ist</strong>.
            </p>

          `
        },

        {
          title: "Übung Höhrerrolle",
          text: `

            <p>
              <strong>Die Gitter mit den Objekten werden in Fünferblöcken gezeigt</strong>. <strong>Innerhalb jedes Blocks bleibt das für Leo verdeckte Feld immer an derselben Position. Von Block zu Block wechselt es jedoch die Position.</strong>
            </p>
          
            <p>
              <strong>Du musst das gesuchte Objekt nur im großen Gitter in der Mitte des Bildschirms auswählen</strong>. 
              
              Nach jeder Auswahl wandert das bearbeitete Gitter an den oberen Bildschirmrand, wobei das von dir ausgewählte Objekt mit einem schwarzen Punkt markiert wird. 
            </p>

            <p>
              Nach dem fünften Gitter <strong>wirst du dazu aufgefordert, in einem leeren Gitter das Feld auszuwählen, von dem du glaubst, dass es für Leo verdeckt ist</strong>.
            </p>

            <p>
              Hier ist ein Beispiel dafür, was du am Endes eines Fünferblocks sehen wirst:
            </p>

            <div class="instruction-figure">
              <img
                src="instructions/example_view_block.png"
                alt="Example of completed block view"
                class="example-image-large"
              />
            </div>

            <p>
              Du wirst nun eine kurze Übungsrunde absolvieren.
            </p>

          `
        },
      ]
    };
  },

  methods: {

    previousPage() {
      this.page--;
    },

    pageForward() {
      if (this.page < this.pages.length - 1) {
        this.page++;
      } else {
        this.$magpie.nextScreen();
      }
    }
  },
};
</script>

<style>
.instructions {
  width: 700px;
  max-width: 95vw;
  margin: 0 auto;
  text-align: justify;
}

.instructions h2 {
  text-align: center;
}

.instructions p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 12px;
}


.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.button-container button {
  width: auto;
  margin: 0 5px;
}

.instruction-figure {
  text-align: center;
  margin: 8px 0;
}

.image-caption {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.instruction-image {
  display: block;
  margin: 0 auto;
  max-width: 300px;
  width: auto;
  height: auto;
}

.example-image {
  display: block;
  margin: 24px auto;
  max-width: 650px;
  width: auto;
  height: auto;
}

.example-image-large {
  display: block;
  margin: 24px auto;
  max-width: 750px;  
  width: 85%;
  height: auto;
}

</style>