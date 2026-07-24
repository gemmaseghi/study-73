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
          title: "Welcome to the fourth experiment!",
          text: `
            <p>
              In this task you will see color names (red, green, lila and orange) in different "print" colors. You need to respond to the print color.
            </p>

            <p>
              For example, if you see: 
            </p>

            <div class="instruction-image">
              <img
                class="example-image"
                src="stroop/stimuli/l_g.png"
                alt="lila written in green"
              />
            </div>

            <p>
              You need to respond to the print color (green), and press the associated button ("g"). The other buttons used in this study are "r", "l", and "o", for red, lila and orange.
            </p>

            <p>
              Click "Next" to go to the second part of the instructions.
            </p>

          `
        },

        {
          title: "Instructions",
          text: `

            <div class="instruction-image">
              <img
                class="mapping-image"
                src="stroop/instructions/intro.png"
                alt="color-keys mapping"
              />
            </div>

            <p>
              It can be difficult, because the name and the ink color are conflicting (except for orange in the example above). So concentrate and ignore the meaning of the color words, instead, look at the ink color.
            </p>

            <p>
              Click "Start" to begin the experiment. 
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

.example-image {
  width: 220px;
  height: auto;
}

.mapping-image {
  width: 650px;
  max-width: 100%;
  height: auto;
}

</style>