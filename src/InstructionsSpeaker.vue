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
              You will receive <strong>£3.60</strong> for your participation. Please note that compensation can only be provided if you complete the study. If you experience any technical issues, please contact us via Prolific.
            </p>

            <p>
              By continuing to the next screen, you confirm that you have read this information and agree to participate in the study.
            </p>
          `
        },
        {
          title: "Welcome!",
          text: `
            <p>
              In this experiment, you will play a coordination game with a virtual speaker named <strong>Sam</strong>.
            </p>

            <p>
              The game has two roles: <strong>Speaker</strong> and <strong>Listener</strong>.
            </p>

            <p>
              During the real experiment, <strong>Sam will always be the speaker</strong> and <strong>you will always be the listener</strong>.
            </p>

            <p>
              <strong>Before the real game starts, however, you will briefly experience both roles</strong> so that you can understand how the game works.
            </p>

          `
        },

        {
          title: "Speaker Task",
          text: `
            <p>
              Let's start with the speaker's role.

              <strong>Your task as the speaker is to describe the object marked with an asterisk (*) so that the listener can identify it</strong>.

              The listener does <strong>not</strong> see the asterisk.
            </p>

            <p>
              You <strong>are not allowed to use location words</strong>, such as "top left" or "bottom right", in your descriptions.
            </p>

            <p>
              Here is an example of what you will see:
            </p>

            <div class="instruction-figure">
              <img
                src="instructions/instructions_speaker.png"
                alt="Example speaker view"
                class="example-image"
              />

              <p>
                A possible description in this case could be: <strong>The t-shirt</strong>.
              </p>
            </div>
          `
        },

        {
          title: "Speaker Practice",
          text: `
            <p>
              Now it is your turn to play the speaker!
            </p>

            <p>
              For each grid, <strong>write a description of the object marked with an 
              asterisk (*)</strong>. The listener will use your description
              to identify the object.
            </p>

            <p>
              Then, write a brief explanation of why you chose that description.
            </p>

            <p>
              You will describe <strong>three objects</strong> as practice.
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