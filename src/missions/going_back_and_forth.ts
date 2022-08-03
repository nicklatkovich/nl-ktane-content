import { MissionInfo } from "nl-ktane-lib";

export const going_back_and_forth: MissionInfo = {
  name: "Going Back and Forth",
  missionPack: "Guonuo's M.E.G Missions",
  time: 75 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    {
      time: 9 * 60 + 32,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=J-U0ZYDKvqU",
      completers: { defuser: "Zefod", experts: ["Burniel", "Edan"] },
    },
    { time: 2 * 60 + 43, log: "file=6a781b9b277f3aa636460547fb6f53a9c464120f;bomb=XH5JL6", completer: "LegendWilleh" },
  ],
  modules: [
    "forgetMeLater",
    "iPhone",
    "cookieJars",
    "TurnTheKey",
    "BlackHoleModule",
    "BartendingModule",
    "Laundry",
    "NeedyBeer",
    "simonSamples",
    "qFunctions",
    "encryptionBingo",
    "GridlockModule",
    "klaxon",
    "ExtendedPassword",
    [2, "logicalButtonsModule"],
    "AdjacentLettersModule",
    "simonSubdivides",
    "OddOneOutModule",
    "FaultyBackgrounds",
    "faultyDigitalRootModule",
    "ksmAmazeingButtons",
    "jewelVault",
    "BinaryPuzzleModule",
    "TheBioscanner",
    "BrokenButtonsModule",
    "burgerAlarm",
    "constellations",
    "countdown",
    "DividedSquaresModule",
    "HexamazeModule",
    "SimonSingsModule",
    [2, "ledGrid"],
    "NonogramModule",
    "objectShows",
    "oneLine",
    "pieModule",
    [2, "PixelArt"],
    "rubiksClock",
    "SeaShells",
    "BigSwitch",
    "TicTacToeModule",
    "YahtzeeModule",
    "GameOfLifeSimple",
    "spwiz3DMaze",
  ],
};
