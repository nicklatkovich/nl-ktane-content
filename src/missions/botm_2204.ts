import { CompletionType, MissionInfo } from "nl-ktane-lib";

export const botm_2204: MissionInfo = {
  name: "BOTM Apr22",
  sortKey: "BOTM 2204",
  missionPack: "Bomb Of The Month",
  time: 105 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    {
      type: CompletionType.SOLO,
      time: 56 * 60 + 3,
      vid: "https://www.youtube.com/watch?v=uh5NiuXnQXY&feature=youtu.be",
      completer: "LegendWilleh",
    },
    {
      time: 42 * 60 + 36,
      isFirst: true,
      log: "file=ef6cae9b2b75d716a9fad30e9d58fc325d58869b",
      completer: "LegendWilleh",
    },
    { time: 29 * 60 + 3, log: "file=e3885dce847a8360b4c1a7eec148e77c0d805199;bomb=BS6GB7", completer: "VFlyer" },
    {
      time: 17 * 60 + 57,
      log: "file=44fb2ff23993d6961620ad540130b3b4c70053c7;bomb=UW2BQ7",
      completers: { defuser: "Dicey", experts: ["Fish"] },
    },
    {
      type: CompletionType.SOLO,
      time: 14 * 60 + 36,
      vid: "https://www.youtube.com/watch?v=KUwfs6C75P0",
      completer: "Deaf",
    },
    {
      type: CompletionType.SOLO,
      time: 12 * 60 + 57,
      vid: "https://www.youtube.com/watch?v=auq6T_qOBk8",
      completer: "Cookiepocalypse",
    },
  ],
  modules: [
    "TurnTheKey",
    "organizationModule",
    "FourtyTwo",
    "FiveZeroOne",
    [2, "kyudoku"],
    [2, "double_on"],
    "latinHypercube",
    "shashki",
    "1DChess",
    "understand",
    "loopover",
    "Mastermind Cruel",
    "masyuModule",
    "extendedBooleanVenn",
    "2048",
    "SimonShiftsModule",
    "BinaryPuzzleModule",
    "CrackboxModule",
    "DoubleOhModule",
    "BattleshipModule",
    "OneDimensionalMaze",
    "SuperlogicModule",
    "bloxx",
    "booleanVennModule",
    "colorAddition",
    "countdown",
    "diffusion",
    "mastermindRestricted",
    "ArrowTalk",
    "GSEntryNumberOne",
    "switchModule",
    "thewitness",
    "FlashMemory",
    "GSDirectingButtons",
    "GSEntryNumberFour",
    "Mastermind Simple",
    "oneLine",
    "rgbCombination",
    "CaesarCipherModule",
    "MistakeModule",
    "orangeArrowsModule",
    "AnagramsModule",
    "breaktime",
    "digitalRoot",
    "modulo",
    "WordScrambleModule",
    "AppreciateArt",
    "base1",
    "bigegg",
    "NeutralButtonModule",
    "TDSAmogus",
    "TDSDossierModifier",
    "TDSNya",
  ],
};
