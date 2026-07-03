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
          title: "Listener Task",
          text: `
            <p>
              Now let's move to the listener's role!
              <strong>Your task as the listener is to click on the object that you think the speaker is referring to with their description</strong>.
            </p>

            <p>
              This time, you will <strong>not</strong> see the asterisk.
            </p>

            <p>
              Here is an example of what you will see:
            </p>

            <div class="instruction-figure">
              <p class="image-caption">
                The lion
              </p>

              <img
                src="instructions/instructions_listener.png"
                alt="Example listener view"
                class="example-image"
              />
            </div>
          `
        },

        {
          title: "Listener Practice",
          text: `
            <p>
              Now it is your turn to play the listener! <strong>Click on the object that you think the speaker is referring to</strong>.
            </p>

            <p>
              Then, write a brief explanation of why you think the speaker chose that description.
            </p>

            <p>
              You will select <strong>three objects</strong> as practice.
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