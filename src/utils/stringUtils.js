import { truncate } from 'lodash';

export const extractTitleFromContent = content => {
  return truncate(content.split('\n')[0], { length: 20 });
}

export const extractContentSummary = content => {
  const splitContent = content.split('\n');
  const summary = splitContent.length > 0 ? splitContent[1] : splitContent[0];
  return truncate(summary, { length: 70 });
}
