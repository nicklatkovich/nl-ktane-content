import { MissionInfo } from "nl-ktane-lib";

export const werewolf: MissionInfo = {
  name: "Werewolf",
  missionPack: "Burniel's Bombs",
  time: 75 * 60,
  strikes: 6,
  widgets: 5,
  completions: [
    { time: 28 * 60 + 31, log: "file=03d25820b250f749a90b1235b6a6f700e8ea26bd;bomb=8S0PT7", completer: "LegendWilleh" },
    {
      time: 21 * 60 + 29,
      vid: "https://www.youtube.com/watch?v=dyCWqRVZnG4",
      completers: { defuser: "Cookiepocalypse", experts: ["KittyAshy", "Zefod"] },
    },
    {
      time: 18 * 60 + 42,
      log: "file=f57cd2c055dbe275fd1ccdfb641b3230a02e600d;bomb=8T7PP6",
      completers: { defuser: "Zaakeil", experts: ["GiveMeHeals", "OEGamer"] },
    },
    { time: 18 * 60 + 40, log: "file=34ae60d68915f06c6550adb0791d8223139aaf47;bomb=KH4GS0", completer: "Crazycaleb" },
    { time: 9 * 60 + 39, log: "file=5f4ff4c4a66685fd7c3d9ae831525b732e3e1268;bomb=KC4ZD7", completer: "Dicey" },
    {
      time: 9 * 60 + 10,
      vid: "https://www.youtube.com/watch?v=DxKOI9Jr20M",
      completers: { defuser: "Skyeward", experts: ["Rexkix", "SillyPuppy"] },
    },
    { time: 6 * 60 + 4, log: "file=fd39369a0c092374288f741f55a6922f8281975b;bomb=J63SM4", completer: "Garuda" },
    {
      time: 5 * 60 + 8,
      isFirst: true,
      log: "file=f7f2f2de66bc90192141050f970605aab168ef63;bomb=QE9JR3",
      completer: "Benjamin",
    },
  ],
  modules: [
    "BrokenButtonsModule",
    "ChordQualities",
    "connectFourModule",
    "ColourFlash",
    "boolMazeCruel",
    "CrypticPassword",
    "spangledStars",
    "doubleListening",
    "doubleScreenModule",
    "DoubleOhModule",
    "dungeon",
    "Emoji Math",
    "festiveJukebox",
    "FestivePianoKeys",
    "fizzBuzzModule",
    "FollowTheLeaderModule",
    "jackAttack",
    "jackOLantern",
    "jewelVault",
    "KudosudokuModule",
    "ladders",
    "luckyDice",
    "MandNs",
    "MafiaModule",
    "maintenance",
    "Mastermind Cruel",
    "maze3",
    "megaMan2",
    "MinesweeperModule",
    "MorseWar",
    "MysticSquareModule",
    "OnlyConnectModule",
    "PatternCubeModule",
    "PerplexingWiresModule",
    "PolyhedralMazeModule",
    "quintuples",
    "reverseMorse",
    "theRule",
    "SimonSingsModule",
    "simonSounds",
    "SkewedSlotsModule",
    "skyrim",
    "smallCircle",
    "ButtonV2",
    "SymbolCycleModule",
    "towerOfHanoi",
    "R4YUncoloredSwitches",
    "wire",
    "XRayModule",
  ],
};