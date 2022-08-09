import { MissionInfo } from "nl-ktane-lib";

export const tsundere: MissionInfo = {
  name: "Tsundere",
  missionPack: "Stargazer's Pack",
  time: 90 * 60,
  strikes: 5,
  widgets: 7,
  completions: [
    {
      time: 33 * 60 + 10,
      log: "file=c584302cd5dbc5c153994032116c72bbf3b91e6d;bomb=SN8LH5",
      completers: { defuser: "Wheaty", experts: ["Danumbah", "Whalien"] },
    },
    { time: 13 * 60 + 6, log: "file=2ea2957e056e0fd5a16301894f26b31273a6e86b;bomb=CD6QL7", completer: "LegendWilleh" },
    {
      time: 13 * 60,
      log: "file=f915221f4a6a16fc327b4bb41e22046b9b38de65;bomb=SC7ZK0",
      completers: { defuser: "Wheaty", experts: ["Megum"] },
    },
    {
      time: 8 * 60 + 3,
      log: "file=3051d214f624459a7892bf65358a9f5135a26637;bomb=LI4SS6",
      completers: { defuser: "Dicey", experts: ["Fish", "Garuda"] },
    },
    {
      time: 5 * 60 + 51,
      log: "file=94670f9ea867fc58489674cc725a698b056fda2f;bomb=603SL5",
      completers: { defuser: "Wheaty", experts: ["Copperkettle", "MageMage"] },
    },
    {
      time: 5 * 60 + 46,
      log: "file=2002681ca1ef7909e184e4902672d604ce39cc95;bomb=404BS3",
      completers: { defuser: "Bianca", experts: ["Benjamin"] },
    },
    {
      time: 5 * 60 + 9,
      log: "file=d8044d91f7342a382415701ce02b28e731f2f650;bomb=4E4HE5",
      completers: { defuser: "Burniel", experts: ["Chestnut"] },
    },
    {
      time: 3 * 60 + 51,
      isFirst: true,
      log: "file=4390ce1efc9fb400799d3f46b0224ad11670d3f1;bomb=3K0PA6",
      completers: { defuser: "Edan", experts: ["ManiaMate"] },
    },
    {
      time: 1 * 60 + 7,
      vid: "https://www.youtube.com/watch?v=gPuO5Ofo1kk",
      completers: { defuser: "Želvík", experts: ["Asmir"] },
    },
  ],
  modules: [
    "MemoryV2",
    [2, "TurnTheKey"],
    "theSwan",
    ["NeedyKnob", "monsplodeWho"],
    "NeedyBeer",
    [2, "NeedyVentGas", "lgndColorMatch", "lgndSnap"],
    "algebra",
    "alphabet",
    "bases",
    "benedictCumberbatch",
    "BigCircle",
    "BitOps",
    [3, "BlackHoleModule"],
    "BlindAlleyModule",
    "blueArrowsModule",
    "BrailleModule",
    "TheBulbModule",
    "burglarAlarm",
    "CaesarCipherModule",
    "calendar",
    "characterShift",
    "ChordQualities",
    "theCodeModule",
    "graphModule",
    "cooking",
    "TheDigitModule",
    "DividedSquaresModule",
    "errorCodes",
    "qFunctions",
    "TheGamepadModule",
    "jackOLantern",
    "lasers",
    "Laundry",
    "LetterKeys",
    "LightCycleModule",
    "maintenance",
    "MinesweeperModule",
    "neutralization",
    "OrientationCube",
    "pieModule",
    "planets",
    "MazeV2",
    "plungerButton",
    "PressX",
    "radiator",
    "RockPaperScissorsLizardSpockModule",
    "RubiksCubeModule",
    "PasswordV2",
    "qSchlagDenBomb",
    "shapeshift",
    "Sink",
    "SkewedSlotsModule",
    "stopwatch",
    "streetFighter",
    "TextField",
    "unfairCipher",
    "unrelatedAnagrams",
    "valves",
    "wastemanagement",
  ],
};