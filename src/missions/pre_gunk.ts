import { MissionInfo } from "nl-ktane-lib";

export const pre_gunk: MissionInfo = {
  name: "Pre-Gunk",
  missionPack: "Grunkle's Missions",
  time: 70 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    {
      time: 24 * 60 + 47,
      isFirst: true,
      log: "file=34012ee5b746edf297c36a4898f2bda21169160c;bomb=JE4EW6",
      completer: "LegendWilleh",
    },
    {
      time: 15 * 60 + 46,
      vid: "https://www.youtube.com/watch?v=tas23duDgiE",
      completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
    },
    { time: 5 * 60 + 47, vid: "https://www.youtube.com/watch?v=kX_LksxjwGo", completer: "Megum" },
    { time: 4 * 60 + 10, vid: "https://www.youtube.com/watch?v=PnVUO4zS0N4", completer: "weird" },
    {
      time: 2 * 60 + 21,
      log: "file=9c41127ec96490cb61dcf99914f3187360d25db1;bomb=XQ8EE2",
      completers: { defuser: "OEGamer", experts: ["Draket", "Rexkix"] },
    },
  ],
  modules: [
    "Probing",
    "spwizPerspectivePegs",
    "FriendshipModule",
    "RockPaperScissorsLizardSpockModule",
    "ChordQualities",
    "LetterGrid",
    "PerplexingWiresModule",
    "NonogramModule",
    "Color Generator",
    "timezone",
    "symbolicCoordinates",
    "buttonSequencesModule",
    "theSwan",
    "HexiEvilFMN",
    "sun",
    "DrDoctorModule",
    "graffitiNumbers",
    "SimonSingsModule",
    "binaryTree",
    "simonsStar",
    "MazeScrambler",
    "equations",
    "SynchronizationModule",
    "Signals",
    "snooker",
    "dominoes",
    "westeros",
    "megaMan2",
    "pictionaryModule",
    "luckyDice",
    "flowerPatch",
    "thewitness",
    "FlashMemory",
    "modkit",
    "theRule",
    "keypadLock",
    "colorAddition",
    "spellingBee",
    "greekLetterGrid",
    "semamorse",
    "sorting",
    "ksmBadugi",
    "shiftedMaze",
    "TwennyWan",
    "theSpeaker",
    "Mazery",
    "GSDirectingButtons",
  ],
};