<template>
  <Screen>
    <div class="instructions">
      <h2>{{ pages[page].title }}</h2>

      <div v-html="pages[page].text"></div>

      <div class="button-container">
        <button v-if="page > 0" @click="previousPage">
          Zurück
        </button>

        <button
          v-if="page < pages.length - 1"
          @click="pageForward"
        >
          Weiter
        </button>

        <button
          v-else
          @click="pageForward"
        >
          Weiter
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
          title: "Spielablauf",
          text: `
            <p>
              Ein letzter Hinweis: <strong>Das Spiel ist in zwei Teile aufgeteilt</strong>.
            </p>

            <p>
              In beiden Teilen <strong>übernimmst du stets die Höhrerrolle</strong>. Deine Aufgabe ändert sich jedoch leicht.
            </p>

            <p>
              <strong>Teil 1</strong><br>
              <strong>Das verdeckte Feld ist nicht markiert</strong>. Nach jedem Block bestehend aus fünf Gittern <strong>musst du erschließen, welches Feld für Leo verdeckt ist</strong>.
            </p>

            <p>
              <strong>Teil 2</strong><br>
              <strong>Das verdeckte Feld ist in jedem Gitter grau gefärbt</strong>. Da du bereits weißt, welches Feld Leo nicht sehen kann, <strong>musst du dieses nicht mehr identifizieren</strong>. Stattdessen musst du nur noch das Objekt auswählen, das Leo beschreibt.
            </p>

            <p>
              Unten siehst du deine Spielansicht während des ersten Teils (links) und während des zweiten Teils (rechts).
            </p>

            <img
              src="main/instructions/instructions_02.png"
              alt="Example view first and second part"
              class="example-image"
            />
          `
        },

        {
          title: "Mach dich bereit!",
          text: `
            <p>
              Du bist nun startklar für das Spiel.
            </p>

            <p>
              Am Ende des Spiels <strong>wirst du gebeten, einen kurzen Fragebogen auszufüllen</strong>.
            </p>

            <p>
              <strong>Viel Erfolg und viel Spaß!</strong>
            </p>
          `
        }
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


.example-image {
  display: block;
  margin: 24px auto;
  max-width: 650px;
  width: 100%;
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


</style>