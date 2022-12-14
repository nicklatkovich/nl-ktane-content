import { MissionInfo } from "nl-ktane-lib";

export const defuser_s_headache: MissionInfo = {
  name: "Defuser's Headache",
  missionPack: "Guonuo's M.E.G Missions",
  time: 100 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    { time: 52 * 60 + 19, log: "file=c832f257638c5a33dd0f69cacfd56f2f462b1ec6;bomb=HE8ZM4", completer: "LegendWilleh" },
    {
      time: 40 * 60 + 28,
      log: "file=8afeee0d9647c39ea47ac7498b651219011a3790;bomb=8B6TR7",
      completers: { defuser: "Edan", experts: ["Burniel", "Zefod"] },
    },
    { time: 13 * 60 + 38, log: "file=9489947226d367a831314bfc64d602aee7ae7037;bomb=4D9LJ8", completer: "Garuda" },
    { time: 13 * 60 + 37, log: "file=8ff6aadb27a0a25faf70e55fae3552aed732ee5c;bomb=G06RV2", completer: "Vincology" },
    {
      time: 11 * 60 + 8,
      isFirst: true,
      log: "file=7e47ae6caacfdf492da2b8abe8180a6be10604b8;bomb=0V6BD3",
      completer: "Ulv",
    },
    { time: 10 * 60 + 14, vid: "https://www.youtube.com/watch?v=khc0qrndA7g", completer: "Cookiepocalypse" },
    { time: 1 * 60 + 10, log: "file=dd78510bdf70aa14d3aa14a2fca574968699947f;bomb=7S7DV4", completer: "Dicey" },
  ],
  modules: [
    "forgetThis",
    "notMorsematics",
    "Phosphorescence",
    "kyudoku",
    "BinaryPuzzleModule",
    "TwennyWan",
    "rubiksClock",
    "Color Generator",
    "2048",
    "burglarAlarm",
    "crystalMaze",
    "shapeshift",
    "marqueeMorseModule",
    "JuckAlchemy",
    "wastemanagement",
    "emoticonMathModule",
    "palindromes",
    "GSPuzzleIdentification",
    "orderedKeys",
    "spellingBee",
    "EnglishTest",
    "GoingBackwards",
    "accumulation",
    "algebra",
    "anomia",
    "punctuationMarks",
    "insanagrams",
    "blockbusters",
    "bootTooBig",
    "BoozleTalk",
    "cube",
    "EncryptedMorse",
    "EnglishTest",
    "fastMath",
    "booleanVennModule",
    "CosmicModule",
    "etterna",
    "Playfair",
    "ZooModule",
    "PuzzwordModule",
    "numberCipher",
    "Ultralogic",
    "colourcode",
    "PixelArt",
    "pwGenerator",
    "pieModule",
    "TheHypercubeModule",
  ],
};
