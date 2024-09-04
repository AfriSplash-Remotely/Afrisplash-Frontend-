import { StylesConfig } from "react-select";

export const selectStyle: StylesConfig = {
  control: (styles) => ({
    ...styles,
    padding: "4px 2px",
  }),
};

export let counter = 0;

export function generateUniqueId(): number {
  counter += 1;
  return Date.now() + counter;
}

export function capitalizeFirstLetter(word: string): string {
  return word?.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  // use the getTime to convert the now and date to number for typescript
  const timeDifference = now.getTime() - date.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  let formattedDate;

  switch (true) {
    case months >= 1:
      formattedDate = `${months} ${months === 1 ? "month" : "Months"} Ago`;
      break;
    case days >= 1:
      formattedDate = `${days} ${days === 1 ? "day" : "Days"} Ago`;
      break;
    case hours >= 1:
      formattedDate = `${hours} ${hours === 1 ? "hour" : "Hours"} Ago`;
      break;
    case minutes >= 1:
      formattedDate = `${minutes} ${minutes === 1 ? "minute" : "Minutes"} Ago`;
      break;
    default:
      formattedDate = "today";
  }

  return formattedDate;
}

export function formatCurrency(amount: number, currencyType: string): string {
  const currencySymbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    NGN: "₦",
    // add more currency types and symbols as needed
  };
  // check if the provided currency type exists in the map
  const symbol = currencySymbols[currencyType];

  if (symbol) {
    // if the currency type is available, use the symbol
    return `${symbol}${amount?.toLocaleString()}`;
  } else {
    // if the currency type is not available, return the amount that way
    return amount?.toString();
  }
}

/**
 * 
 * @param date 
 * @returns string
 * @description 11-04-2024
 */
export function formatDate(date: string): string {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  function roughScale(x: string) {
    if (!x) {
      return "NOT AVAILABLE";
    }
    return x;
  }

  return roughScale([day, month, year].join("-"));
}