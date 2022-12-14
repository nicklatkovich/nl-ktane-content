import { MissionInfo } from "nl-ktane-lib";

export const mario_emoji_frowning: MissionInfo = {
  name: "Mario 🙁",
  missionPack: "Tandy's Funky Missions",
  time: 70 * 60,
  strikes: 6,
  widgets: 5,
  completions: [
    { time: 27 * 60 + 1, log: "file=07ade228002e07f3ca13a8c9cea339884668d5b8;bomb=A45CJ8", completer: "LegendWilleh" },
    {
      time: 22 * 60 + 7,
      isFirst: true,
      log: "file=d2cc6868708cce031bbed609646fcc4d2caaae8f;bomb=3U4XF1",
      completer: "Edan",
    },
    { time: 21 * 60 + 6, log: "file=2487bcf1e5800a4860a5402b86171a07f8034d27;bomb=QD9EQ3", completer: "Puddle" },
    {
      time: 14 * 60 + 47,
      log: "file=3447be4c4a0485fcd8dc0b03d646d2cc679293bb;bomb=LW8NQ5",
      completers: { defuser: "Garuda", experts: ["Cookiepocalypse", "Fish"] },
    },
    { time: 6 * 60 + 53, log: "file=fff55408a30e0518ef1a6be915f24783a3f829ac;bomb=D23GK1", completer: "Dicey" },
  ],
  solvedByTP: true,
  modules: [
    "RemoteTurnTheKeys",
    "ladders",
    "SimonShoutsModule",
    "SillySlots",
    "KudosudokuModule",
    "TheArena",
    "classicalOrder",
    "xmorse",
    "kataStripedKeys",
    "Bowling",
    "ChessModule",
    "NumberPad",
    "murder",
    "MusicRhythms",
    "Painting",
    "pieModule",
    "emoticonMathModule",
    "bases",
    "simonScrambles",
    "theTriangleButton",
    "caesarCycle",
    "OrientationCube",
    "golf",
    "TwennyWan",
    "pixelcipher",
    "RGBSequences",
    "interpunct",
    "smallCircle",
    "sugarSkulls",
    "Questionmark",
    "hunting",
    "visual_impairment",
    "mineseeker",
    "coffeebucks",
    "SimonSpinsModule",
    "KritScripts",
    "TheHypercubeModule",
    "divisibleNumbers",
    "NandMs",
    "purpleArrowsModule",
    "kyudoku",
    "rullo",
    "rainModule",
    "countdown",
    "bloxx",
    "widdershins",
    "iconic",
  ],
};
