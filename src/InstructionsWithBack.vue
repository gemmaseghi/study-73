<template>
  <Screen>
    <div class="instructions">
      <h2>{{ pages[page].title }}</h2>

      <div v-html="pages[page].text"></div>

      <div class="button-container">
        <button v-if="page > 0" @click="page--">
          Back
        </button>

        <button v-if="page < pages.length - 1" @click="page++">
          Next
        </button>

        <button v-else @click="$magpie.nextScreen()">
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
          title: "Welcome",
          text: `Welcome to the experiment! You will first read a set of instructions. The instructions are divided into four parts. Please move to the next screen to read the first part.`
        },
        {
          title: "Instructions",
          text: `In this experiment, you will play a game with another participant. You will play the role of the listener, while the other participant will play the role of the speaker.
          <br><br>
          On each trial, you will see a grid containing four objects and a description above it. The description is produced by the speaker to indicate one of the objects in the grid. You will only be presented the speaker's description in written form, you won't hear it spoken aloud.`
        },
        {
          title: "Instructions",
          text: `The speaker sees a slightly different version of the grid. Their grid contains only three objects because one cell is hidden by an occluder. The location of the hidden cell remains the same throughout the experiment.
          <br><br>
          Apart from the hidden object, both grids contain the same objects. However, the position of the visible objects is shuffled across the two grids, so the speaker cannot use location words (e.g., "top left" or "bottom right") to refer to an object.`
        },
        {
          title: "Instructions",
          text: `On the speaker's screen, one of the visible objects is marked with an asterisk (*). The speaker's task is to describe that object. Your task is to use the description, which will appear above the grid, to determine which object the speaker intended to refer to and select it.
          <br><br>
          In some cases, you might not have enough information to identify a single object. When this happens, please select only the object that you think is the most likely candidate based on the information you have.`
        },
        {
          title: "Instructions",
          text: `Occasionally, you will be asked whether you think you have enough information to determine which cell is hidden from the speaker. If you believe you have enough information, you will be asked to select the hidden cell in an empty grid.
          <br><br>
          If you correctly identify the hidden cell, that cell will be marked in grey for the remainder of the experiment, so you can use that information to guide your selections in the remaining trials. Continue selecting the object you think the speaker is referring to until the end of the experiment.
          <br><br>
          At the end of the experiment, you will be asked to complete a short questionnaire.`
        },
        {
          title: "Example",
          text: `<img src="instructions/example_view.png" style="width: 800px; max-width: 100%;" />
          <p>
            Example of the speaker's view (left) and your view (right).
            The grey cell indicates the object that is hidden from the speaker.
            The asterisk (*) marks the object that the speaker has to describe.
          </p>
          <p>
            During the experiment, you will only see the right view. The speaker's view is shown here only to illustrate how the game works.
            Your task is to click on the object that you think the speaker is referring to and to infer which cell is hidden from them.
          </p>`
        }
      ]
    };
  }
};
</script>

<style scoped>
.instructions {
  width: 600px;
  margin: 0 auto;
  text-align: justify;
}

.instructions h2 {
  text-align: center;
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
</style>