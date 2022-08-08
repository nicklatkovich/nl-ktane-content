import { MissionInfo } from "nl-ktane-lib";

export const remix_1: MissionInfo = {
  name: "Remix 1",
  missionPack: "weird's remix pack",
  time: 61 * 60 + 24,
  strikes: 5,
  widgets: 5,
  completions: [
    { time: 25 * 60 + 3, log: "file=b2fde017fa7be0b35957b5b32a0d027ae27825da;bomb=DC3GM7", completer: "LegendWilleh" },
    { time: 20 * 60 + 41, log: "file=4a390af066d5a7d41f5bbf2a4591b48cfa894b45;bomb=JM1GQ0", completer: "Puddle" },
    {
      time: 15 * 60 + 17,
      vid: "https://www.youtube.com/watch?v=RM6pKDYX6ZY",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    {
      time: 14 * 60 + 15,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=m_bvlKCsFnk",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel"] },
    },
  ],
  solvedByTP: true,
  modules: [
    [2, "MemoryV2"],
    "NeedyVentV2",
    "MorseV2",
    "SimonV2",
    [2, "KeypadV2"],
    [2, "ButtonV2"],
    "MazeV2",
    "LetterKeys",
    "alphabet",
    "LEDEnc",
    "PasswordV2",
    "ExtendedPassword",
    "symbolicPasswordModule",
    "Emoji Math",
    "Semaphore",
    "WordScrambleModule",
    "AnagramsModule",
    "Listening",
    "ForeignExchangeRates",
    "OrientationCube",
    "graphModule",
    "spwizAstrology",
    "Logic",
    "spwizAdventureGame",
    "CruelPianoKeys",
    "spwiz3DMaze",
    "MouseInTheMaze",
    "SillySlots",
    "Laundry",
    "NumberPad",
    "FollowTheLeaderModule",
    "spwizPerspectivePegs",
    "CaesarCipherModule",
    "SimonSpeaksModule",
    "simonSamples",
    "characterShift",
    "ColoredSquaresModule",
    "reverseMorse",
    "wireSpaghetti",
    "SynchronizationModule",
    "qSwedishMaze",
    "periodicTable",
    "countdown",
    "valves",
  ],
};
