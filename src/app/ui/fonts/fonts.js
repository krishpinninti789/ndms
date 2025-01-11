import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"], // Optional, for language support
  weight: ["400", "600", "700"], // Specify weights to include
});
