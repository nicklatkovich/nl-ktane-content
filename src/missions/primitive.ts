import { MissionInfo } from "nl-ktane-lib";

export const primitive: MissionInfo = {
  name: "Primitive",
  missionPack: "Espik's Harder Missions",
  time: 95 * 60 + 1,
  strikes: 7,
  widgets: 5,
  completions: [
    { time: 3 * 60 + 43, log: "file=63c2f39f4c68c3325d93e51ab2212eb9b6faee7b;bomb=W12NT0", completer: "LegendWilleh" },
    {
      time: 2 * 60 + 30,
      isFirst: true,
      log: "file=251161f2ba5a8ec2bbf36568263c6e5819c1fc2b;bomb=667DJ8",
      completers: { defuser: "Zefod", experts: ["Deaf", "Edan"] },
    },
    { time: 2 * 60, log: "file=344043188c1cd480c328ff490a342f20fd8300ad;bomb=2W5ZT7", completer: "ManiaMate" },
  ],
  modules: [
    "PianoKeys",
    "Semaphore",
    "switchModule",
    "WordScrambleModule",
    "Listening",
    "OrientationCube",
    "MemoryV2",
    "Logic",
    "TurnTheKey",
    "TurnTheKeyAdvanced",
    "spwiz3DMaze",
    "alphabet",
    "spwizPerspectivePegs",
    "murder",
    "shapeshift",
    "EnglishTest",
    "AdjacentLettersModule",
    "SouvenirModule",
    "BattleshipModule",
    "DoubleOhModule",
    "CoordinatesModule",
    "webDesign",
    "fizzBuzzModule",
    "ZooModule",
    "ColorMorseModule",
    "BigCircle",
    "ColoredSwitchesModule",
    "GameOfLifeCruel",
    "SetModule",
    "hunting",
    "algebra",
    "maintenance",
    "radiator",
    "ledGrid",
    "errorCodes",
    "rubiksClock",
    "logicGates",
    "Tangrams",
    "moon",
    "graffitiNumbers",
    "SimonSingsModule",
    "synonyms",
    "binaryTree",
    "lightspeed",
    "stockMarket",
    "MazeScrambler",
    "UncoloredSquaresModule",
    "benedictCumberbatch",
    "boolMaze",
    "quintuples",
    "bases",
    "plungerButton",
    "jackOLantern",
    "catchphrase",
    "qSchlagDenBomb",
    "challengeAndContact",
    "KritScripts",
    "TenButtonColorCode",
    "festiveJukebox",
    "BinaryPuzzleModule",
    "RegularCrazyTalkModule",
    "cookieJars",
    "westeros",
    "simonScrambles",
    "unfairCipher",
    "leftandRight",
    "megaMan2",
    "TheHypercubeModule",
    "lgndHiddenColors",
    "vexillology",
    "mazematics",
    "FaultySink",
    "CrypticPassword",
    "MistakeModule",
    "orderedKeys",
    "orangeArrowsModule",
    "matrix",
    "deckOfManyThings",
    "bombDiffusal",
    "antichamber",
    "langtonAnt",
    "insanagrams",
    "partialDerivatives",
  ],
};
