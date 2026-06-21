<template>
  <Screen>
    <h2>Final questions</h2>

    <!-- Step 1: Question A -->
    <div v-if="step === 1" class="question">
      <p>
        Did you think there was anything peculiar in the way the speaker
        formulated the descriptions of the target objects?
      </p>

      <div class="radio-container">
        <label>
          <input type="radio" value="yes" v-model="peculiar" />
          Yes
        </label>

        <label>
          <input type="radio" value="no" v-model="peculiar" />
          No
        </label>
      </div>

      <button :disabled="!peculiar" @click="step = 2">
        Next
      </button>
    </div>

    <!-- Step 2: Question B -->
    <div v-if="step === 2" class="question">
      <div v-if="peculiar === 'yes'">
        <p>What was peculiar about the descriptions?</p>
        <textarea v-model="peculiarExplanation"></textarea>
      </div>

      <div v-if="peculiar === 'no'">
        <p>Please explain any strategy you may have used to select the object described by the speaker.</p>
        <textarea v-model="strategyExplanation"></textarea>
      </div>

      <button :disabled="!canContinueFromStep2" @click="step = 3">
        Next
      </button>
    </div>

    <!-- Step 3: Question C -->
    <div v-if="step === 3" class="question">
      <p>
        Did you ever suspect that the speaker could see what was in the grey cell?
        Please explain why and give examples if possible.
      </p>

      <textarea v-model="suspicionExplanation"></textarea>

      <button :disabled="!suspicionExplanation.trim()" @click="submitQuestionnaire">
        Continue
      </button>
    </div>
  </Screen>
</template>

<script>
export default {
  name: "Questionnaire",
  data() {
    return {
      step: 1,
      peculiar: "",
      peculiarExplanation: "",
      strategyExplanation: "",
      suspicionExplanation: ""
    };
  },
  computed: {
    canContinueFromStep2() {
      if (this.peculiar === "yes") {
        return this.peculiarExplanation.trim();
      }

      if (this.peculiar === "no") {
        return this.strategyExplanation.trim();
      }

      return false;
    }
  },
  methods: {
    submitQuestionnaire() {
      this.$magpie.addTrialData({
        trial_type: "questionnaire",
        peculiar_answer: this.peculiar,
        peculiar_explanation: this.peculiarExplanation,
        strategy_explanation: this.strategyExplanation,
        suspicion_explanation: this.suspicionExplanation
      });

      this.$magpie.nextScreen();
    }
  }
};
</script>

<style scoped>
.question {
  margin-bottom: 25px;
}

label {
  display: block;
  margin: 8px 0;
}

textarea {
  width: 100%;
  min-height: 120px;
}

button {
  margin-top: 20px;
}

.radio-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.radio-container label {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
}
</style>