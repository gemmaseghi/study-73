<template>
  <Screen>
    <div v-if="step === 'intro'" class="practice-instructions">
      <h2>Practice</h2>
      <p>
        You will now complete a short practice round to understand how the task works. Please select the object that you think the speaker is referring to and try to infer which cell is hidden from the speaker. 
        
        <br><br>

        If you don't infer the cell correctly, you will have to repeat the practice round until you find the correct answer. 
      </p>
      <button @click="startPractice">Start practice</button>
    </div>

    <div v-if="step === 'trial'">
      <h2 class="utterance">{{ currentTrial.utterance }}</h2>

      <div class="grid-wrapper">
        <img :src="currentTrial.image" class="stimulus" />

        <button class="cell top-left" @click="selectObject('topLeft')" />
        <button class="cell top-right" @click="selectObject('topRight')" />
        <button class="cell bottom-left" @click="selectObject('bottomLeft')" />
        <button class="cell bottom-right" @click="selectObject('bottomRight')" />
      </div>
    </div>

    <div v-if="step === 'blindspot'" class="practice-instructions">
      <h2>Select the hidden cell</h2>
      <p>
        Please select the cell that you think is hidden from the speaker.
      </p>

      <div class="grid-wrapper">
        <img :src="emptyGridImage" class="stimulus" />

        <button class="cell top-left" @click="selectBlindSpot('topLeft')" />
        <button class="cell top-right" @click="selectBlindSpot('topRight')" />
        <button class="cell bottom-left" @click="selectBlindSpot('bottomLeft')" />
        <button class="cell bottom-right" @click="selectBlindSpot('bottomRight')" />
      </div>
    </div>

    <div v-if="step === 'error'" class="practice-instructions">
      <h2>Try again</h2>
      <p>
        You did not identify the hidden cell correctly. Please try again the practice trials.
      </p>
      <button @click="restartPractice">Repeat practice</button>
    </div>

    <div v-if="step === 'revealed'">
      <h2 class="utterance">{{ revealedTrial.utterance }}</h2>

      <div class="grid-wrapper">
        <img :src="revealedTrial.image" class="stimulus" />

        <button class="cell top-left" @click="selectRevealedTrial('topLeft')" />
        <button class="cell top-right" @click="selectRevealedTrial('topRight')" />
        <button class="cell bottom-left" @click="selectRevealedTrial('bottomLeft')" />
        <button class="cell bottom-right" @click="selectRevealedTrial('bottomRight')" />
      </div>
    </div>

    <div v-if="step === 'done'" class="practice-instructions">
      <h2>End of practice</h2>
      <p>
        The practice round is now complete. The real experiment will begin on the next screen.
      </p>
      <button @click="$magpie.nextScreen()">Continue</button>
    </div>
  </Screen>
</template>

<script>
export default {
  name: "PracticeBlock",
  props: {
    practiceTrials: Array,
    correctBlindSpot: String,
    emptyGridImage: {
      type: String,
      default: "stimuli/empty_grid.png"
    }
  },
  data() {
    return {
      step: "intro",
      trialIndex: 0,
      practiceRound: 1
    };
  },
  computed: {
    currentTrial() {
      return this.practiceTrials[this.trialIndex];
    },
    revealedTrial() {
      return this.practiceTrials[3];
    }
  },
  methods: {
    startPractice() {
      this.trialIndex = 0;
      this.step = "trial";
    },

    restartPractice() {
      this.practiceRound += 1;
      this.trialIndex = 0;
      this.step = "trial";
    },

    selectObject(cell) {
      const correctAnswers = Array.isArray(this.currentTrial.correctAnswer)
        ? this.currentTrial.correctAnswer
        : [this.currentTrial.correctAnswer];

      const isCorrect = correctAnswers.includes(cell);

      this.$magpie.addTrialData({
        trial_type: "practice_object_trial",
        practice_round: this.practiceRound,
        trial_id: this.currentTrial.id,
        utterance: this.currentTrial.utterance,
        image: this.currentTrial.image,
        response: cell,
        correct_answer: correctAnswers.join(","),
        correct: isCorrect
      });

      if (this.trialIndex < 2) {
        this.trialIndex += 1;
        this.step = "trial";
      } else {
        this.step = "blindspot";
      }
    },

    selectBlindSpot(cell) {
      const isCorrect = cell === this.correctBlindSpot;

      this.$magpie.addTrialData({
        trial_type: "practice_blindspot",
        practice_round: this.practiceRound,
        blindspot_response: cell,
        correct_blindspot: this.correctBlindSpot,
        correct: isCorrect
      });

      if (isCorrect) {
        this.step = "revealed";
      } else {
        this.step = "error";
      }
    },

    selectRevealedTrial(cell) {
      const correctAnswers = Array.isArray(this.revealedTrial.correctAnswer)
        ? this.revealedTrial.correctAnswer
        : [this.revealedTrial.correctAnswer];

      const isCorrect = correctAnswers.includes(cell);

      this.$magpie.addTrialData({
        trial_type: "practice_revealed_trial",
        practice_round: this.practiceRound,
        trial_id: this.revealedTrial.id,
        utterance: this.revealedTrial.utterance,
        response: cell,
        correct_answer: correctAnswers.join(","),
        correct: isCorrect
      });

      this.step = "done";
    }
  }
};
</script>

<style scoped>
.practice-instructions {
  width: 600px;
  margin: 0 auto;
  text-align: justify;
}

.practice-instructions h2 {
  text-align: center;
}

.practice-instructions button {
  display: block;
  margin: 20px auto 0;
}

.utterance {
  text-align: center;
  margin-bottom: 30px;
}

.grid-wrapper {
  position: relative;
  width: 500px;
  margin: 30px auto;
  line-height: 0;
}

.stimulus {
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
}

.cell {
  position: absolute;
  background: rgba(0, 0, 0, 0);
  border: 0;
  padding: 0;
  margin: 0;
  color: transparent;
  font-size: 0;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.top-left {
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
}

.top-right {
  top: 0;
  left: 50%;
  width: 50%;
  height: 50%;
}

.bottom-left {
  top: 50%;
  left: 0;
  width: 50%;
  height: 50%;
}

.bottom-right {
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
}

button {
  display: inline-block;
  width: auto;
  align-self: center;
  margin: 10px;
  padding: 8px 16px;
}
</style>