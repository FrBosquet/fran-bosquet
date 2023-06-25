import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ['100', '300', '700'],
  variable: '--font-poppins',
  subsets: ["latin"]
});