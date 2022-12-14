import { MissionInfo } from "nl-ktane-lib";

export const double_down: MissionInfo = {
  name: "Double Down",
  missionPack: "Grunkle's Missions",
  time: 70 * 60 + 7,
  strikes: 5,
  widgets: 5,
  completions: [
    {
      time: 9 * 60,
      vid: "https://www.twitch.tv/videos/1528845086",
      completers: { defuser: "Espik", experts: ["Crazycaleb", "ManiaMate"] },
    },
    {
      time: 7 * 60 + 12,
      vid: "https://www.youtube.com/watch?v=J5EY4uF0A3A",
      completers: { defuser: "KittyAshy", experts: ["Cookiepocalypse", "Zaakeil"] },
    },
    {
      time: 4 * 60 + 6,
      isFirst: true,
      log: "file=75f6358c2bbbbc4613cf563b29700216ca16404e;bomb=V55RJ6",
      completer: "LegendWilleh",
    },
    {
      time: 2 * 60 + 6,
      log: "file=20a29cc79c340e642fccffbbadd8dc4ca3b2661b;bomb=HR9LD0",
      completers: { defuser: "Burniel", experts: ["Garuda", "Millie-Rose"] },
    },
  ],
  modules: [
    "graphModule",
    "ChessModule",
    "SillySlots",
    "Microcontroller",
    "FollowTheLeaderModule",
    "BlindAlleyModule",
    "SeaShells",
    "RockPaperScissorsLizardSpockModule",
    "ButtonV2",
    "complicatedButtonsModule",
    "BattleshipModule",
    "ShoddyChessModule",
    "CoordinatesModule",
    "OnlyConnectModule",
    "fizzBuzzModule",
    "MinesweeperModule",
    "ZooModule",
    "booleanVennModule",
    "YahtzeeModule",
    "curriculum",
    "BrailleModule",
    "symbolicCoordinates",
    "errorCodes",
    "cooking",
    "moon",
    "graffitiNumbers",
    "greekCalculus",
    "timeKeeper",
    "lightspeed",
    "RegularHexpressions",
    "PatternCubeModule",
    "SplittingTheLootModule",
    "3dTunnels",
    "TennisModule",
    "horribleMemory",
    "flyswatting",
    "coffeebucks",
    "ColorfulMadness",
    "snooker",
    "ChickenNuggets",
    "challengeAndContact",
    "TenButtonColorCode",
    "streetFighter",
    "BinaryPuzzleModule",
    "cookieJars",
    "quizBuzz",
    "Wavetapping",
    "OddOneOutModule",
    "DUCKDUCKGOOSE",
  ],
};
