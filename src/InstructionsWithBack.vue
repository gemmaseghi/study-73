<template>
  <Screen>
    <div v-if="step === 'failed'" class="instructions">
      <h2>Study stopped</h2>

      <p>
        Unfortunately, it appears that the task instructions have not been understood.
      </p>

      <p>
        Please return your submission by closing this study and clicking
        <strong>Stop Without Completing</strong> on Prolific.
      </p>
    </div>

    <div v-else class="instructions">
      <h2>{{ pages[page].title }}</h2>

      <div v-html="pages[page].text"></div>

      <div v-if="pages[page].check" class="comprehension-check">
        <p class="check-question">
          <strong>{{ pages[page].check.question }}</strong>
        </p>

        <label
          v-for="(option, index) in pages[page].check.options"
          :key="index"
          class="check-option"
        >
          <input
            type="radio"
            :name="`check-${page}`"
            :value="index"
            v-model="selectedAnswer"
            @change="handleCheckAnswer"
          />
          {{ option }}
        </label>

        <p v-if="checkError" class="check-error">
          That answer is not correct. Please reread the instructions above and try again.
        </p>
      </div>

      <div class="button-container">
        <button v-if="page > 0" @click="previousPage">
          Back
        </button>

        <button
          v-if="page < pages.length - 1 && canGoNext"
          @click="pageForward"
        >
          Next
        </button>

        <button
          v-else-if="page === pages.length - 1 && canGoNext"
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
      step: "instructions",
      selectedAnswer: null,
      checkPassed: false,
      checkError: false,
      failedComprehension: false,
      checkAttempts: {},
      pages: [
        {
          title: "Consent Form",
          text: `
            <p>
              Thank you for your interest in our study. Please read the following information before deciding whether to participate. Your participation is entirely voluntary.
            </p>

            <p>
              Your data will be stored under a randomly assigned participant ID and will therefore be fully anonymized. The data will be stored on a server at the University of Tübingen.
            </p>

            <p>
              All individuals with access to the data are required to maintain confidentiality. If the results of this study are published, they will be reported only in anonymized form, and it will not be possible to identify you from the published data.
            </p>

            <p>
              You will receive £2.40 for your participation. Please note that compensation can only be provided if you complete the study. If you experience any technical issues, please contact us via Prolific.
            </p>

            <p>
              By continuing to the next screen, you confirm that you have read this information and agree to participate in the study.
            </p>
          `
        },
        {
          title: "Welcome",
          text: `
            <p>
              Welcome to the experiment! You will first read a set of instructions. It is important that you read them carefully. The instructions are divided into five screens. Please move to the next screen to read the first part.
            </p>
            `
        },
        {
          title: "Instructions",
          text: `
            <p>
              In this experiment, you will play a coordination game with a virtual speaker named <strong>Sam</strong>.

              Sam will choose one object among the four contained in a grid and describe it.
            </p>

            <p>
              <strong>Sam's description will appear above the grid</strong>. You will only see the description in written form, you won't hear it spoken aloud.
            </p>

            <p>For example:</p>

            <div class="instruction-figure">
              <p class="image-caption">
                The turtle
              </p>

              <img
                src="instructions/instruction_01.png"
                class="instruction-image"
              />
            </div>

            <p>
              <strong>Your task will be to select the object described by Sam by clicking on it</strong>. 
            </p>
          `,
          check: {
            question: "Based on the instructions you have just read, how many objects are contained in each grid? Please re-read the study instructions above if you are not sure. You will have two opportunities to get this question correct.",
            options: ["One", "Two", "Three", "Four"],
            correct: 3
          }
        },
        {
          title: "Instructions",
          text: `
            <p>
              But Sam has a <strong>blind spot</strong>! You will always see four objects, but Sam only sees three. This is because <strong>one of Sam's cells is hidden by an occluder</strong>. But <strong>Sam doesn't know that he has a blindspot</strong>. He thinks that you see the same three objects and not the fourth one.
            </p>

            <p>
              Apart from the hidden object, your grid and Sam's one contain the same objects. However, the position of the visible objects is shuffled across them, so Sam cannot use location words (e.g., "top left" or "bottom right") to refer to an object.
            </p>

            <p>
              On Sam's screen, one of the visible objects is marked with an asterisk (*). His task is to describe that object.
            </p>

            <p>Sam's view is on the left and your view is on the right:</p>

            <img
              src="instructions/example_view.png"
              class="example-image"
            />
          `,
          check: {
            question: "Based on the instructions you have just read, how many objects does Sam see in the grid? Please re-read the study instructions above if you are not sure. You will have two opportunities to get this question correct.",
            options: ["One", "Two", "Three", "Four"],
            correct: 2
          }
        },
        {
          title: "Instructions",
          text: `

            <p>
              The <strong>game</strong> will be divided into <strong>two parts</strong>.
            </p>

            <p>
              <strong>First part</strong>: you <strong>will not be told which cell is hidden from Sam</strong>. Instead, <strong>you will be asked to infer it</strong> based on Sam's descriptions. 
            </p>

            <p>
              <strong>Second part</strong>: you <strong>will be told which cell is hidden from Sam</strong>. In each grid, <strong>the cell hidden from Sam will be marked in grey</strong>. In the second part of the game you will therefore <strong>no longer be asked to identify the hidden cell</strong>. 
            </p>
 
            <p>Your view of the grid in the first part of the experiment is on the left, while your view in the second part of the experiment in on the right:</p>

            <img
              src="instructions/instructions_02.png"
              class="example-image"
            />
          `,
          check: {
            question: "Based on the instructions you have just read, during the first part of the experiment, what happens after you have selected an object in all five grids? Please re-read the study instructions above if you are not sure. You will have two opportunities to get this question correct.",
            options: ["The next block begins immediately.", "You are asked to identify which cell Sam cannot see.", "You are shown Sam's screen.", "The experiment ends."],
            correct: 1
          }
        },
        {
          title: "Instructions",
          text: `
            <p>
              During the experiment, each block will contain <strong>five grids</strong>. At the beginning of each block, <strong>one large grid will be shown in the centre of the page</strong>. This is the only grid in which you need to select an object.
            </p>

            <p>
              Read the description above the large grid and click on the object that you think Sam is referring to. <strong>In some cases, it might seem that you don't have enough information to identify a single object with certainty</strong>. When this happens, try to identify the most likely referent based on the information available to you. 
            </p>

            <p>
              <strong>After each selection, the completed grid will move to the top of the screen, where it will appear smaller and your selection will remain marked with a black dot.</strong> At the same time, the next grid will immediately appear in the large display in the centre of the page. <strong>The grids shown at the top are only there as a record of your previous selections, you do not need to click on them again.</strong>
            </p>
          `,
          check: {
            question: "Based on the instructions you have just read, after you select an object in a grid, what happens to the completed grid? Please re-read the study instructions above if you are not sure. You will have two opportunities to get this question correct.",
            options: ["It disappears.", "It stays in the centre until all five grids are completed.", "It moves to the top of the screen and remains there as a record of your selection.", "It is replaced by Sam's version of the grid."],
            correct: 2
          }
        },
        {
          title: "Instructions",
          text: `
            <p>
              <strong>During the first part of the experiment</strong>, once you have selected an object in all five grids, <strong>the large grid will be replaced by an empty grid</strong>. Your task is to select the cell that you think is hidden from Sam, based on the descriptions he gave throughout the block. Within each block, the hidden cell always remains in the same position. Across blocks, however, it changes position, so you will need to infer it again for each new block.
            </p>
            <p>
              <strong>Please pay close attention when selecting the hidden cell. Because there are only four possible cells, making more than three incorrect hidden-cell selections is unlikely to occur by chance and may indicate insufficient attention to the task</strong>.
            </p>
            <p>
              <strong>During the second part of the experiment</strong>, one cell in every grid will be marked in <strong>grey</strong>. The grey cell is the cell that Sam cannot see. Continue selecting the object that you think Sam is referring to, using the grey cell to guide your decision. After you have completed all five grids, <strong>the large grid will be replaced by a square with "Next" written inside it</strong>. Click on it to proceed to the next screen. Since the hidden cell is now shown to you, you will no longer be asked to identify it.
            </p>

            <p>
              At the end of the experiment, you will be asked to complete a short questionnaire.
            </p>
          `,
          check: {
            question: "Based on the instructions you have just read, during the second part of the experiment, how do you know which cell Sam cannot see? Please re-read the study instructions above if you are not sure. You will have two opportunities to get this question correct.",
            options: ["The hidden cell is shown in grey.", "Sam tells you in the text description.", "You infer it from Sam's descriptions.", "It is marked with an asterisk."],
            correct: 0
          }
        }
      ]
    };
  },

  methods: {
    currentCheck() {
      return this.pages[this.page].check;
    },

    resetCheckState() {
      this.selectedAnswer = null;
      this.checkPassed = false;
      this.checkError = false;
    },

    previousPage() {
      this.page -= 1;
      this.resetCheckState();
    },

    handleCheckAnswer() {
      const check = this.currentCheck();

      if (!check) {
        return;
      }

      if (Number(this.selectedAnswer) === check.correct) {
        this.checkPassed = true;
        this.checkError = false;
        return;
      }

      const attemptsSoFar = this.checkAttempts[this.page] || 0;
      const newAttempts = attemptsSoFar + 1;
      this.$set(this.checkAttempts, this.page, newAttempts);

      this.checkPassed = false;

      if (newAttempts >= 2) {
        this.step = "failed";
        return;
      }

      this.checkError = true;
      this.selectedAnswer = null;
    },

    pageForward() {
      if (this.page < this.pages.length - 1) {
        this.page += 1;
        this.resetCheckState();
      } else {
        this.$magpie.nextScreen();
      }
    }
  },

  computed: {
    canGoNext() {
      const check = this.pages[this.page].check;
      return !check || this.checkPassed;
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

.comprehension-check {
  margin-top: 24px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: left;
}

.check-question {
  margin-top: 0;
}

.check-option {
  display: block;
  font-size: 18px;
  line-height: 1.5;
  margin: 8px 0;
}

.check-error {
  color: #a00000;
  font-weight: bold;
  margin-top: 12px;
}
</style>