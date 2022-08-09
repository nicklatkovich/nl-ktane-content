import { MissionInfo } from "nl-ktane-lib";

export const step_up: MissionInfo = {
  name: "Step Up",
  missionPack: "Alpha Missions",
  time: 70 * 60,
  strikes: 3,
  widgets: 5,
  completions: [
    { time: 6 * 60 + 52, vid: "https://www.youtube.com/watch?v=Dxk5iReBkV8", completer: "t-chen" },
    {
      time: 6 * 60 + 27,
      log: "file=22ec1389a22a3acde999ca320f165cad323c11b2;bomb=ED8KI2",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    {
      time: 2 * 60 + 7,
      isFirst: true,
      log: "file=972813af016b6530d5d53df626006ce58608b5bb;bomb=683XW8",
      completer: "Asew",
    },
  ],
  modules: [
    "forgetMazeNot",
    [2, "DividedSquaresModule"],
    [2, "BlackHoleModule"],
    "NeedyBeer",
    "bigegg",
    "ModuleRick",
    "mysterymodule",
    "alphabet",
    "CrazyTalk",
    "jukebox",
    "Backgrounds",
    "coloredMaze",
    "spinningButtons",
    "complicatedButtonsModule",
    "FestivePianoKeys",
    "lgndLEDMath",
    "BitOps",
    "giantsDrink",
    "radiator",
    "blockbusters",
    "countdown",
    "instructions",
    "KritBlackjack",
    "catchphrase",
    "DoubleOhModule",
    "algebra",
    "caesarCycle",
    "ChordQualities",
    "CoordinatesModule",
    "MorseAMaze",
    "simonsStar",
    "CheapCheckoutModule",
    "DiscoloredSquaresModule",
    "MarbleTumbleModule",
    "ColorfulInsanity",
    "snakesAndLadders",
    "MazeV2",
    "shikaku",
    "mischmodul",
    "R4YMultiColoredSwitches",
    "SimonSingsModule",
    "hexiomModule",
    "WhosOnFirstTranslated",
    "PasswordsTranslated",
    "BigButtonTranslated",
  ],
};