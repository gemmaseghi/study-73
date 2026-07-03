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
          title: "The Game",
          text: `
            <p>
              In the real game, Sam will always be the speaker, and you will always be the listener.
              
              However, <strong>the real game has a twist: Sam has a blindspot!</strong> 
            </p>

            <p>
              <strong>In Sam's view, one of the objects in each grid will be hidden by an occluder</strong>. As a result, <strong>Sam will only see three objects in each grid</strong>, and the fourth grid will be marked in grey. 
              
              The grey cell thus represents Sam's blindspot.
            </p>

            <p>
              Here is an example of what Sam sees (on the left) and what you see (on the right):
            </p>

            <div class="instruction-figure">
              <img
                src="instructions/example_view.png"
                alt="Example of speaker and listener views"
                class="example-image"
              />
            </div>

            <p>
              However, <strong>Sam doesn't know that he has a blindspot</strong>. He thinks that you see only three objects as well.
              
              Apart from the object hidden to Sam, you and Sam will see the same objects.
            </p>

            <p>
              As a result, in addition to clicking on the intended object based on Sam's description, <strong>you will also be asked to infer which cell is hidden from Sam</strong>.
            </p>

          `
        },

        {
          title: "Listener Block Practice",
          text: `

            <p>
              <strong>The grids of objects will be presented in blocks of five</strong>. <strong>Within each block, Sam's blindspot always stays in the same position. Across blocks, however, it changes position.</strong>
            </p>
          
            <p>
              <strong>Select the intended object only in the big grid in the middle of the screen</strong>. 
              
              After each selection, the completed grid will move to the top of the screen with your chosen object marked by a black dot. 
            </p>

            <p>
              <strong>The previous grids remain visible so that they can help you identify Sam's blindspot</strong>.
              
              After the fifth grid, <strong>you will be asked to select the cell that you think is hidden from Sam in an empty grid</strong>.
            </p>

            <p>
              Here is an example of what you will see at the end of a block of five grids:
            </p>

            <div class="instruction-figure">
              <img
                src="instructions/example_view_block.png"
                alt="Example of completed block view"
                class="example-image-large"
              />
            </div>

            <p>
              Click "Continue" to practice one block as the listener.
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