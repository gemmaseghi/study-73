<template>
  <Experiment title="Perspective-taking experiment">
    <InstructionsSpeaker />

    <PracticeSpeaker />

    <InstructionsListener />

    <PracticeListener />

    <InstructionsBlock />

    <PracticeBlock :practiceTrials="practiceTrials" />

    <InstructionsTwoParts />

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
import trials, { trialBlocks } from "./Experiments/main/trials";
import practiceTrials from "./Experiments/main/practiceTrials";

import InstructionsSpeaker from "./Experiments/main/InstructionsSpeaker.vue";
import InstructionsListener from "./Experiments/main/InstructionsListener.vue";
import InstructionsBlock from "./Experiments/main/InstructionsBlock.vue";
import InstructionsTwoParts from "./Experiments/main/InstructionsTwoParts.vue";
import PracticeSpeaker from "./Experiments/main/PracticeSpeaker.vue";
import PracticeListener from "./Experiments/main/PracticeListener.vue";
import PracticeBlock from "./Experiments/main/PracticeBlock.vue";
import GridTrial from "./Experiments/main/GridTrial.vue";
import Questionnaire from "./Experiments/main/Questionnaire.vue";

export default {
  name: "App",
  components: {
    InstructionsSpeaker,
    PracticeSpeaker,
    InstructionsListener,
    PracticeListener,
    InstructionsBlock,
    PracticeBlock,
    InstructionsTwoParts,
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