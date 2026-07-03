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
import trials, { trialBlocks } from "./trials";
import practiceTrials from "./practiceTrials";

import InstructionsSpeaker from "./InstructionsSpeaker.vue";
import InstructionsListener from "./InstructionsListener.vue";
import InstructionsBlock from "./InstructionsBlock.vue";
import InstructionsTwoParts from "./InstructionsTwoParts.vue";
import PracticeSpeaker from "./PracticeSpeaker.vue";
import PracticeListener from "./PracticeListener.vue";
import PracticeBlock from "./PracticeBlock.vue";
import GridTrial from "./GridTrial.vue";
import Questionnaire from "./Questionnaire.vue";

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