// Very naive way to do this, basically shooting yourself in the foot.
// Acceptable due to short lifecycle of game

export type DialogState = {
  response?: string,
  answer: string,
  addendum?: string,
  alien?: string
}

export const states: DialogState[] = [
  {
    answer: null,
    addendum: "You are stranded on an alien planet. You have lived there for multiple years. The humanoid aliens are mostly friendly and you have built a dictionary."
  },
  {
    answer: null,
    addendum: "Although with considerable effort, you have derived the meaning of words. These aliens are really hard to understand. After a good sleep, a youngling " +
      "walks up to you. The alien is about half your size, black with glowing teal elements and has a very loud voice. It speaks through its thorax."
  },
  {
    response: "hello",
    answer: "hello",
    alien: "alien-child.png"
  },
  {
    response: "body like orbital moon",
    addendum: "The child runs away. You take offense somehow.",
    answer: null
  },
  {
    response: null,
    addendum: "Your instructor comes in. After these years his help has been very important for fitting in. It isn't easy though.",
    answer: null,
    alien: "alien-base.png",
  },
  {
    response: "mind like sponge",
    addendum: "He always says 'mind like sponge' although you have no idea what that means. When you repeat his words, he always seems content.",
    answer: 'mind like sponge',
    alien: "alien-base.png",
  },
  {
    response: "mind like sponge",
    addendum: "Your instructor grabs a sponge, and fills it with a liquid. He then points towards your head. He makes a gesture of growth. He then points to the moon.",
    answer: 'mind like moon',
    alien: "alien-base.png",
  },
  {
    response: "like moon in mouth",
    addendum: "The instructor sees that you made some kind of connection, but that you do not understand him fully.",
    answer: null,
    alien: "alien-base.png",
  },
  {
    response: null,
    addendum: "The instructor sees the child that talked to you earlier. You've gotten quite proficient at reading body language. " +
      "The instructor clearly disapproves of the child.",
    answer: null,
    alien: "alien-angry.png",
  },
  {
    response: "mind like moon in mouth",
    addendum: "The instructor shouts at the child. The child seems distraught.",
    answer: null,
    alien: "alien-angry.png",
  },
  {
    response: "body like orbital moon",
    addendum: "The child speaks directed towards you. You think hard on what to say to the child. Maybe something like the instructor said.",
    answer: "mind like moon in mouth",
    alien: "alien-child.png"
  },
  {
    response: "grateful",
    addendum: "The child seems embarrassed. The instructor is happy that you've told the child off. You get a feeling for what it means. " +
      "It seems the instructor wants you to reflect on that you've grasped a concept. He looks at the moon. You want to tell him, " +
      "that you will keep learning and then become good at what you are doing. You sit down and try to tell him.",
    answer: "mind like sponge mind like moon",
    alien: "alien-happy.png",
  },
  {
    response: "mind like sponge mind like moon !!!!",
    addendum: "The teacher is ecstatic! For the first time, it seems you are capable of understanding more than mere words. All this time, " +
      "they have been speaking in metaphors. You reflect on this and try to take as much as you can. You thank the instructor.",
    answer: "grateful",
    alien: "alien-happy.png",
  },
  {
    response: null,
    addendum: "The teacher is ecstatic! For the first time, it seems you are capable of understanding more than mere words. All this time, " +
      "they have been speaking in metaphors. You reflect on this and try to take as much as you can. You thank the instructor. It leaves.",
    answer: null,
  },
  {
    response: 'day like all birth',
    addendum: "An alien runs into your house. The alien excretes a large amount of saliva and points towards your water supply.",
    answer: 'mouth like sponge',
    alien: "alien-angry.png",
  },
  {
    response: 'grateful',
    addendum: "The alien seems content.",
    answer: null,
    alien: "alien-base.png",
  },
  {
    response: null,
    addendum: "It seems as if the alien was on the brink of death. It leaves immediately.",
    answer: null,
  },
  {
    response: null,
    addendum: "Thank you for playing.",
    answer: null,
  }
]
