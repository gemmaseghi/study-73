<template>
  <Screen>
    <div v-if="step === 'trial' || step === 'blindspot'">
      <div v-if="imagesReady" class="block-layout">
        <div class="history-row">
          <div
            v-for="(trial, index) in practiceTrials"
            :key="trial.id"
            class="history-slot"
            :class="{ empty: !responses[index] }"
          >
            <template v-if="responses[index]">
              <div class="history-utterance">{{ trial.utterance }}</div>

              <div class="history-grid-wrapper">
                <img :src="trial.image" class="history-stimulus" />
                
                <div
                  class="selection-marker small"
                  :class="responses[index].response"
                />
                
              </div>
            </template>
          </div>
        </div>

        <div
          v-if="step === 'trial' && currentGrid < practiceTrials.length && !responses[currentGrid]"
          class="active-area"
        >
          <h3 class="active-utterance">
            {{ practiceTrials[currentGrid].utterance }}
          </h3>

          <div class="active-grid-wrapper">
            <img :src="practiceTrials[currentGrid].image" class="active-stimulus" />

            <button class="cell top-left" @click="selectObject('topLeft')" />
            <button class="cell top-right" @click="selectObject('topRight')" />
            <button class="cell bottom-left" @click="selectObject('bottomLeft')" />
            <button class="cell bottom-right" @click="selectObject('bottomRight')" />
          </div>
        </div>

        <div v-if="step === 'blindspot'" class="active-area">
          <h3 class="active-utterance">
            Wähle das Feld aus, das Leo nicht sehen kann
          </h3>

          <div class="active-grid-wrapper">
            <img :src="emptyGridImage" class="active-stimulus" />

            <button class="cell top-left" @click="selectBlindSpot('topLeft')" />
            <button class="cell top-right" @click="selectBlindSpot('topRight')" />
            <button class="cell bottom-left" @click="selectBlindSpot('bottomLeft')" />
            <button class="cell bottom-right" @click="selectBlindSpot('bottomRight')" />
            
            <div
              v-if="blindSpotResponse"
              class="selection-marker blindspot-marker"
              :class="blindSpotResponse"
            />
            
          </div>
        </div>
      </div>
      <div v-else class="preload-placeholder"></div>
    </div>

    <div v-if="step === 'retry'" class="practice-instructions">
      <h2>Versuch's nochmal</h2>
      <p>
        Du hast das falsche verdeckte Feld ausgewählt. Du wirst die Übungsrunde noch einmal wiederholen.
      </p>
      <button @click="startPractice">Übung wiederholen</button>
    </div>

    <div v-if="step === 'done'" class="practice-instructions">
      <h2>Richtig!</h2>

      <p>
        Du hast das verdeckte Feld richtig identifiziert. Jetzt bist du bereit, mit dem Spiel zu starten.
      </p>

      <button @click="$magpie.nextScreen()">
        Weiter
      </button>
    </div>
  </Screen>
</template>

