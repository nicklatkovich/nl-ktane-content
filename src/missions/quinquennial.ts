import { MissionInfo } from "nl-ktane-lib";

export const quinquennial: MissionInfo = {
  name: "Quinquennial",
  missionPack: "The Quinquennial",
  time: 120 * 60,
  strikes: 12,
  widgets: 5,
  completions: [
    {
      time: 9 * 60 + 12,
      vid: "https://www.twitch.tv/videos/861136106",
      completers: { defuser: "Espik", experts: ["Garuda", "Procyon"] },
    },
    {
      time: 3 * 60 + 37,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=itCNB3gTIS8",
      completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
    },
    { time: 1 * 60 + 4, log: "file=74a7870ff2ffd6cec4e2847763e9df5cccbabb80;bomb=AM4VI8", completer: "Megum" },
    {
      time: 22,
      vid: "https://www.youtube.com/watch?v=Ff0lKo4btPQ",
      completers: { defuser: "Araca", experts: ["MásQuéÉlite", "twinightcreep0"] },
    },
  ],
  solvedByTP: true,
  modules: [
    [
      2,
      "WhosOnFirst",
      "WireSequence",
      "Morse",
      "Venn",
      "Simon",
      "Password",
      "Memory",
      "Wires",
      "Maze",
      "Keypad",
      "BigButton",
    ],
    ["NeedyVentGas", "NeedyKnob", "NeedyBeer", "3x3Grid"],
    "ColourFlash",
    "PianoKeys",
    "Semaphore",
    "switchModule",
    "TwoBits",
    "combinationLock",
    "SimonV2",
    "MorseV2",
    "graphModule",
    "LetterKeys",
    "MemoryV2",
    "spwizAstrology",
    "Logic",
    "MysticSquareModule",
    "CrazyTalk",
    "MazeV2",
    "PasswordV2",
    "ChessModule",
    "spwiz3DMaze",
    "Laundry",
    "alphabet",
    "resistors",
    "spwizPerspectivePegs",
    "Microcontroller",
    "murder",
    "shapeshift",
    "TheBulbModule",
    "RockPaperScissorsLizardSpockModule",
    "HexamazeModule",
    "ColoredSquaresModule",
    "SouvenirModule",
    "SimonScreamsModule",
    "BattleshipModule",
    "symbolicPasswordModule",
    "WirePlacementModule",
    "DoubleOhModule",
    "CreationModule",
    "RubiksCubeModule",
    "MinesweeperModule",
    "BinaryLeds",
    "YahtzeeModule",
    "Mastermind Simple",
    "GridlockModule",
    "BigCircle",
    "ColoredSwitchesModule",
    "PerplexingWiresModule",
    "GameOfLifeSimple",
    "NonogramModule",
    "SetModule",
    "Color Generator",
    "poetry",
    "buttonSequencesModule",
    "algebra",
    "visual_impairment",
    "Backgrounds",
    "mashematics",
    "ledGrid",
    "Sink",
    "iPhone",
    "burglarAlarm",
    "PressX",
    "wire",
    "cube",
    "DrDoctorModule",
    "jewelVault",
    "digitalRoot",
    "tapCode",
    "BlackHoleModule",
    "simonsStar",
    "doubleColor",
    "UncoloredSquaresModule",
    "snooker",
    "jackOLantern",
    "DividedSquaresModule",
    "instructions",
    "countdown",
    "challengeAndContact",
    "hieroglyphics",
    "spinningButtons",
    "BinaryPuzzleModule",
    "VaricoloredSquaresModule",
    "lgndZoni",
    "BartendingModule",
    "ModuleMaze",
    "mazematics",
    "riskyWires",
    "MistakeModule",
    "purpleArrowsModule",
    "sevenDeadlySins",
    "deckOfManyThings",
    "pictionaryModule",
    "luckyDice",
    "treasureHunt",
    "caesarCycle",
    "ksmAmazeingButtons",
    "theRule",
    "rgbMaze",
    "violetCipher",
    "ksmHighScore",
    "ingredients",
    "scavengerHunt",
    "Microphone",
    "dimensionDisruption",
    "NotWiresword",
    "NotPassword",
    "NotMemory",
    "NotMaze",
    "NotComplicatedWires",
    "NotButton",
    "AppreciateArt",
    "shellGame",
    "exoplanets",
    "lyingIndicators",
    "ladderLottery",
    "100LevelsOfDefusal",
    "RGBSequences",
    "Chalices",
    "commuting",
  ],
};
