import { MissionInfo } from "nl-ktane-lib";

export const blind_man: MissionInfo = {
  name: "Blind Man",
  missionPack: "bioplay's Bounty Board of Belligerent, Blasphemous, Barbaric, and Brutal Bombs",
  author: "GiveMeHeals",
  time: 80 * 60,
  strikes: 3,
  widgets: 5,
  completions: [
    { time: 4 * 60 + 51, log: "file=2b56a3626f0679a60cfa86e60fb0f97bd0ed81c4;bomb=MB5JA3", completer: "ManiaMate" },
    {
      time: 2 * 60 + 59,
      isFirst: true,
      log: "file=e339842dfcc75be1dd5ffa634b8016234f2dfb6b;bomb=TQ7EP3",
      completers: { defuser: "BigLittle", experts: ["Draket", "GhastlyGamer"] },
    },
  ],
  modules: [
    "antimatterDimensions",
    "AlienModule",
    "TDSAmogus",
    "antistress",
    "artPricing",
    "BadWording",
    "BinaryButtons",
    "binaryTango",
    "birthdayCake",
    "BrokenBinary",
    "burnt",
    "candyLand",
    "CodeCracker",
    "colors_maximization",
    "GSCorridors",
    "cursorMazeModule",
    "diffusion",
    "GSDirectingButtons",
    "dontTouchAnything",
    "TDSDossierModifier",
    "flyswatting",
    "frankensteinsIndicator",
    "garfieldKart",
    "theGarnetThief",
    "Averageh",
    "HitmanModule",
    "InfiniteLoop",
    "interpunct",
    "LabelPrioritiesModule",
    "leds",
    "GSLineEquations",
    "matchingMorse",
    "meteor",
    "MusicalTransposition",
    "xelNegation",
    "NotTimerModule",
    "kikiNumberWang",
    "numberedButtonsModule",
    "TDSNya",
    "papasPizzeria",
    "GSPathfinder",
    "pawns",
    "plugins",
    "pressTheShape",
    "PurchasingProperties",
    "QLModule",
    "quizbowl",
    "roger",
    "simonSaidModule",
    "shortcuts",
    "spinningMazes",
    "stupidSlots",
    "ten_aliens",
    "thinkingWiresModule",
    "TwoPersuasiveButtons",
    "Updog",
    "Wendithapn",
    "xmorse",
    "duckKonundrum",
  ],
};