export const htmlToList = (html: string = ""): string[] => {
  if (!html) return [];

  return html
    .replace(/<\/?ul>/g, "")
    .split("</li>")
    .map(item =>
      item
        .replace(/<\/?li>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim()
    )
    .filter(Boolean);
};
