import { MissionInfo } from "nl-ktane-lib";

export const riptide: MissionInfo = {
  name: "Riptide",
  missionPack: "The Riptide Mission Pack",
  time: 75 * 60,
  strikes: 5,
  widgets: 8,
  completions: [
    { time: 20 * 60 + 43, vid: "https://www.youtube.com/watch?v=ZtPcRaqaVMg", completer: "Crazycaleb" },
    {
      time: 13 * 60 + 10,
      vid: "https://www.youtube.com/watch?v=_9FL2PZQMvI",
      completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
    },
    { time: 12 * 60 + 43, vid: "https://www.youtube.com/watch?v=hzme-sxy0aU", completer: "Draket" },
    {
      time: 12 * 60 + 20,
      vid: "https://www.youtube.com/watch?v=YoKOEx9orJw",
      completers: { defuser: "Dicey", experts: ["Azzaman", "Fcbdaboss"] },
    },
    {
      time: 12 * 60 + 7,
      vid: "https://www.twitch.tv/videos/724181368",
      completers: { defuser: "Espik", experts: ["Crazycaleb", "ManiaMate"] },
    },
    { time: 11 * 60 + 29, log: "file=8c93229e37b5cbc5d73f1d109e2ced9a20d24471;bomb=RS0GV1", completer: "Miki2003pl" },
    { time: 10 * 60 + 21, log: "file=64a9998db20b52ee46f5f30df7970b7356d404ae;bomb=9F8PN3", completer: "LegendWilleh" },
    { time: 7 * 60 + 53, log: "file=c1b3b96a2479fa014de80ba8ad0d1fbae06c2e6a;bomb=J36LQ0", completer: "ManiaMate" },
    { time: 7 * 60 + 10, vid: "https://www.youtube.com/watch?v=raZhK_QfOHg", completer: "Whalien" },
    { time: 6 * 60 + 43, log: "file=70c639e7fc17b16246ecc7ccb7f775b94acef9c4;bomb=LI0WK8", completer: "Senri" },
    {
      time: 5 * 60 + 55,
      vid: "https://www.youtube.com/watch?v=idT9wQStet0",
      completers: { defuser: "Senri", experts: ["Danumbah", "Puddle"] },
    },
    { time: 5 * 60 + 35, isFirst: true, igl: true, completer: "Edan" },
    { time: 3 * 60 + 35, log: "file=89c1bd5605ca49de21043f9587e27bdce5798172;bomb=CE8VR8", completer: "Burniel" },
    {
      time: 2 * 60 + 19,
      vid: "https://www.youtube.com/watch?v=wW8jZ1TrAeo",
      completers: { defuser: "Deaf", experts: ["aGood_Usernam3", "Fish"] },
    },
    {
      time: 2 * 60 + 10,
      vid: "https://www.youtube.com/watch?v=0x1O_netDQw&t=35s",
      completers: { defuser: "Bianca", experts: ["Benjamin", "Megum"] },
    },
    {
      time: 1 * 60 + 18,
      vid: "https://www.youtube.com/watch?v=vK32fvahfzo#t=98m20s",
      completers: { defuser: "Rexkix", experts: ["Garuda", "SillyPuppy"] },
    },
  ],
  solvedByTP: true,
  modules: [
    "spwiz3DMaze",
    "spwizAstrology",
    "BattleshipModule",
    "BigCircle",
    "BlackHoleModule",
    "boolMaze",
    "booleanVennModule",
    "ColoredSwitchesModule",
    "combinationLock",
    "CrazyTalk",
    "CreationModule",
    "crystalMaze",
    "cube",
    "CursedDoubleOhModule",
    "DoubleOhModule",
    "equations",
    "fastMath",
    "ForeignExchangeRates",
    "MemoryV2",
    "GridlockModule",
    "KudosudokuModule",
    "labyrinth",
    "LEDEnc",
    "Listening",
    "MaritimeFlagsModule",
    "Mastermind Cruel",
    "Mastermind Simple",
    "Maze",
    "Memory",
    "MinesweeperModule",
    "MorseV2",
    "theNumber",
    "numberCipher",
    "OnlyConnectModule",
    "PartyTime",
    "spwizPerspectivePegs",
    "RockPaperScissorsLizardSpockModule",
    "qSchlagDenBomb",
    "Semaphore",
    "SimonSendsModule",
    "SkewedSlotsModule",
    "skinnyWires",
    "sphere",
    "ButtonV2",
    "SynchronizationModule",
    "Tangrams",
    "TenButtonColorCode",
    "TextField",
    "TwoBits",
    "valves",
    "webDesign",
    "wire",
    "WireSequence",
    "YahtzeeModule",
    "ALL_MODS_NEEDY",
  ],
};
