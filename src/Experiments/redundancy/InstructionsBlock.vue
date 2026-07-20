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
          title: "Welcome to the First Experiment!",
          text: `
            <p>
              The first experiment is a task that we are administering to a group of children. We also need adults to complete the task as a control group. Because the task is the same for both children and adults, it is normal if you find it very easy.
            </p>

            <p>
              In this experiment, you will play a communication game with another participant.
            </p>

            <p>
              Your goal is to describe objects so that the other participant can correctly identify them.
            </p>

            <p>
              Click <strong>Continue</strong> to learn how the game works.
            </p>

          `
        },

        {
          title: "The Game",
          text: `

            <p>
              On the <strong>left side</strong> of the screen, you will see a <strong>grey scene with three coloured stickers</strong> placed on it. The other participant sees the same grey scene, but <strong>does not see the stickers</strong>.
            </p>
          
            <p>
              On each trial, <strong>one sticker will be indicated by a red arrow</strong>. This is the sticker you need to describe.
            </p>

            <p>
              On the <strong>right side</strong> of the screen, you will see a <strong>grid containing four objects</strong>. The other participant sees the same grid. One of these objects corresponds to the sticker currently indicated by the red arrow.
            </p>

            <p>
              Your task is to <strong>describe the indicated sticker</strong> so that the other participant can identify the correct object in the grid and add it to the grey scene.
            </p>

            <p>
              You <strong>do not need to describe where the sticker belongs in the scene</strong>. Simply provide a description that identifies the correct object among the four objects in the grid.
            </p>

            <p>
              You will complete <strong>8 scenes</strong> in total. Below you can see an example of a grey scene with three stickers (on the left) and the corresponding grid of objects (on the right).
            </p>

            <div class="instruction-images">
              <div class="instruction-image">
                <p><strong>The scene</strong></p>
                <img
                  src="redundancy/instructions/example.png"
                  alt="Grey scene with three coloured stickers and a red arrow pointing to one of them."
                />
              </div>

              <div class="instruction-image">
                <p><strong>The grid</strong></p>
                <img
                  src="redundancy/instructions/example_grid.png"
                  alt="Grid containing the sticker indicated by the red arrow and three other objects."
                />
              </div>
            </div>

            <p>
              Click <strong>Continue</strong> to start the game.
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

.instruction-images {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
  margin: 24px auto;
}

.instruction-image {
  flex: 1;
  min-width: 0;
  text-align: center;
}

.instruction-image img {
  display: block;
  width: 100%;
  height: 350px;
  object-fit: contain;
}
</style>