<template>
  <Experiment title="Perspective-taking experiment">

    <InstructionsWithBack />

    <PracticeBlock
      :practiceTrials="practiceTrials"
      correctBlindSpot="topLeft"
    />

    <component
      v-for="screen in experimentScreens"
      :key="screen.key"
      :is="screen.component"
      v-bind="screen.props"
      @solved-blindspot="markBlindSpotSolved"
      @blindspot-answer="handleRealBlindspotAnswer"
    />

    <InstructionScreen
      v-if="experimentTerminated"
      :title="'Experiment ended'"
    >
      I am sorry, but you did not identify the correct hidden cell.
      The experiment ends here.
    </InstructionScreen>

    <Questionnaire v-if="!experimentTerminated" />

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
import _ from "lodash";
import trials from "./trials";
import InstructionsWithBack from "./InstructionsWithBack.vue";
import practiceTrials from "./practiceTrials";
import GridTrial from "./GridTrial.vue";
import BlindSpotProbe from "./BlindSpotProbe.vue";
import Questionnaire from "./Questionnaire.vue";
import PracticeBlock from "./PracticeBlock.vue";
import FinalBlindSpotProbe from "./FinalBlindSpotProbe.vue";

export default {
  name: "App",
  components: {
    InstructionsWithBack,
    GridTrial,
    PracticeBlock,
    BlindSpotProbe,
    FinalBlindSpotProbe,
    Questionnaire
  },
  data() {
    return {
      trials,
      practiceTrials,
      blindSpotSolved: false,
      experimentTerminated: false
    };
  },
  computed: {
    _() {
      return _;
    },

    experimentScreens() {
      const screens = [];

      const blindspotTrials = this.trials.filter(
        trial => trial.phase === "blindspot"
      );

      const suspiciousnessTrials = this.trials.filter(
        trial => trial.phase === "susp"
      );

      // Always include the blindspot trials/probes in the screen sequence.
      // If the blind spot has already been solved, they will auto-skip.
      screens.push(
        ...blindspotTrials.slice(0, 5).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-1",
        component: BlindSpotProbe,
        props: {
          probeId: 1,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      screens.push(
        ...blindspotTrials.slice(5, 10).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-2",
        component: BlindSpotProbe,
        props: {
          probeId: 2,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      screens.push(
        ...blindspotTrials.slice(10, 15).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-3",
        component: BlindSpotProbe,
        props: {
          probeId: 3,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      screens.push(
        ...blindspotTrials.slice(15, 20).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-4",
        component: FinalBlindSpotProbe,
        props: {
          probeId: 4,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      // Always show all suspiciousness trials.
      screens.push(
        ...suspiciousnessTrials.map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.experimentTerminated
          }
        }))
      );

      return screens;
    }
  },
  methods: {
    markBlindSpotSolved() {
      this.blindSpotSolved = true;
    },

    handleRealBlindspotAnswer(answer) {
      if (answer.probeId === 4 && !answer.correct) {
        this.experimentTerminated = true;
      }
    }
  }
};
</script>