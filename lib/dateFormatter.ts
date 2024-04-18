import { Lang } from "./posts"

export const getDateString = (date: string, lang: Lang) => new Intl.DateTimeFormat(lang, { year: "numeric", month: "long", day: "numeric" }).format(new Date(date))