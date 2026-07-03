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
          title: "Game Structure",
          text: `
            <p>
              One final detail: <strong>the experiment is divided into two parts</strong>.
            </p>

            <p>
              Throughout both parts, <strong>you will always play the listener</strong>. However, your task changes slightly.
            </p>

            <p>
              <strong>Part 1</strong><br>
              <strong>The hidden cell is not shown</strong>. After every block of five grids, <strong>you must infer which cell is hidden from Sam</strong>.
            </p>

            <p>
              <strong>Part 2</strong><br>
              <strong>The hidden cell is shown in grey</strong> in every grid. Since you already know which cell Sam cannot see, <strong>you will no longer be asked to identify it</strong>. Instead, you only need to select the object that Sam is referring to.
            </p>

            <p>
              Below, you can see your view during the first part (left) and during the second part (right).
            </p>

            <img
              src="instructions/instructions_02.png"
              alt="Example view first and second part"
              class="example-image"
            />
          `
        },

        {
          title: "Get Ready to Play",
          text: `
            <p>
              You are now ready to begin the experiment.
            </p>

            <p>
              At the end of the experiment, <strong>you will be asked to complete a short questionnaire</strong>.
            </p>

            <p>
              <strong>Good luck, and have fun!</strong>
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