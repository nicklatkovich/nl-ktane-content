import { MissionInfo } from "nl-ktane-lib";

export const great_berate_practice: MissionInfo = {
  name: "Great Berate Practice",
  missionPack: "EliottChallengePack",
  time: 70 * 60,
  strikes: 10,
  widgets: 5,
  completions: [
    {
      time: 19 * 60 + 47,
      isFirst: true,
      log: "file=c3650b07ef02989309703081a230401fa59b299c;bomb=TE4SX9",
      completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
    },
    { time: 9 * 60 + 36, log: "file=62ffbf920c81bdf7885c151cf5563c38fc63aa16;bomb=8G2CA4", completer: "Senri" },
    { time: 6 * 60 + 36, log: "file=8070f1109ff7f9c0bf9efd48e1a49f0e99934540;bomb=9N4HR6", completer: "Megum" },
    {
      time: 6 * 60 + 32,
      vid: "https://www.youtube.com/watch?v=jlFnWK9apSk",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    {
      time: 6 * 60,
      vid: "https://www.youtube.com/watch?v=S6fF7h-MZno",
      completers: { defuser: "Želvík", experts: ["Asmir", "DieBestenRutschen"] },
    },
    {
      time: 5 * 60 + 34,
      vid: "https://www.youtube.com/watch?v=g1Wnm63ruF4",
      completers: { defuser: "Burniel", experts: ["Chestnut", "Mateleological"] },
    },
    {
      time: 5 * 60 + 2,
      vid: "https://www.youtube.com/watch?v=K6c_p_bHSM0",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Megum"] },
    },
    { time: 4 * 60 + 4, log: "file=f60a1488b4346345ec594b127940d846bcc12f4c;bomb=BX7XF3", completer: "Danumbah" },
    { time: 3 * 60 + 52, log: "file=70101f691c7d9e6c7a719f7fa0148851e1415278;bomb=MQ9IK4", completer: "LegendWilleh" },
    {
      time: 3 * 60 + 21,
      vid: "https://www.youtube.com/watch?v=uEs53DUQwM0",
      completers: { defuser: "Wheaty", experts: ["MageMage", "Whalien"] },
    },
    {
      time: 1 * 60 + 7,
      vid: "https://youtu.be/H_sEFvdZ0Jo",
      completers: { defuser: "Wheaty", experts: ["Copperkettle", "Danumbah"] },
    },
  ],
  solvedByTP: true,
  modules: [
    "XRayModule",
    "ColorMorseModule",
    "Mastermind Simple",
    "Mastermind Cruel",
    "GridlockModule",
    "BigCircle",
    "MorseAMaze",
    "ColoredSwitchesModule",
    "PerplexingWiresModule",
    "monsplodeCards",
    "GameOfLifeSimple",
    "GameOfLifeCruel",
    "NonogramModule",
    "SetModule",
    "Painting",
    "Color Generator",
    "SymbolCycleModule",
    "hunting",
    "ExtendedPassword",
    "curriculum",
    "BrailleModule",
    "MafiaModule",
    "FestivePianoKeys",
    "FlagsModule",
    "timezone",
    "PolyhedralMazeModule",
    "symbolicCoordinates",
    "Poker",
    "sonic",
    "poetry",
    "buttonSequencesModule",
    "algebra",
    "visual_impairment",
    "jukebox",
    "identityParade",
    "maintenance",
    "BlindMaze",
    "Backgrounds",
    "mortalKombat",
    "mashematics",
    "FaultyBackgrounds",
    "radiator",
    "modernCipher",
    "ledGrid",
    "Sink",
    "iPhone",
    "theSwan",
    "wastemanagement",
    "HumanResourcesModule",
    "skyrim",
    "CruelPianoKeys",
    "Wires",
    "BigButton",
    "Keypad",
    "Simon",
    "WhosOnFirst",
    "Memory",
    "Morse",
    "Venn",
    "WireSequence",
    "Maze",
    "Password",
    "MemoryV2",
    "SouvenirModule",
    "TurnTheKeyAdvanced",
  ],
};
