import { MissionInfo } from "nl-ktane-lib";

export const take_notes: MissionInfo = {
  name: "Take Notes",
  missionPack: "Raid: Twitch Plays Mission Pack",
  time: 90 * 60,
  strikes: 5,
  widgets: 8,
  completions: [
    {
      time: 13 * 60 + 36,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=wUdZB8ydOQg",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel"] },
    },
  ],
  solvedByTP: true,
  modules: [
    [5, "SouvenirModule"],
    "NeedyVentV2",
    [
      30,
      "alphabet",
      "BitOps",
      "TheBulbModule",
      "CaesarCipherModule",
      "chineseCounting",
      "theCodeModule",
      "lgndColoredKeys",
      "ColoredSquaresModule",
      "ColoredSwitchesModule",
      "complexKeypad",
      "complicatedButtonsModule",
      "graphModule",
      "CornersModule",
      "countdown",
      "CrazyTalk",
      "cruelDigitalRootModule",
      "digitalRoot",
      "doubleColor",
      "DoubleOhModule",
      "Emoji Math",
      "errorCodes",
      "europeanTravel",
      "ExtendedPassword",
      "greenArrowsModule",
      "identityParade",
      "jackOLantern",
      "jukebox",
      "LEDEnc",
      "ledGrid",
      "lgndLEDMath",
      "LetterKeys",
      "Listening",
      "mashematics",
      "MazeScrambler",
      "Microcontroller",
      "MorseWar",
      "mortalKombat",
      "NandMs",
      "orangeArrowsModule",
      "poetry",
      "purpleArrowsModule",
      "redArrowsModule",
      "RockPaperScissorsLizardSpockModule",
      "KeypadV2",
      "simonScrambles",
      "BigSwitch",
      "switchModule",
      "TextField",
      "UncoloredSquaresModule",
      "lgndZoni",
    ],
    [
      34,
      "spwiz3DMaze",
      "AdjacentLettersModule",
      "spwizAdventureGame",
      "algebra",
      "alphabetNumbers",
      "spwizAstrology",
      "BartendingModule",
      "BinaryLeds",
      "BinaryPuzzleModule",
      "BitmapsModule",
      "BlindMaze",
      "blueArrowsModule",
      "booleanVennModule",
      "BrailleModule",
      "buttonSequencesModule",
      "CheapCheckoutModule",
      "ChessModule",
      "ChordQualities",
      "Color Decoding",
      "ColorfulInsanity",
      "ColorfulMadness",
      "colormath",
      "ColorMorseModule",
      "CoordinatesModule",
      "CreationModule",
      "cruelCountdown",
      "CryptModule",
      "DiscoloredSquaresModule",
      "fastMath",
      "fizzBuzzModule",
      "FlagsModule",
      "TheGamepadModule",
      "geneticSequence",
      "GridlockModule",
      "HexamazeModule",
      "lgndHiddenColors",
      "horribleMemory",
      "HumanResourcesModule",
      "iceCreamModule",
      "lasers",
      "MafiaModule",
      "modernCipher",
      "ModuleMaze",
      "monsplodeFight",
      "monsplodeCards",
      "murder",
      "MysticSquareModule",
      "neutralization",
      "OnlyConnectModule",
      "OrientationCube",
      "pieModule",
      "Probing",
      "retirement",
      "reverseMorse",
      "shapeshift",
      "SillySlots",
      "SimonScreamsModule",
      "simonsStar",
      "ThirdBase",
      "visual_impairment",
    ],
    "jewelVault",
    "KudosudokuModule",
  ],
};
