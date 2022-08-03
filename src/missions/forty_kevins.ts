import { MissionInfo } from "nl-ktane-lib";

export const forty_kevins: MissionInfo = {
  name: "Forty-Kevins",
  missionPack: "Tandy's Funky Missions",
  time: 65 * 60,
  strikes: 5,
  widgets: 5,
  completions: [
    { time: 31 * 60 + 39, log: "file=7a39a4e491bbf195b4deb3613f76d0191d7cae1c;bomb=3U8PE9", completer: "LegendWilleh" },
    {
      time: 14 * 60 + 8,
      vid: "https://www.youtube.com/watch?v=9eXBfyvZjYo",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    { time: 13 * 60 + 6, log: "file=0f718886f3dff541a7267be7d353500bb6fd3369;bomb=G62SE7", completer: "Dicey" },
    { time: 12 * 60 + 20, log: "file=d590e819d28e90aadb200b37c7b9d2c01890bd5b;bomb=GT9EB5", completer: "Diffuse" },
    { time: 11 * 60 + 3, log: "file=6627f9344e62fea148145941f0a6b97412e6a34d;bomb=5R6BW0", completer: "Puddle" },
    { time: 9 * 60 + 5, log: "file=1730bdd28ab855e8df70ddc139bde91c611b9eac;bomb=9N2EQ1", completer: "Garuda" },
    {
      time: 2 * 60 + 56,
      isFirst: true,
      log: "file=6f6e4d18a58deb879fb118ef94a49b7a1b1b46ad;bomb=IZ3TT5",
      completer: "Asew",
    },
    {
      time: 1 * 60 + 42,
      vid: "https://www.youtube.com/watch?v=CwaQTVCbwB4",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Burniel"] },
    },
    { time: 1 * 60 + 5, log: "file=3aba8907b76e108761c81c8e5d5246593195873a;bomb=AE6EG0", completer: "ManiaMate" },
  ],
  modules: [
    "PianoKeys",
    "FestivePianoKeys",
    "theRule",
    "instructions",
    "graphModule",
    "redArrowsModule",
    "klaxon",
    "SimonShapesModule",
    "InfiniteLoop",
    "ksmRainbowArrows",
    "GameOfLifeCruel",
    "reorderedKeys",
    "RegularHexpressions",
    "palindromes",
    [3, "sorting"],
    "GuessWho",
    "spwizAstrology",
    "resistors",
    "HexamazeModule",
    "MafiaModule",
    "HumanResourcesModule",
    "qFunctions",
    "geneticSequence",
    "digitString",
    "riskyWires",
    "xmorse",
    "R4YUncoloredSwitches",
    "kataWireOrdering",
    "brushStrokes",
    [2, "NamingConventions"],
    "smallCircle",
    "Semaphore",
    "spwiz3DMaze",
    "KritHomework",
    "blockbusters",
    "simonSounds",
    "ksmBobBarks",
    "TwoBits",
    "KritHoldUps",
    "MinesweeperModule",
    "matchematics",
    "switchModule",
    "mischmodul",
    "CrackboxModule",
  ],
};
