
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

export {
  filters,
  filterConstants
};
