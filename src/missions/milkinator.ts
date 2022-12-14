import { MissionInfo } from "nl-ktane-lib";

export const milkinator: MissionInfo = {
  name: "Milkinator",
  missionPack: "Asew's Unassuming Incendiaries",
  author: "Milkayy",
  time: 60 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    { time: 15 * 60 + 33, log: "file=a8382bbaaba6a2eda68119783088f75e35c26b70;bomb=3A9IS1", completer: "LegendWilleh" },
    {
      time: 6 * 60 + 18,
      isFirst: true,
      log: "file=a35731291ad70db93ede254aed0d24d1ca4dff35;bomb=FI9BX8",
      completer: "Shummel",
    },
    { time: 3 * 60 + 32, vid: "https://www.youtube.com/watch?v=EJNNrVPlG8M", completer: "Benjamin" },
    { time: 3 * 60 + 12, log: "file=a8587fac9a0d768a50408f5cf9071a83c3970965;bomb=9N6NV1", completer: "Zefod" },
    { time: 10, log: "file=62f1579fc03c4f511320fb30156453e3da209a96;bomb=DZ2HN1", completer: "ManiaMate" },
  ],
  modules: [
    "OneDimensionalMaze",
    "GSNineBall",
    "Addition",
    "BartendingModule",
    "benedictCumberbatch",
    [2, "BigCircle"],
    "BlackHoleModule",
    "BlindMaze",
    "bloxx",
    "boggle",
    "GSBottomGear",
    "challengeAndContact",
    "lgndColoredKeys",
    "ColoredSwitchesModule",
    "complexKeypad",
    "countdown",
    "CruelPianoKeys",
    "DACH",
    "DecoloredSquaresModule",
    "bigegg",
    "faultyDigitalRootModule",
    "FlashMemory",
    "forgetMazeNot",
    "freeParking",
    "identityParade",
    "KMazeyTalk",
    "miiIdentification",
    "modkit",
    "ModuleRick",
    "needlesslyComplicatedButton",
    "NotMaze",
    "orangeArrowsModule",
    "orderedKeys",
    "MazeV2",
    "Poker",
    "PolyhedralMazeModule",
    "RubiksCubeModule",
    "simonSimons",
    "SimonV2",
    "SouvenirModule",
    "theSwan",
    "tWords",
    "UncoloredSquaresModule",
    "unrelatedAnagrams",
    "kataWireOrdering",
    "ZooModule",
  ],
};
