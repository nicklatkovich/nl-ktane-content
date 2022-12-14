import { MissionInfo, MissionType } from "nl-ktane-lib";

export const a_bit_of_everything: MissionInfo = {
  name: "A Bit of Everything",
  missionPack: "Reach For The Stars Mission Pack",
  type: MissionType.STATIC,
  completions: [
    { time: 26 * 60 + 23, log: "file=16fb76de6c2d33fdb09d3db4053bc5f670e735cc;bomb=PD3TV3", completer: "LegendWilleh" },
    {
      time: 25 * 60 + 20,
      vid: "https://www.youtube.com/watch?v=3_Mw4hk7fHE",
      log: "file=59b040688f597de3b96d419112ed4920852a63f7;bomb=XJ4RS1",
      completer: "tandyCake",
    },
    { time: 23 * 60 + 26, log: "file=1b8008275566384290ae057c4c93891b5982be18;bomb=TA3EC3", completer: "Puddle" },
    {
      time: 21 * 60 + 59,
      log: "file=57be38aed68dd2500e76bc6d6993f5a01d0dc9fd;bomb=MC3MR0",
      completer: "aGood_Usernam3",
    },
    {
      time: 21 * 60 + 58,
      log: "file=eff72faa3b5fdd2c897a14bf18ff87db9be16a63;bomb=HH4GV1",
      completers: { defuser: "Fish", experts: ["bioplay", "Deaf", "Dicey"] },
    },
    { time: 19 * 60 + 18, log: "file=896b113ded4515524c698d4dcac8ba19a863c6cb;bomb=F69WX2", completer: "Asew" },
    {
      time: 18 * 60 + 11,
      log: "file=615d72eca08db5d40f049ee87805afb10d03a99b;bomb=ND0CB7",
      completer: "Edan",
      isFirst: true,
    },
    {
      time: 14 * 60 + 3,
      vid: "https://www.youtube.com/watch?v=cMJxpTzSVzI",
      log: "file=14ea07d2d68a283382eaaeb51c7deeb827d540ce;bomb=789AA2",
      completers: { defuser: "Zefod", experts: ["Burniel", "Millie-Rose"] },
    },
    {
      time: 13 * 60 + 39,
      log: "file=5704bcf08128d7bf356302c88f250e4c28c75bfd;bomb=JV1LR8",
      completers: { defuser: "Puddle", experts: ["Whalien"] },
    },
    {
      time: 12 * 60 + 44,
      log: "file=bdfa790242c899d3dcb1094e483ebf9eac43faf9;bomb=PW0XQ4",
      completers: { defuser: "Crazycaleb", experts: ["Garuda"] },
    },
    { time: 11 * 60 + 14, log: "file=e04353da943175f1f361d02820fda3c6d6eba8f4;bomb=IM1FW1", completer: "Vincology" },
    { time: 10 * 60 + 22, log: "file=fe0663660e80f6bee674c34da2fa2cdaf03c0dc3;bomb=EK6IE1", completer: "Ulv" },
    { time: 10 * 60 + 18, log: "file=8aeef1d05559347ccb3878489afc77443e78ad75;bomb=KU8EK4", completer: "Diffuse" },
    { time: 10 * 60 + 3, log: "file=432318416a9726fd26f64d984471f34afe0231ec;bomb=P17MT6", completer: "Xorote" },
    { time: 9 * 60 + 22, log: "file=e8dac4773f4dfa13b96fad6177053a4e16fa0431;bomb=7M1ES1", completer: "ManiaMate" },
    {
      time: 5 * 60 + 19,
      vid: "https://www.youtube.com/watch?v=5nZrSFF8k2U",
      log: "file=c327c40fccdd64acbaabf5b699f9ebb2f01c18b4;bomb=4I4VL1",
      completer: "Orinami",
    },
    { time: 4 * 60 + 52, log: "file=51fb58b8005dbf020cb03d61839e1bb797fb4825;bomb=7K9NA4", completer: "Ugh_Sunlight" },
    {
      time: 4 * 60 + 27,
      log: "file=38098b84653c8b88fdfbb15aa6a50887594a6dad;bomb=FH4FL4",
      completers: { defuser: "Bianca", experts: ["Benjamin"] },
    },
    { time: 4 * 60 + 4, log: "file=1d80c3447c23d2ea0f60395b975a96cb0fc746dd;bomb=9Z0JW7", completer: "Lily" },
    { time: 1 * 60 + 40, log: "file=91d9c44925ed59bec3d4dc5e95033ec3fd20b775;bomb=RZ9MP8", completer: "Chestnut" },
  ],
  bombs: [
    {
      time: 30 * 60,
      strikes: 1,
      widgets: 0,
      modules: ["ColorMorseModule", "MorseWar", "reverseMorse"],
    },
    {
      time: 30 * 60,
      strikes: 1,
      widgets: 0,
      modules: ["algebra", "fastMath", "sequencesModule"],
    },
    {
      time: 30 * 60,
      strikes: 1,
      widgets: 0,
      modules: ["NotButton", "ButtonV2", "theTriangleButton"],
    },
    {
      time: 30 * 60,
      strikes: 1,
      widgets: 0,
      modules: ["simonSimons", "simonSounds", "SimonV2"],
    },
    {
      time: 30 * 60,
      strikes: 1,
      widgets: 0,
      modules: ["lgndColoredKeys", "ColoredSquaresModule", "ColorfulMadness"],
    },
    {
      time: 60 * 60,
      strikes: 3,
      widgets: 0,
      modules: [
        "redCipher",
        "whiteCipher",
        "yellowCipher",
        [
          14,
          "algebra",
          "CaesarCipherModule",
          "lgndColoredKeys",
          "ColoredSquaresModule",
          "ColorfulMadness",
          "ColorMorseModule",
          "CrazyTalk",
          "fastMath",
          "HexamazeModule",
          "insanetalk",
          "Logic",
          "MazeScrambler",
          "modernCipher",
          "MorseWar",
          "NotButton",
          "QuoteCrazyTalkEndQuote",
          "reverseMorse",
          "sequencesModule",
          "sevenWires",
          "simonSimons",
          "simonSounds",
          "SimonV2",
          "skinnyWires",
          "ButtonV2",
          "SuperlogicModule",
          "theTriangleButton",
          "Ultralogic",
          "USA",
          "vigenereCipher",
          "WirePlacementModule",
        ],
      ],
    },
    {
      time: 30 * 60,
      strikes: 1,
      widgets: 0,
      modules: ["Logic", "SuperlogicModule", "Ultralogic"],
    },
    {
      time: 30 * 60,
      strikes: 1,
      widgets: 0,
      modules: ["HexamazeModule", "MazeScrambler", "USA"],
    },
    { time: 30 * 60, strikes: 1, widgets: 0, modules: ["sevenWires", "skinnyWires", "WirePlacementModule"] },
    { time: 30 * 60, strikes: 1, widgets: 0, modules: ["CrazyTalk", "insanetalk", "QuoteCrazyTalkEndQuote"] },
    { time: 30 * 60, strikes: 1, widgets: 0, modules: ["CaesarCipherModule", "modernCipher", "vigenereCipher"] },
  ],
};
