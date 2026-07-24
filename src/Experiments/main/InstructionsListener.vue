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
          title: "Höhrerrolle",
          text: `
            <p>
              Kommen wir nun zur Höhrerrolle!
              <strong>Deine Aufgabe in der Höhrerrolle ist es, auf das Objekt zu klicken, das Leo deiner Meinung nach beschreibt</strong>.
            </p>

            <p>
              Dieses Mal wirst du das Sternchen <strong>nicht</strong> sehen.
            </p>

            <p>
              Hier ist ein Beispiel dafür, was du sehen wirst:
            </p>

            <div class="instruction-figure">
              <p class="image-caption">
                Der Löwe
              </p>

              <img
                src="main/instructions/instructions_listener.png"
                alt="Example listener view"
                class="example-image"
              />
            </div>
          `
        },

        {
          title: "Übung Höhrerrolle",
          text: `
            <p>
              Jetzt schlüpfst du in die Höhrerrolle! <strong>Klicke auf das Objekt, auf das sich Leo deiner Meinung nach bezieht</strong>.
            </p>

            <p>
              Schreibe dann kurz auf, warum Leo deiner Meinung nach diese Beschreibung gewählt hat.
            </p>

            <p>
              Du wirst zur Übung <strong>drei Objekte</strong> auswählen.
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
  max-width: 600px;
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

.instructions .instruction-figure .image-caption {
  font-size: 22px !important;
  line-height: 1.3;
  font-weight: 600;
  text-align: center;
  margin: 0 0 12px 0;
}

.instruction-image {
  display: block;
  margin: 0 auto;
  max-width: 300px;
  width: auto;
  height: auto;
}


</style>