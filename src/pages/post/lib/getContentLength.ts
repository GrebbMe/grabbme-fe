export const getContentLength = (htmlString: string): number => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  return doc.body.textContent?.length || 0;
};
