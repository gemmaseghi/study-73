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
          Start
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
          title: "Willkommen zum zweiten Experiment!",
          text: `
            <p>
              Du erhälst zwei Kartendecks, die jeweils 64 Karten enthalten. Die Karten werden Dir nacheinander zugeteilt. 
            </p>

            <p>
              Du musst jede Karte in eine der vier unten gezeigten Kartenkategorien einordnen, indem Du die entsprechende Kartenkategorie mit Deiner Maus anklickst.
            </p>

            <p>
              Wenn Du die Karte richtig eingeordnet hast, erscheint das Wort "richtig" auf dem Bildschirm. Wenn Du aber einen Fehler gemacht hast, erscheint das Wort "falsch".
            </p>

            <p>
              Das Ziel ist es, so viele Karten wie möglich richtig einzuordnen. 
            </p>
            
            <p>
            Unten siehst Du ein Beispiel mit der zu sortierenden Karte oben und den vier Kartenkategorien darunter.
            </p>

            <div class="instruction-image">
              <img
                src="wcst/instructions/base.png"
                alt="Example of the card sorting task"
              />
            </div>

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


.instruction-image {
  width: 100%;
  margin: 24px auto;
  text-align: center;
}

.instruction-image img {
  display: block;
  width: 650px !important;
  max-width: 100% !important;
  height: auto !important;
  margin: 0 auto;
}

</style>