import { Lang } from "./posts";

export const getIntlUrl = (url: string, lang: Lang) => {
  return `${lang ? `${lang}/` : ''}${url}`
}