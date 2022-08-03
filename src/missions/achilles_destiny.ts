import { MissionInfo } from "nl-ktane-lib";

export const achilles_destiny: MissionInfo = {
  name: "Achilles Destiny",
  missionPack: "FateBombs",
  time: 70 * 60,
  strikes: 15,
  widgets: 9,
  completions: [
    { time: 34 * 60 + 48, log: "file=32ca2475c95cba5769e272a8a170225ddb502d22;bomb=KK6RB7", completer: "LegendWilleh" },
    { time: 28 * 60 + 22, isFirst: true, vid: "https://www.youtube.com/watch?v=yLHbhJU0Qkk", completer: "Draket" },
    {
      time: 18 * 60 + 3,
      log: "file=f5c8d0bced8f9eece7abd147742e36688eeecd20;bomb=DA0PT0",
      completers: { defuser: "Fish", experts: ["Deaf", "Zefod"] },
    },
    {
      time: 17 * 60 + 42,
      vid: "https://www.youtube.com/watch?v=iiFrxjpXDaU",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    { time: 15 * 60 + 38, log: "file=3ca5e447e4d1dece8ef2328228008a8661d57d19;bomb=5I4EN1", completer: "Burniel" },
    { time: 15 * 60 + 32, log: "file=e3bc49fc1290a0cd1af01f4772e8f33a9afab3aa;bomb=B84PU1", completer: "Puddle" },
    { time: 9 * 60 + 45, log: "file=40b694fbcd3cd6aa16984ee260ab24bd8ed9eda0;bomb=KE7QG6", completer: "GiveMeHeals" },
    { time: 6 * 60 + 40, vid: "https://www.youtube.com/watch?v=2G-SFQ9SxJs", completer: "Crazycaleb" },
    {
      time: 6 * 60 + 3,
      log: "file=0b7fbee690ef8da61f0a316d50e277426bd980fb;bomb=HU3FW8",
      completers: { defuser: "ManiaMate", experts: ["Dicey", "Vincology"] },
    },
    { time: 5 * 60 + 59, log: "file=dc1f004c84408854b42ba219809ed9bcbef160aa;bomb=849TX1", completer: "Ugh_Sunlight" },
    { time: 4 * 60 + 33, log: "file=c62af4bee55ac169f613cd15fc5947d426b79c24;bomb=EH9JH9", completer: "Garuda" },
    { time: 1 * 60 + 12, log: "file=80af19f9a80a9c1aa18b298749d11eb90be35e5d;bomb=1P2DA7", completer: "Chestnut" },
    { time: 1 * 60 + 9, log: "file=34127b41565597f57ade25132cd2a608ef968ffc;bomb=A88HU9", completer: "Yabbaguy" },
    {
      time: 23,
      vid: "https://www.youtube.com/watch?v=0onj2fvPdDI",
      completers: { defuser: "Bianca", experts: ["Benjamin"] },
    },
  ],
  modules: [
    "BigButton",
    "WhosOnFirst",
    "WireSequence",
    "spwiz3DMaze",
    "spwizAdventureGame",
    "spwizAstrology",
    "PasswordsTranslated",
    "Backgrounds",
    "BattleshipModule",
    "BigCircle",
    "KritBlackjack",
    "BlindAlleyModule",
    "blockbusters",
    "TheBulbModule",
    "burglarAlarm",
    "buttonSequencesModule",
    "TheClockModule",
    [
      3,
      "ColoredSquaresModule",
      "DecoloredSquaresModule",
      "DiscoloredSquaresModule",
      "VaricoloredSquaresModule",
      "UncoloredSquaresModule",
    ],
    "combinationLock",
    "cooking",
    "dungeon",
    "dungeon2",
    "ExtendedPassword",
    "FaultyBackgrounds",
    "TheGamepadModule",
    "giantsDrink",
    ["jackOLantern", "luckyDice"],
    "Laundry",
    "Listening",
    "MazeScrambler",
    [2, "mortalKombat"],
    "Poker",
    "screw",
    "SimonShrieksModule",
    [3, "SimonV2", "SimonScreamsModule", "simonsStar", "SimonShrieksModule"],
    ["snooker", "Bowling"],
    "symbolicCoordinates",
    "ThirdBase",
    "TextField",
    "valves",
    "visual_impairment",
    "weirdAlYankovic",
    ["wire", "safetySquare"],
    "FaultySink",
    ["commuting", "Sink"],
    "deckOfManyThings",
    "murder",
    "sevenDeadlySins",
    "3dTunnels",
  ],
};
