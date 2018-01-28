
filterConstants = {
  HEARTED: 'HEARTED',
  FAVOURITED: 'FAVOURITED',
  POEMS: 'POEMS',
  STORY: 'STORY',
}

const filters = [
  { name: 'Hearted', key: filterConstants.HEARTED },
  { name: 'Favourite', key: filterConstants.FAVOURITED },
  { name: 'Poems', key: filterConstants.POEMS },
  { name: 'Story', key: filterConstants.STORY },
];

const demoText = {
  title: 'Do not go gentle into that good night',
  content: `Do not go gentle into that good night,
Old age should burn and rave at close of day;
Rage, rage against the dying of the light.

Though wise men at their end know dark is right,
Because their words had forked no lightning they
Do not go gentle into that good night.

Good men, the last wave by, crying how bright
Their frail deeds might have danced in a green bay,
Rage, rage against the dying of the light.

Wild men who caught and sang the sun in flight,
And learn, too late, they grieved it on its way,
Do not go gentle into that good night.

Grave men, near death, who see with blinding sight
Blind eyes could blaze like meteors and be gay,
Rage, rage against the dying of the light.

And you, my father, there on the sad height,
Curse, bless, me now with your fierce tears, I pray.
Do not go gentle into that good night.
Rage, rage against the dying of the light.`
}

export {
  filters,
  filterConstants,
  demoText,
};
