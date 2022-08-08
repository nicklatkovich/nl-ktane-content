"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trial_by_fire = void 0;
exports.trial_by_fire = {
    name: "Trial By Fire",
    missionPack: "The Apocalypse",
    time: 30 * 60,
    strikes: 3,
    widgets: 10,
    completions: [
        {
            time: 4 * 60 + 26,
            vid: "https://www.youtube.com/watch?v=AdBA2F-tPa0",
            completers: { defuser: "Zaakeil", experts: ["Cookiepocalypse", "KittyAshy"] },
        },
        {
            time: 3 * 60 + 15,
            vid: "https://www.youtube.com/watch?v=lckwmaMj6ms",
            completers: { defuser: "Benjamin", experts: ["Bianca", "MásQuéÉlite", "Megum"] },
        },
        { time: 1 * 60 + 35, log: "file=ccb01c018addae2ef298b8dd3c95a3f6e4676187;bomb=CU0ZQ2", completer: "Danumbah" },
        { time: 1 * 60 + 23, log: "file=82e1d89e2de23be38976045ffc70db2ebec46542;bomb=9R7UE3", completer: "LegendWilleh" },
        {
            time: 1 * 60 + 8,
            isFirst: true,
            log: "file=4b1a8d1782c44764c409dd00197e140dd00df064;bomb=MR0DT1",
            completers: { defuser: "Zefod", experts: ["Edan", "ManiaMate"] },
        },
        { time: 1 * 60 + 8, log: "file=22165f3243ce075e5a9860e56a257085e17021a3;bomb=QB4EJ4", completer: "Puddle" },
    ],
    modules: [
        ["rng", "buttonMasherNeedy", "EdgeworkModule"],
        "MemoryV2",
        [
            40,
            "spwiz3DMaze",
            "spwizAdventureGame",
            "AdjacentLettersModule",
            "algebra",
            "BinaryLeds",
            "BitmapsModule",
            "BrokenButtonsModule",
            "buttonSequencesModule",
            "ChessModule",
            "ChordQualities",
            "ColoredSwitchesModule",
            "complicatedButtonsModule",
            "CoordinatesModule",
            "graphModule",
            "CrazyTalk",
            "CreationModule",
            "CryptModule",
            "digitalRoot",
            "DoubleOhModule",
            "DrDoctorModule",
            "errorCodes",
            "ExtendedPassword",
            "fastMath",
            "FlagsModule",
            "FollowTheLeaderModule",
            "TheGamepadModule",
            "HexamazeModule",
            "iceCreamModule",
            "identityParade",
            "jukebox",
            "ledGrid",
            "LetterKeys",
            "LightCycleModule",
            "Listening",
            "Logic",
            "mashematics",
            "modernCipher",
            "MorseAMaze",
            "mortalKombat",
            "murder",
            "neutralization",
            "theNumber",
            "NumberPad",
            "OrientationCube",
            "spwizPerspectivePegs",
            "PianoKeys",
            "pieModule",
            "Probing",
            "resistors",
            "RockPaperScissorsLizardSpockModule",
            "KeypadV2",
            "Semaphore",
            "shapeshift",
            "SimonScreamsModule",
            "SimonV2",
            "SkewedSlotsModule",
            "switchModule",
            "symbolicCoordinates",
            "TextField",
            "WordSearchModule",
        ],
        "TurnTheKey",
        [
            2,
            "SillySlots",
            "PasswordV2",
            "RubiksCubeModule",
            "PerplexingWiresModule",
            "MorseV2",
            "iPhone",
            "Color Generator",
            "GameOfLifeSimple",
        ],
        [2, "MazeV2"],
    ],
};
