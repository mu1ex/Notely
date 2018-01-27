import { truncate } from 'lodash';

export const truncateToLength = (content, length = 70) => (
  truncate(content, { length })
);

export const getPlainText = text => (
  text.replace(/(\r\n|\n|\r)/gm, "")
);

export const getTruncatedContent = content => (
  truncateToLength(getPlainText(content))
);

export const getTruncatedTitle = title => (
  truncateToLength(getPlainText(title, 50))
);
