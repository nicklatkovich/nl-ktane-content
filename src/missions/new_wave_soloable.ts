import { CompletionType, MissionInfo } from "nl-ktane-lib";

export const new_wave_soloable: MissionInfo = {
  name: "New Wave Soloable",
  missionPack: "Ulv's Bombs",
  time: 100 * 60,
  strikes: 10,
  widgets: 5,
  completions: [
    { time: 64 * 60 + 58, log: "file=906bc73d560181f761588c4728a42c7e16bde453;bomb=S18MS5", completer: "LegendWilleh" },
    {
      type: CompletionType.SOLO,
      time: 43 * 60 + 16,
      vid: "https://www.youtube.com/watch?v=EC9izq16j9Y",
      completer: "LegendWilleh",
    },
    { time: 37 * 60 + 52, isFirst: true, vid: "https://www.youtube.com/watch?v=f_ryd9kkunY", completer: "Diffuse" },
  ],
  modules: [
    "VoltorbFlip",
    "AnsweringCanBeFun",
    "brainf",
    "spinningButtons",
    "HogwartsModule",
    "bootTooBig",
    "anomia",
    "organizationModule",
    "Binary",
    "KritHoldUps",
    "UnownCipher",
    "qkTernaryConverter",
    "spellingBee",
    "nonverbalSimon",
    "MatrixQuiz",
    "widdershins",
    "directionalButton",
    "OneDimensionalMaze",
    "yesandno",
    "kyudoku",
    "BasicMorse",
    "ipa",
    "qkGnomishPuzzle",
    "bridges",
    "ultimateTicTacToe",
    "Ultralogic",
    "assemblyCode",
    "zhStrokes",
    "increasingIndices",
    "GSTellMeWhen",
    "mindlock",
    "digisibility",
    "breaktime",
    "GSNineBall",
    "metamem",
    "sixteenCoins",
    "mastermindRestricted",
    "logicalOperators",
    "vennDiagram",
    "valuedKeysModule",
    "diffusion",
    "hexiomModule",
    "functionalMapping",
    "StableTimeSignatures",
    "LetterGrid",
    "transmissionTransposition",
    "Coinage",
    "mischmodul",
    "squeeze",
  ],
};
