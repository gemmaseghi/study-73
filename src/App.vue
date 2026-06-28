<template>
  <Experiment title="Perspective-taking experiment">
    <InstructionsWithBack />

    <PracticeBlock :practiceTrials="practiceTrials" />

    <GridTrial
      v-for="(block, index) in trialBlocks"
      :key="`block-${index + 1}`"
      :block="block"
    />

    <Questionnaire />

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
import trials, { trialBlocks } from "./trials";
import practiceTrials from "./practiceTrials";

import InstructionsWithBack from "./InstructionsWithBack.vue";
import PracticeBlock from "./PracticeBlock.vue";
import GridTrial from "./GridTrial.vue";
import Questionnaire from "./Questionnaire.vue";

export default {
  name: "App",
  components: {
    InstructionsWithBack,
    PracticeBlock,
    GridTrial,
    Questionnaire
  },
  data() {
    return {
      trials,
      trialBlocks,
      practiceTrials
    };
  }
};
</script>

<style>
.experiment {
  width: 1500px !important;
  max-width: 95vw !important;
}
</style>