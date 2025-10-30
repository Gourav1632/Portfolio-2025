const dialogues = {
  base: [
    {
      message: "Oh, hey! You’re here. Uh... I think I lost my glasses.",
      choices: ["Your glasses?"],
    },
    {
      message: "Yeah, I kinda need them to code properly.",
      choices: ["Want some help?"],
    },
    {
      message: "Absolutely! Can you help me find them?",
      choices: ["Where did you last see them?"],
    },
    {
      message: "Not sure... maybe somewhere on this site.",
      choices: ["So you don’t even know where they are?"],
    },
    {
      message:
        "You'll have to figure it out yourself... come back when you find them!",
      choices: ["Alright, I’ll look around."],
    },
  ],

  afterDrawer: [
    {
      message: "Oh, you're back! Any luck finding them?",
      choices: ["I found a drawer... but it’s locked."],
    },
    {
      message:
        "Locked? Huh, that’s odd. I don’t remember adding any locks around here.",
      choices: ["It needs a passcode."],
    },
    {
      message:
        "A passcode, you say? That *does* sound like something I’d do on a caffeine high.",
      choices: ["So... what’s the code?"],
    },
    {
      message: "The passcode...? Hmm, I think I forgot it.",
      choices: ["You forgot your own passcode?"],
    },
    {
      message: "Yeah... it’s been a while since I locked that drawer.",
      choices: ["Any clue what it could be?"],
    },
    {
      message:
        "Hmm, my favourite number might be involved. I'll check my mail — might remind me.",
      choices: ["Your mail, huh..."],
    },
  ],

  afterGlasses: [
    {
      message: "Wait— you actually found them?! My glasses!",
      choices: ["Took some work, but yeah."],
    },
    {
      message: "Oh, finally! I can look cool now.",
      choices: ["WHATTTTT?"],
    },
    {
      message:
        "Well... they’re not prescription. I wear them to look smart..",
      choices: ["Wait, all of this was for nothing.. ?!"],
    },
    {
      message:
        "Admit it—coding *does* feel 20% cooler when you’re wearing glasses.",
      choices: ["You’ve got a point there."],
    },
  ],

normal: [
  {
    message: "Hey there! Back again?",
    choices: ["Just looking around."],
  },
  {
    message: "Nice. Found anything cool yet?",
    choices: ["Still exploring.", "Not yet, but soon!"],
  },
  {
    message: "Good! There’s more to this place than it seems.",
    choices: ["Sounds mysterious."],
  },
  {
    message: "Heh, I’ll let you find out yourself. Go explore a bit!",
    choices: ["Catch you later!"],
  },
],

};

export default dialogues;
