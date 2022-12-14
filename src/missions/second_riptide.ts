import { MissionInfo } from "nl-ktane-lib";

export const second_riptide: MissionInfo = {
  name: "Second Riptide",
  missionPack: "The Riptide Mission Pack",
  time: 80 * 60,
  strikes: 6,
  widgets: 8,
  completions: [
    {
      time: 32 * 60 + 17,
      vid: "https://www.youtube.com/watch?v=ap7eM0r5cpE",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel", "Megum"] },
    },
    {
      time: 29 * 60 + 14,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=n7-XKLI536M",
      completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
    },
    { time: 19 * 60 + 57, log: "file=50d57121a0b25445d5b16d4429570b7ae5150bc8;bomb=3F6VN1", completer: "Dicey" },
    {
      time: 15 * 60 + 25,
      vid: "https://www.youtube.com/watch?v=hNc4pU26Tto",
      completers: { defuser: "Deaf", experts: ["aGood_Usernam3", "Crazycaleb", "Fish"] },
    },
    {
      time: 14 * 60 + 56,
      vid: "https://www.youtube.com/watch?v=w0fuW639qJ0",
      completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
    },
    {
      time: 5 * 60 + 10,
      log: "file=ed1e0587da0968d8838540a4ff15a9340f3564b5;bomb=EM5IZ9",
      completers: { defuser: "Vincology", experts: ["Crazycaleb", "Garuda"] },
    },
    { time: 4 * 60, log: "file=5fa43eb9ec80ec5b2aa64937e6dcf8b6ecb34e20;bomb=5T9CC5", completer: "LegendWilleh" },
    { time: 3 * 60 + 58, log: "file=23e427b0673013ae3ce2983f2c72af074f64cee8", completer: "Danumbah" },
    {
      time: 2 * 60 + 59,
      log: "file=e64123a1be324c7a9cfe117acdaf567db83dc22b;bomb=WV0HN8",
      completers: { defuser: "SillyPuppy", experts: ["Draket", "Rexkix"] },
    },
  ],
  solvedByTP: true,
  modules: [
    "MistakeModule",
    "AnsweringCanBeFun",
    "spwizAstrology",
    "BartendingModule",
    "NeedyBeer",
    "BigCircle",
    "BlackHoleModule",
    "challengeAndContact",
    "coffeebucks",
    "ColoredSwitchesModule",
    "combinationLock",
    "graphModule",
    "CreationModule",
    "boolMazeCruel",
    "cruelCountdown",
    "crystalMaze",
    "CursedDoubleOhModule",
    "DoubleOhModule",
    "MemoryV2",
    "giantsDrink",
    "hangover",
    "hereditaryBaseNotationModule",
    "hieroglyphics",
    "KudosudokuModule",
    "Laundry",
    "manometers",
    "MaritimeFlagsModule",
    "MinesweeperModule",
    "moduleListening",
    "monsplodeFight",
    "neutralization",
    "neutrinos",
    "NonogramModule",
    "nonverbalSimon",
    "OnlyConnectModule",
    "PartyTime",
    "PatternCubeModule",
    "playfairCycle",
    "MazeV2",
    "radiator",
    "safetySquare",
    "qSchlagDenBomb",
    "SeaShells",
    "Semaphore",
    "sevenWires",
    "SimonSendsModule",
    "Sink",
    "ButtonV2",
    "SynchronizationModule",
    "TenButtonColorCode",
    "treasureHunt",
    "TwoBits",
    "unfairCipher",
    "UnownCipher",
    "YahtzeeModule",
  ],
};
