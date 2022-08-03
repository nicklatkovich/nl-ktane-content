import { MissionInfo } from "nl-ktane-lib";

export const thrift_shop: MissionInfo = {
  name: "Thrift Shop",
  missionPack: "Billboard Hot 100 Mission Pack",
  time: 64 * 60,
  strikes: 7,
  widgets: 5,
  completions: [
    {
      time: 11 * 60 + 57,
      isFirst: true,
      vid: "https://www.youtube.com/watch?v=XLYXJL9VTxY",
      completers: { defuser: "Zefod", experts: ["Burniel", "Edan"] },
    },
    { time: 9 * 60 + 59, log: "file=c9c5d7e81ac5003bdf6f63cc93bcee0277704882;bomb=JJ8GE4", completer: "LegendWilleh" },
  ],
  modules: [
    "MistakeModule",
    "baccarat",
    "ksmBadugi",
    "BartendingModule",
    "KritBlackjack",
    "blockbusters",
    "bombDiffusal",
    "catchphrase",
    "cheepCheckout",
    "CheapCheckoutModule",
    "ChickenNuggets",
    "coffeebucks",
    "countdown",
    "crystalMaze",
    "thedealmaker",
    "ksmHighScore",
    "disorderedKeys",
    "DrDoctorModule",
    "europeanTravel",
    "KritFlipTheCoin",
    "ForeignExchangeRates",
    "Krit4CardMonte",
    "freeParking",
    "lgndGadgetronVendor",
    "groceryStore",
    "gryphons",
    "HumanResourcesModule",
    "qSwedishMaze",
    "TheKanyeEncounter",
    "KiloTalk",
    "Laundry",
    "LionsShareModule",
    "matchem",
    "monsplodeCards",
    "jewelVault",
    "Poker",
    "raidingTemples",
    "qSchlagDenBomb",
    "megaMan2",
    "shellGame",
    "SillySlots",
    "sonicKnuckles",
    "SplittingTheLootModule",
    "stockMarket",
    "subscribeToPewdiepie",
    "taxReturns",
    "treasureHunt",
  ],
};
