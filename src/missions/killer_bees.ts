import { MissionInfo } from "nl-ktane-lib";

export const killer_bees: MissionInfo = {
  name: "Killer Bees",
  missionPack: "The Swarm",
  time: 49 * 60,
  strikes: 4,
  widgets: 5,
  completions: [
    {
      time: 8 * 60 + 34,
      isFirst: true,
      log: "file=f8500f63964308ec6211f5ac4129dd826bb7a892;bomb=0X9VL8",
      completer: "LegendWilleh",
    },
    {
      time: 5 * 60 + 5,
      log: "file=dfb3e885134f332986e8af3faaaab8976fe7782a;bomb=UR9VJ9",
      completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
    },
    {
      time: 3 * 60 + 27,
      vid: "https://www.youtube.com/watch?v=RS3VXr9Ky5k",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel", "Megum"] },
    },
    { time: 1 * 60 + 37, vid: "https://youtu.be/1ZxUiJy12GU", completer: "Dicey" },
  ],
  modules: [
    "MorseV2",
    "graphModule",
    "spwizAdventureGame",
    "AdjacentLettersModule",
    "RubiksCubeModule",
    "screw",
    "XRayModule",
    "MorseAMaze",
    "FlagsModule",
    "sonic",
    "PolyhedralMazeModule",
    "poetry",
    "SimonV2",
    "stopwatch",
    "sun",
    "Playfair",
    "logicalButtonsModule",
    "SimonSendsModule",
    "turtleRobot",
    "MaritimeFlagsModule",
    "SplittingTheLootModule",
    "LionsShareModule",
    "accumulation",
    "MahjongModule",
    "hieroglyphics",
    "MadMemory",
    "BartendingModule",
    "Questionmark",
    "lgndLEDMath",
    "subscribeToPewdiepie",
    "safetySquare",
    "X01",
    "riskyWires",
    "daylightDirections",
    "yellowArrowsModule",
    "matrix",
    "wire",
    "GridMatching",
    "greekCalculus",
    "subways",
    "USA",
    "MazeScrambler",
    "mazematics",
    "blockbusters",
    "BrailleModule",
    "ExtendedPassword",
    "YahtzeeModule",
    "TextField",
    "BrokenButtonsModule",
    "ubermodule",
    "WordSearchModulePL",
    "PianoKeys",
    "qSchlagDenBomb",
    "deckOfManyThings",
    "alphabeticOrder",
  ],
};
