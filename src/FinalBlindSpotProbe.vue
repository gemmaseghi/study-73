<template>
  <Screen>
    <h2>Select the hidden cell</h2>

    <p>Please select the cell that you think is hidden from the speaker.</p>

    <div class="grid-wrapper">
      <img :src="gridImage" class="stimulus" />

      <button class="cell top-left" @click="selectCell('topLeft')" />
      <button class="cell top-right" @click="selectCell('topRight')" />
      <button class="cell bottom-left" @click="selectCell('bottomLeft')" />
      <button class="cell bottom-right" @click="selectCell('bottomRight')" />
    </div>
  </Screen>
</template>

<script>
export default {
  name: "FinalBlindSpotProbe",
  props: {
    probeId: Number,
    correctBlindSpot: String,
    gridImage: {
      type: String,
      default: "stimuli/empty_grid.png"
    },
    skip: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log("FINAL PROBE skip:", this.skip);

    if (this.skip) {
        this.$magpie.nextScreen();
    }
  },
  methods: {
    selectCell(cell) {
      const isCorrect = cell === this.correctBlindSpot;

      this.$magpie.addTrialData({
        trial_type: "final_blindspot_probe",
        probe_id: this.probeId,
        blindspot_response: cell,
        correct_blindspot: this.correctBlindSpot,
        correct: isCorrect
      });

      this.$emit("blindspot-answer", {
        probeId: this.probeId,
        correct: isCorrect
      });

      this.$magpie.nextScreen();
    }
  }
};
</script>

<style scoped>

.grid-wrapper {
  position: relative;
  width: 500px;
  margin: 0 auto;
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
</style>