const trials = [
{
    id: 1,
    phase: "blindspot",
    block_id:1,
    trial_in_block:1,
    condition: "filler1",
    utterance: "The book",
    item: "yellow book",
    image: "stimuli/trial_01.png",
    blindSpot: "topRight",
    correctAnswer: "bottomRight"
  },

{
    id: 2,
    phase: "blindspot",
    block_id:1,
    trial_in_block:2,
    condition: "baseline",
    utterance: "The shoe",
    item: "red shoe",
    image: "stimuli/trial_02.png",
    blindSpot: "topRight",
    correctAnswer: "bottomRight"
  },

{
    id: 3,
    phase: "blindspot",
    block_id:1,
    trial_in_block:3,
    condition: "filler2color",
    utterance: "The green apple",
    item: "green apple",
    image: "stimuli/trial_03.png",
    blindSpot: "topRight",
    correctAnswer: "bottomRight"
  },

{
    id: 4,
    phase: "blindspot",
    block_id:1,
    trial_in_block:4,
    condition: "filler1",
    utterance: "The fish",
    item: "orange fish",
    image: "stimuli/trial_04.png",
    blindSpot: "topRight",
    correctAnswer: "topLeft"
  },

{
    id: 5,
    phase: "blindspot",
    block_id:1,
    trial_in_block:5,
    condition: "baseline",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_05.png",
    blindSpot: "topRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 6,
    phase: "blindspot",
    block_id:2,
    trial_in_block:1,
    condition: "filler2color",
    utterance: "The red chair",
    item: "red chair",
    image: "stimuli/trial_06.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topLeft"
  },

{
    id: 7,
    phase: "blindspot",
    block_id:2,
    trial_in_block:2,
    condition: "filler1",
    utterance: "The tree",
    item: "tree",
    image: "stimuli/trial_07.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topRight"
  },
  
{
    id: 8,
    phase: "blindspot",
    block_id:2,
    trial_in_block:3,
    condition: "baseline",
    utterance: "The dog",
    item: "dog",
    image: "stimuli/trial_08.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topLeft"
  },

{
    id: 9,
    phase: "blindspot",
    block_id:2,
    trial_in_block:4,
    condition: "filler1",
    utterance: "The pen",
    item: "green pen",
    image: "stimuli/trial_09.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topRight"
  },

{
    id: 10,
    phase: "blindspot",
    block_id:2,
    trial_in_block:5,
    condition: "filler2size",
    utterance: "The big umbrella",
    item: "big red umbrella",
    image: "stimuli/trial_10.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topRight"
  },

{
    id: 11,
    phase: "blindspot",
    block_id:3,
    trial_in_block:1,
    condition: "filler2size",
    utterance: "The big cup",
    item: "small bluecup",
    image: "stimuli/trial_11.png",
    blindSpot: "topLeft",
    correctAnswer: "topRight"
  },

{
    id: 12,
    phase: "blindspot",
    block_id:3,
    trial_in_block:2,
    condition: "filler2color",
    utterance: "The red flower",
    item: "red flower",
    image: "stimuli/trial_12.png",
    blindSpot: "topLeft",
    correctAnswer: "topRight"
  },

{
    id: 13,
    phase: "blindspot",
    block_id:3,
    trial_in_block:3,
    condition: "baseline",
    utterance: "The book",
    item: "green book",
    image: "stimuli/trial_13.png",
    blindSpot: "topLeft",
    correctAnswer: "bottomRight"
  },

{
    id: 14,
    phase: "blindspot",
    block_id:3,
    trial_in_block:4,
    condition: "filler1",
    utterance: "The car",
    item: "red car",
    image: "stimuli/trial_14.png",
    blindSpot: "topLeft",
    correctAnswer: "topRight"
  },

{
    id: 15,
    phase: "blindspot",
    block_id:3,
    trial_in_block:5,
    condition: "baseline",
    utterance: "The duck",
    item: "duck",
    image: "stimuli/trial_15.png",
    blindSpot: "topLeft",
    correctAnswer: "bottomLeft"
  },

{
    id: 16,
    phase: "blindspot",
    block_id:4,
    trial_in_block:1,
    condition: "filler2size",
    utterance: "The big cat",
    item: "big cat",
    image: "stimuli/trial_16.png",
    blindSpot: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 17,
    phase: "blindspot",
    block_id:4,
    trial_in_block:2,
    condition: "filler1",
    utterance: "The book",
    item: "blue book",
    image: "stimuli/trial_17.png",
    blindSpot: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 18,
    phase: "blindspot",
    block_id:4,
    trial_in_block:3,
    condition: "baseline",
    utterance: "The pen",
    item: "green pen",
    image: "stimuli/trial_18.png",
    blindSpot: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 19,
    phase: "blindspot",
    block_id:4,
    trial_in_block:4,
    condition: "filler1",
    utterance: "The chair",
    item: "red chair",
    image: "stimuli/trial_19.png",
    blindSpot: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 20,
    phase: "blindspot",
    block_id:4,
    trial_in_block:5,
    condition: "baseline",
    utterance: "The car",
    item: "yellowcar",
    image: "stimuli/trial_20.png",
    blindSpot: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 21,
    phase: "blindspot",
    block_id:5,
    trial_in_block:1,
    condition: "filler2size",
    utterance: "The big chair",
    item: "red chair",
    image: "stimuli/trial_21.png",
    blindSpot: "topRight",
    correctAnswer: "topLeft"
  },

{
    id: 22,
    phase: "blindspot",
    block_id:5,
    trial_in_block:2,
    condition: "filler1",
    utterance: "The cup",
    item: "blue cup",
    image: "stimuli/trial_22.png",
    blindSpot: "topRight",
    correctAnswer: "topLeft"
  },

{
    id: 23,
    phase: "blindspot",
    block_id:5,
    trial_in_block:3,
    condition: "baseline",
    utterance: "The fish",
    item: "orange fish",
    image: "stimuli/trial_23.png",
    blindSpot: "topRight",
    correctAnswer: "bottomRight"
  },

{
    id: 24,
    phase: "blindspot",
    block_id:5,
    trial_in_block:4,
    condition: "filler1",
    utterance: "The apple",
    item: "green apple",
    image: "stimuli/trial_24.png",
    blindSpot: "topRight",
    correctAnswer: "topLeft"
  },

{
    id: 25,
    phase: "blindspot",
    block_id:5,
    trial_in_block:5,
    condition: "filler2color",
    utterance: "The green car",
    item: "green car",
    image: "stimuli/trial_25.png",
    blindSpot: "topRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 26,
    phase: "susp",
    block_id:6,
    trial_in_block:1,
    condition: "filler1",
    utterance: "The apple",
    item: "green apple",
    image: "stimuli/trial_26.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topLeft"
  },

{
    id: 27,
    phase: "susp",
    block_id:6,
    trial_in_block:2,
    condition: "critical",
    utterance: "The orange fish",
    item: "orange fish",
    image: "stimuli/trial_27.png",
    blindSpot: "bottomLeft",
    correctAnswer: "bottomRight"
  },

{
    id: 28,
    phase: "susp",
    block_id:6,
    trial_in_block:3,
    condition: "filler2color",
    utterance: "The blue umbrella",
    item: "blue umbrella",
    image: "stimuli/trial_28.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topLeft"
  },

{
    id: 29,
    phase: "susp",
    block_id:6,
    trial_in_block:4,
    condition: "filler2size",
    utterance: "The small flower",
    item: "small yellow flower",
    image: "stimuli/trial_29.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topRight"
  },

{
    id: 30,
    phase: "susp",
    block_id:6,
    trial_in_block:5,
    condition: "critical",
    utterance: "The red shoe",
    item: "red shoe",
    image: "stimuli/trial_30.png",
    blindSpot: "bottomLeft",
    correctAnswer: "topRight"
  },

{
    id: 31,
    phase: "susp",
    block_id:7,
    trial_in_block:2,
    condition: "critical",
    utterance: "The yellow flower",
    item: "yellow flower",
    image: "stimuli/trial_31.png",
    blindSpot: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 32,
    phase: "susp",
    block_id:7,
    trial_in_block:1,
    condition: "filler2size",
    utterance: "The small book",
    item: "green book",
    image: "stimuli/trial_32.png",
    blindSpot: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 33,
    phase: "susp",
    block_id:7,
    trial_in_block:3,
    condition: "filler2color",
    utterance: "The red apple",
    item: "red apple",
    image: "stimuli/trial_33.png",
    blindSpot: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 34,
    phase: "susp",
    block_id:7,
    trial_in_block:5,
    condition: "critical",
    utterance: "The blue clock",
    item: "blue clock",
    image: "stimuli/trial_34.png",
    blindSpot: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 35,
    phase: "susp",
    block_id:7,
    trial_in_block:4,
    condition: "filler1",
    utterance: "The duck",
    item: "duck",
    image: "stimuli/trial_35.png",
    blindSpot: "bottomRight",
    correctAnswer: "bottomLeft"
  }, 

{
    id: 36,
    phase: "susp",
    block_id:8,
    trial_in_block:1,
    condition: "filler1",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_36.png",
    blindSpot: "topLeft",
    correctAnswer: "topRight"
  },

{
    id: 37,
    phase: "susp",
    block_id:8,
    trial_in_block:2,
    condition: "critical",
    utterance: "The orange pen",
    item: "orange pen",
    image: "stimuli/trial_37.png",
    blindSpot: "topLeft",
    correctAnswer: "bottomLeft"
  },

{
    id: 38,
    phase: "susp",
    block_id:8,
    trial_in_block:3,
    condition: "filler2size",
    utterance: "The big tree",
    item: "tree",
    image: "stimuli/trial_38.png",
    blindSpot: "topLeft",
    correctAnswer: "bottomRight"
  },

{
    id: 39,
    phase: "susp",
    block_id:8,
    trial_in_block:4,
    condition: "critical",
    utterance: "The orange cup",
    item: "orange cup",
    image: "stimuli/trial_39.png",
    blindSpot: "topLeft",
    correctAnswer: "bottomLeft"
  },

{
    id: 40,
    phase: "susp",
    block_id:8,
    trial_in_block:5,
    condition: "filler2color",
    utterance: "The blue book",
    item: "blue book",
    image: "stimuli/trial_40.png",
    blindSpot: "topLeft",
    correctAnswer: "topRight"
  },

{
    id: 41,
    phase: "susp",
    block_id:9,
    trial_in_block:1,
    condition: "filler2color",
    utterance: "The green chair",
    item: "green chair",
    image: "stimuli/trial_41.png",
    blindSpot: "topRight",
    correctAnswer: "bottomRight"
  },

{
    id: 42,
    phase: "susp",
    block_id:9,
    trial_in_block:2,
    condition: "filler1",
    utterance: "The apple",
    item: "green apple",
    image: "stimuli/trial_42.png",
    blindSpot: "topRight",
    correctAnswer: "topLeft"
  },

{
    id: 43,
    phase: "susp",
    block_id:9,
    trial_in_block:3,
    condition: "critical",
    utterance: "The yellow car",
    item: "yellow car",
    image: "stimuli/trial_43.png",
    blindSpot: "topRight",
    correctAnswer: "topLeft"
  },

{
    id: 44,
    phase: "susp",
    block_id:9,
    trial_in_block:4,
    condition: "filler2size",
    utterance: "The small fish",
    item: "small blue fish",
    image: "stimuli/trial_44.png",
    blindSpot: "topRight",
    correctAnswer: "bottomRight"
  },

{
    id: 45,
    phase: "susp",
    block_id:9,
    trial_in_block:5,
    condition: "critical",
    utterance: "The red umbrella",
    item: "red umbrella",
    image: "stimuli/trial_45.png",
    blindSpot: "topRight",
    correctAnswer: "bottomRight"
  }


];

function makeBlocks(trials) {
  const blockIds = [...new Set(trials.map(trial => trial.block_id))];

  return blockIds.map(blockId =>
    trials.filter(trial => trial.block_id === blockId)
  );
}

const trialBlocks = makeBlocks(trials);

export { trials, trialBlocks };
export default trialBlocks;