<script>
export default {
  name: "PracticeBlock",
  props: {
    practiceTrials: Array
  },
  data() {
    return {
      step: "trial",
      currentGrid: 0,
      blockStartTime: null,
      gridStartTime: null,
      blindSpotStartTime: null,
      responses: [],
      blindSpotResponse: null,
      practiceAttempt: 0,
      advanceDelay: 250,
      imagesReady: false,
      emptyGridImage: "main/stimuli/empty_grid.png"
    };
  },
  mounted() {
    this.startPractice();
  },
  methods: {
    startPractice() {
      this.practiceAttempt += 1;
      this.currentGrid = 0;
      this.responses = [];
      this.blindSpotResponse = null;
      this.imagesReady = false;
      this.step = "trial";
      this.blockStartTime = null;
      this.gridStartTime = null;
      this.blindSpotStartTime = null;

      this.preloadPracticeImages().then(() => {
        this.imagesReady = true;

        this.$nextTick(() => {
          requestAnimationFrame(() => {
            this.blockStartTime = performance.now();
            this.gridStartTime = performance.now();
          });
        });
      });
    },
    preloadPracticeImages() {
      const imagePaths = this.practiceTrials.map(trial => trial.image);
      imagePaths.push(this.emptyGridImage);

      const preloadOne = src =>
        new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });

      return Promise.all(imagePaths.map(preloadOne));
    },

    selectObject(cell) {
      const now = performance.now();
      const trial = this.practiceTrials[this.currentGrid];

      const correctAnswers = Array.isArray(trial.correctAnswer)
        ? trial.correctAnswer
        : [trial.correctAnswer];

      const isCorrect = correctAnswers.includes(cell);

      this.$set(this.responses, this.currentGrid, {
        trial_type: "practice_object_trial",
        trial_id: trial.id,
        phase: trial.phase,
        block_id: trial.block_id,
        trial_in_block: trial.trial_in_block,
        condition: trial.condition,
        utterance: trial.utterance,
        blind_spot: trial.blindSpot,
        response: cell,
        correct_answer: correctAnswers.join(","),
        correct: isCorrect,
        rt: now - this.gridStartTime
      });

      if (this.currentGrid < this.practiceTrials.length - 1) {
        this.currentGrid += 1;

        this.$nextTick(() => {
          requestAnimationFrame(() => {
            this.gridStartTime = performance.now();
          });
        });
      } else {
        this.currentGrid += 1;
        this.step = "blindspot";

        this.$nextTick(() => {
          requestAnimationFrame(() => {
            this.blindSpotStartTime = performance.now();
          });
        });
      }
    },

    selectBlindSpot(cell) {
      const now = performance.now();
      const correctBlindSpot = this.practiceTrials[0].blindSpot;
      const isCorrect = cell === correctBlindSpot;

      this.blindSpotResponse = cell;

      const blindSpotData = {
        response: cell,
        correct_answer: correctBlindSpot,
        correct: isCorrect,
        rt: now - this.blindSpotStartTime
      };

      setTimeout(() => {
        this.finishPractice(now, blindSpotData);
      }, this.advanceDelay);
    },

    finishPractice(endTime, blindSpotData) {
      const blockRT = endTime - this.blockStartTime;

      const trialData = {
        trial_type: "practice_block",
        phase: "practice",
        block_id: 0,
        practice_attempt: this.practiceAttempt,
        block_rt: blockRT,
        blind_spot_response: blindSpotData.response,
        blind_spot_correct_answer: blindSpotData.correct_answer,
        blind_spot_correct: blindSpotData.correct,
        blind_spot_rt: blindSpotData.rt,
        block_responses_json: JSON.stringify(this.responses)
      };

      this.responses.forEach((r, i) => {
        const n = i + 1;
        trialData[`practice_trial_id_${n}`] = r.trial_id;
        trialData[`practice_trial_in_block_${n}`] = r.trial_in_block;
        trialData[`practice_condition_${n}`] = r.condition;
        trialData[`practice_utterance_${n}`] = r.utterance;
        trialData[`practice_blind_spot_${n}`] = r.blind_spot;
        trialData[`practice_response_${n}`] = r.response;
        trialData[`practice_correct_answer_${n}`] = r.correct_answer;
        trialData[`practice_correct_${n}`] = r.correct;
        trialData[`practice_rt_${n}`] = r.rt;
      });

      this.$magpie.addTrialData(trialData);

      if (blindSpotData.correct) {
        this.step = "done";
      } else {
        this.step = "retry";
      }
    }
  }
};
</script>

<style scoped>
.practice-instructions {
  width: 700px;
  margin: 0 auto;
  text-align: justify;
  font-size: 18px;
  line-height: 1.6;
}

.practice-instructions h2 {
  text-align: center;
}

.practice-instructions button {
  display: block;
  margin: 20px auto;
}

.block-layout {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.history-row {
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

.history-slot {
  width: 170px;
  height: 185px;
}

.history-slot.empty {
  visibility: hidden;
}

.history-utterance {
  text-align: center;
  font-size: 13px;
  height: 28px;
  margin-bottom: 4px;
}

.history-grid-wrapper {
  position: relative;
  width: 170px;
  height: 170px;
  opacity: 0.85;
  line-height: 0;
}

.history-stimulus {
  width: 100%;
  display: block;
}

.active-area {
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.active-utterance {
  text-align: center;
  font-size: 26px;
  min-height: 42px;
  margin: 0 0 12px 0;
}

.active-grid-wrapper {
  position: relative;
  width: min(440px, 62vh);
  line-height: 0;
}

.active-stimulus {
  width: 100%;
  display: block;
}

.cell {
  position: absolute;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  opacity: 0;
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


.selection-marker {
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: black;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.selection-marker.small {
  width: 12px;
  height: 12px;
}

.blindspot-marker {
  width: 18px;
  height: 18px;
}

.selection-marker.topLeft {
  top: 25%;
  left: 25%;
}

.selection-marker.topRight {
  top: 25%;
  left: 75%;
}

.selection-marker.bottomLeft {
  top: 75%;
  left: 25%;
}

.selection-marker.bottomRight {
  top: 75%;
  left: 75%;
}


.preload-placeholder {
  width: 100%;
  min-height: 90vh;
}
</style>