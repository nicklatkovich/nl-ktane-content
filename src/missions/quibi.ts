import { MissionInfo } from "nl-ktane-lib";

export const quibi: MissionInfo = {
  name: "Quibi",
  missionPack: "Espik's Harder Missions",
  time: 10 * 60,
  strikes: 1,
  widgets: 0,
  completions: [
    { time: 3 * 60 + 3, log: "file=1e35a7de15ab864acc1afa63f8ef849b8cfe8f38", completer: "LegendWilleh" },
    { time: 2 * 60 + 27, log: "file=21d4df3c0e3acd108ac5753ba7442494b89e6ead;bomb=EW3MN2", completer: "Miki2003pl" },
    {
      time: 1 * 60 + 51,
      vid: "https://www.youtube.com/watch?v=BAdthF9Ok9s",
      completers: { defuser: "Orinami ", experts: ["Lily", "Sierra"] },
    },
    {
      time: 1 * 60 + 48,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=Cu9Gb_sMvvE&t=1s",
      completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
    },
    {
      time: 1 * 60 + 39,
      log: "file=b3473aa41a01b9c411371da9db0e7dfe9b97ad38;bomb=FX3EM0",
      completers: { defuser: "Deaf", experts: ["eXish"] },
    },
    {
      time: 1 * 60 + 33,
      vid: "https://youtu.be/evnBMcQEgx4",
      completers: { defuser: "Gwendolyn", experts: ["Puddle"] },
    },
    {
      time: 1 * 60 + 29,
      log: "file=933301b405ad7f1f5618ac9ec7ba2ec9852f6432;bomb=P48RX7",
      completers: { defuser: "Puddle", experts: ["Danumbah", "weird"] },
    },
    { time: 1 * 60 + 16, log: "file=8bf72517f8c14792cb37e202d75468efcd5b0a3e;bomb=EW8XK8", completer: "Puddle" },
    { time: 1 * 60 + 16, log: "file=ee98129096e260da2c7491f0c56fe1e4cc8a89f8;bomb=TE6JX9", completer: "Asew" },
    { time: 1 * 60 + 16, log: "file=debfeadb3e928c2f81408c13c1de58407a735451;bomb=MN9MJ7", completer: "Shadow Meow" },
    {
      time: 1 * 60 + 5,
      vid: "https://www.youtube.com/watch?v=-clLMnkM2jY",
      completers: { defuser: "Benjamin", experts: ["Bianca"] },
    },
    { time: 1 * 60 + 1, log: "file=55e9f97ac6fd15ce228bfb01bf194d066036c3f3;bomb=NF3PT0", completer: "Diffuse" },
    { time: 50, log: "file=315013dd31be76c945c0ea45eb3d8982d67aef37;bomb=460EG7", completer: "Edan" },
    { time: 43, log: "file=fc92408fd7acf49d3e175356197566b764dced12;bomb=D27GM5", completer: "Garuda" },
    { time: 38, log: "file=f5fb948d9fd23be4a40e10256fcc019babafa995;bomb=003TM5", completer: "Burniel" },
    { time: 26, log: "file=1ec98dc0b28b017f35929be9474964c484f231f3", completer: "Fish" },
    { time: 8, log: "file=053e155c542a3d9aa8a7c85ccc57a86aafe8ede5;bomb=AF6GL3", completer: "Crazycaleb" },
    { time: 6, log: "file=5e2e200ba4528b0483948341fc3be23d79e6222a;bomb=H11SP7", completer: "eXish" },
    {
      time: 1,
      log: "file=072b9edddabae78d2005e08bd2bbe6e769e54702;bomb=IN2SD0",
      completers: { defuser: "eXish", experts: ["Deaf"] },
    },
  ],
  modules: [
    "MistakeModule",
    "alphabet",
    "TDSAmogus",
    "AnagramsModule",
    "Backgrounds",
    "base1",
    "BigButtonTranslated",
    "BlackHoleModule",
    "breaktime",
    [2, "BigButton"],
    "TheCalculator",
    "colorNumbers",
    "colorOneTwo",
    "combinationLock",
    [2, "Venn"],
    "digitalRoot",
    "TDSDossierModifier",
    "bigegg",
    "functionalMapping",
    "gatekeeper",
    [2, "Keypad"],
    "LetterKeys",
    "Listening",
    "logicChess",
    "mashematics",
    "Mastermind Simple",
    "ModuleRick",
    "modulo",
    "TDSNya",
    [2, "Password"],
    "plungerButton",
    "PrimeChecker",
    [2, "Simon"],
    "StandardCrazyTalk",
    "switchModule",
    "timeKeeper",
    "valuedKeysModule",
    [2, "Wires"],
    "thewitness",
    "WordScrambleModule",
    "workingTitle",
  ],
};
