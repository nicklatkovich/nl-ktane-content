import { MissionInfo } from "nl-ktane-lib";

export const sink_or_swim: MissionInfo = {
  name: "Sink or Swim",
  missionPack: "Raid: Twitch Plays Mission Pack",
  time: 88 * 60,
  strikes: 8,
  widgets: 8,
  completions: [
    {
      time: 16 * 60 + 34,
      isFirst: true,
      log: "file=a7ebe1026baa896138dad8e16d4b7a5c123d23c9;bomb=094QH9",
      completer: "LegendWilleh",
    },
    {
      time: 8 * 60 + 42,
      vid: "https://www.youtube.com/watch?v=ZDDBr9sEnso",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Megum"] },
    },
  ],
  solvedByTP: true,
  modules: [
    [4, "theSwan"],
    [3, "BattleshipModule"],
    [
      16,
      "alphabet",
      "AnagramsModule",
      "TheBulbModule",
      "ColoredSquaresModule",
      "ColourFlash",
      "complicatedButtonsModule",
      "graphModule",
      "CrazyTalk",
      "errorCodes",
      "ledGrid",
      "LetterKeys",
      "mortalKombat",
      "PianoKeys",
      "poetry",
      "KeypadV2",
      "SeaShells",
      "shapeshift",
      "simonScrambles",
      "SimonV2",
      "BigSwitch",
      "switchModule",
      "UncoloredSquaresModule",
      "USA",
      "WirePlacementModule",
      "WordSearchModule",
      "lgndZoni",
      "WordScrambleModule",
    ],
    [
      40,
      "OneHundredAndOneDalmatiansModule",
      "AdjacentLettersModule",
      "spwizAdventureGame",
      "algebra",
      "alphabetNumbers",
      "spwizAstrology",
      "bases",
      "benedictCumberbatch",
      "BigCircle",
      "BinaryLeds",
      "BinaryPuzzleModule",
      "BitmapsModule",
      "BlindMaze",
      "booleanVennModule",
      "BrokenButtonsModule",
      "burgerAlarm",
      "burglarAlarm",
      "challengeAndContact",
      "ChessModule",
      "ChordQualities",
      "Color Decoding",
      "ColoredSwitchesModule",
      "ColorfulInsanity",
      "ColorfulMadness",
      "colormath",
      "ColorMorseModule",
      "CreationModule",
      "CryptModule",
      "FollowTheLeaderModule",
      "TheGamepadModule",
      "GridlockModule",
      "GridMatching",
      "HexamazeModule",
      "lgndHiddenColors",
      "horribleMemory",
      "iceCreamModule",
      "lasers",
      "Laundry",
      "Listening",
      "Mastermind Simple",
      "Microcontroller",
      "murder",
      "theNumber",
      "OrientationCube",
      "Probing",
      "resistors",
      "screw",
      "ButtonV2",
      "symbolicCoordinates",
      "VaricoloredSquaresModule",
    ],
    [
      14,
      "spwiz3DMaze",
      "3dTunnels",
      "arithmelogic",
      "BlackHoleModule",
      "CoordinatesModule",
      "CruelPianoKeys",
      "cube",
      "curriculum",
      "dragonEnergy",
      "EncryptedMorse",
      "factoryMaze",
      "fastMath",
      "fizzBuzzModule",
      "GameOfLifeSimple",
      "GameOfLifeCruel",
      "greekCalculus",
      "iPhone",
      "jewelVault",
      "KudosudokuModule",
      "LEGOModule",
      "lightspeed",
      "Mastermind Cruel",
      "PatternCubeModule",
      "rubiksClock",
      "ShapesBombs",
    ],
  ],
};
