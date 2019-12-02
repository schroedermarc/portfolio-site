export const getCategoryTextClass = cat => {
  let catContainerClass;
  switch (cat) {
    case 'Web Development':
      catContainerClass = 'accent-green-text';
      break;
    case 'Data Visualization':
      catContainerClass = 'accent-blue-text';
      break;
    case 'Immersive Installation':
      catContainerClass = 'accent-orange-text';
      break;
    case 'Misc.':
      catContainerClass = 'accent-purple-text';
      break;
    default:
      catContainerClass = 'accent-purple-text ';
      break;
  }

  return catContainerClass;
};

export const getCategoryContainerClass = cat => {
  let catContainerClass;
  switch (cat) {
    case 'Web Development':
      catContainerClass = 'white-on-accent-green';
      break;
    case 'Data Visualization':
      catContainerClass = 'white-on-accent-blue';
      break;
    case 'Immersive Installation':
      catContainerClass = 'white-on-accent-orange';
      break;
    case 'Misc.':
      catContainerClass = 'white-on-accent-purple';
      break;
    default:
      catContainerClass = 'white-on-accent-purple ';
      break;
  }

  return catContainerClass;
};
