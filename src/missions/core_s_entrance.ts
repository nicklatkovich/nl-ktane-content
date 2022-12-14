import { MissionInfo } from "nl-ktane-lib";

export const core_s_entrance: MissionInfo = {
  name: "Core's Entrance",
  missionPack: "KTaNE - The Adventure",
  time: 70 * 60,
  strikes: 6,
  widgets: 5,
  completions: [
    { time: 22 * 60 + 11, log: "file=b05f246e8b1c856a173c79d4d1a89b33177c654c;bomb=T55SE6", completer: "LegendWilleh" },
    {
      time: 13 * 60 + 23,
      log: "file=0cd82c50e22ffd470ed61f0e4bfe1e41e73fb172;bomb=LM5IX9",
      completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
    },
    { time: 10 * 60, log: "file=55561883ada7bdf9f2429968edfde4a830c98656;bomb=UM9TF7", completer: "Senri" },
    {
      time: 8 * 60 + 59,
      vid: "https://www.twitch.tv/videos/706358321",
      completers: { defuser: "Espik", experts: ["ManiaMate", "Procyon"] },
    },
    {
      time: 7 * 60 + 50,
      vid: "https://www.youtube.com/watch?v=YomKOUtS68o",
      completers: { defuser: "Cookiepocalypse", experts: ["KittyAshy", "Zaakeil"] },
    },
    { time: 7 * 60 + 41, log: "file=b259d6636a79c878c675258f6d60a230f063d4b0;bomb=DZ6WN8", completer: "Edan" },
    { time: 6 * 60 + 15, log: "file=d0a78ba0c96fb2b6f7d1cbc7842159e29ef62591;bomb=5F6GI0", completer: "Burniel" },
    {
      time: 5 * 60 + 19,
      vid: "https://www.youtube.com/watch?v=vPJbD3oFNh8",
      completers: { defuser: "Draket", experts: ["Deaf", "Rexkix"] },
    },
    { time: 5 * 60 + 13, isFirst: true, vid: "https://www.youtube.com/watch?v=9VEsUNK0STo", completer: "Draket" },
    { time: 5 * 60 + 10, log: "file=bd0fabe878a97a672f45204d2bbb894f623938ed;bomb=871EW2", completer: "Garuda" },
    {
      time: 4 * 60 + 58,
      vid: "https://www.youtube.com/watch?v=5ZzuulpQoPk",
      completers: { defuser: "Benjamin", experts: ["Bianca", "Megum"] },
    },
    {
      time: 4 * 60 + 40,
      vid: "https://www.youtube.com/watch?v=TYPyQ194_0Q&feature=youtu.be",
      completers: { defuser: "Danielstigman", experts: ["Miki2003pl", "Puddle"] },
    },
    { time: 4 * 60 + 17, vid: "https://www.youtube.com/watch?v=gG2haHs8xkU", completer: "RandomChamps" },
    {
      time: 4 * 60 + 9,
      log: "file=d096073dbd258690123541db9e6bb798f0660c3a;bomb=V18UG4",
      completers: { defuser: "Wheaty", experts: ["MageMage", "Copperkettle"] },
    },
  ],
  solvedByTP: true,
  modules: [
    [3, "BlackHoleModule"],
    "spwiz3DMaze",
    "arithmelogic",
    "bamboozlingButton",
    "BrailleModule",
    "BrokenGuitarChordsModule",
    "TheBulbModule",
    "ChessModule",
    "colourcode",
    "CreationModule",
    "CruelPianoKeys",
    "cube",
    "CursedDoubleOhModule",
    "DecoloredSquaresModule",
    "DividedSquaresModule",
    "DoubleOhModule",
    "FestivePianoKeys",
    "FlavorText",
    "MemoryV2",
    "FriendshipModule",
    "GameOfLifeSimple",
    "GridMatching",
    "groceryStore",
    "jewelVault",
    "Laundry",
    "MinesweeperModule",
    "numberCipher",
    "organizationModule",
    "partialDerivatives",
    "PerplexingWiresModule",
    "Playfair",
    "RegularCrazyTalkModule",
    "RubiksCubeModule",
    "shapeshift",
    "Sink",
    "snooker",
    "taxReturns",
    "TenButtonColorCode",
    "ThirdBase",
    "TwoBits",
    "tWords",
    "VaricoloredSquaresModule",
    "visual_impairment",
    "wastemanagement",
    "NeedyBeer",
  ],
};
