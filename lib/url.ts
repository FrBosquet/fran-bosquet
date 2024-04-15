import { Lang } from "./posts";

export const getIntlUrl = (url: string, lang: Lang) => {
  if (lang === Lang.ES) return url

  return `${lang}${url}`
}