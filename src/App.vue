<template>
  <Experiment title="Perspective-taking experiment">
    <!-- ====================================== -->
    <!-- Experiment 1: Redundancy production   -->
    <!-- ====================================== -->

    <RedundancyInstructions />

    <RedundancyGridTrial
      v-for="sceneGroup in randomizedSceneGroups"
      :key="`redundancy-scene-${sceneGroup.scene_id}`"
      :trials="sceneGroup.trials"
      :scene-id="sceneGroup.scene_id"
      :scene-number="sceneGroup.presentation_order"
    />

    <EndFirstExperiment />

    <!-- ====================================== -->
    <!-- Experiment 2: Director task            -->
    <!-- ====================================== -->

    <InstructionsSpeaker />

    <PracticeSpeaker />

    <InstructionsListener />

    <PracticeListener />

    <InstructionsBlock />

    <PracticeBlock :practice-trials="practiceTrials" />

    <InstructionsTwoParts />

    <DirectorGridTrial
      v-for="(block, index) in trialBlocks"
      :key="`director-block-${index + 1}`"
      :block="block"
    />

    <Questionnaire />

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
/*
 * Experiment 1: Redundancy
 */
import randomizedSceneGroups from "./Experiments/redundancy/trials";
import RedundancyInstructions from "./Experiments/redundancy/Instructions.vue";
import RedundancyGridTrial from "./Experiments/redundancy/GridTrial.vue";
import EndFirstExperiment from "./Experiments/redundancy/EndFirstExperiment.vue";

/*
 * Experiment 2: Director task
 */
import { trialBlocks } from "./Experiments/main/trials";
import practiceTrials from "./Experiments/main/practiceTrials";

import InstructionsSpeaker from "./Experiments/main/InstructionsSpeaker.vue";
import InstructionsListener from "./Experiments/main/InstructionsListener.vue";
import InstructionsBlock from "./Experiments/main/InstructionsBlock.vue";
import InstructionsTwoParts from "./Experiments/main/InstructionsTwoParts.vue";

import PracticeSpeaker from "./Experiments/main/PracticeSpeaker.vue";
import PracticeListener from "./Experiments/main/PracticeListener.vue";
import PracticeBlock from "./Experiments/main/PracticeBlock.vue";

import DirectorGridTrial from "./Experiments/main/GridTrial.vue";
import Questionnaire from "./Experiments/main/Questionnaire.vue";

export default {
  name: "App",

  components: {
    /*
     * Redundancy experiment
     */
    RedundancyInstructions,
    RedundancyGridTrial,
    EndFirstExperiment,

    /*
     * Director task
     */
    InstructionsSpeaker,
    PracticeSpeaker,
    InstructionsListener,
    PracticeListener,
    InstructionsBlock,
    PracticeBlock,
    InstructionsTwoParts,
    DirectorGridTrial,
    Questionnaire
  },

  data() {
    return {
      randomizedSceneGroups,
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