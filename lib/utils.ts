import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
import Cookie from "universal-cookie";
export const GetCookie = (name: string) => {
  const cookies = new Cookie();
  return cookies.get(name);
};
