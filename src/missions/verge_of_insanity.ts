import { MissionInfo } from "nl-ktane-lib";

export const verge_of_insanity: MissionInfo = {
  name: "Verge of Insanity",
  missionPack: "Flyer's Mission Pack",
  time: 90 * 60,
  strikes: 4,
  widgets: 5,
  completions: [
    { time: 35 * 60 + 22, log: "file=c868141839ee8e76249f8016457b98a2e35f8d1f;bomb=KG5KL9", completer: "LegendWilleh" },
    {
      time: 15 * 60 + 32,
      log: "file=25955c9e3810bff7b00b022a578bc650565cc9bf;bomb=BJ1FX1",
      completers: { defuser: "Garuda", experts: ["Deaf", "Rexkix"] },
    },
    { time: 11 * 60 + 7, vid: "https://www.youtube.com/watch?v=cksh_wjjIWQ", completer: "Benjamin" },
    { time: 3 * 60 + 58, log: "file=1df5a9428580b78a8f15df874a1463d41d0f2b8f;bomb=R64KB3", completer: "Diffuse" },
    { time: 3, isFirst: true, vid: "https://www.youtube.com/watch?v=gwmgubd7Zsg", completer: "Deaf" },
  ],
  modules: [
    "forgetThis",
    "TurnTheKey",
    "MemoryV2",
    "DividedSquaresModule",
    "HexiEvilFMN",
    "mysterymodule",
    "SouvenirModule",
    "MysticSquareModule",
    "navinums",
    "DecoloredSquaresModule",
    "deckOfManyThings",
    "colorAddition",
    "flashingArrowsModule",
    "modkit",
    "numberedButtonsModule",
    "regretbFiltering",
    "vennDiagram",
    "thewitness",
    "DiscoloredSquaresModule",
    "spwiz3DMaze",
    "algebra",
    "bases",
    "BigCircle",
    "BinaryPuzzleModule",
    "BitOps",
    [2, "BlackHoleModule"],
    [3, "StareModule"],
    "ButtonV2",
    "sphere",
    "snooker",
    "SimonSingsModule",
    "Signals",
    "siffron",
    "sequencesModule",
    "PasswordV2",
    "rullo",
    "primeEncryption",
    "PrimeChecker",
    "PointOfOrderModule",
    "PixelArt",
    "PatternCubeModule",
    "partialDerivatives",
    "unfairCipher",
    "SkewedSlotsModule",
  ],
};
