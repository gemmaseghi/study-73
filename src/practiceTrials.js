const practiceTrials = [
  {
    id: "practice_1",
    phase: "practice",
    condition: "practice",
    utterance: "The grapes",
    item: "grapes",
    image: "stimuli/practice_01.png",
    greyCell: "topLeft",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },
  {
    id: "practice_2",
    phase: "practice",
    condition: "practice",
    utterance: "The toothbrush",
    item: "toothbrush",
    image: "stimuli/practice_02.png",
    greyCell: "topLeft",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },
  {
    id: "practice_3",
    phase: "practice",
    condition: "practice",
    utterance: "The key",
    item: "key",
    image: "stimuli/practice_03.png",
    greyCell: "topLeft",
    correctAnswer: ["bottomRight"],
    maxSelections: 1
  },
  {
    id: "practice_4",
    phase: "practice",
    condition: "practice_after_reveal",
    utterance: "The bottle",
    item: "bottle",
    image: "stimuli/practice_04.png",
    greyCell: "topLeft",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  }
];

export default practiceTrials;