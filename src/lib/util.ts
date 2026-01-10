// /utils.js

import { hairTransplantQuotes } from "./constant";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  query: string;
}

const hiddenInputs = {
  xnQsjsdp: "ba9b751c06e0f79492850e34fefa58e48b27ca6e26c120bcc5f7c2e44038e3c7",
  xmIwtLD:
    "f8a60c91d1294b374bddc29f052ae733ff3628159ab4259ea1d80decd099ae7b5e778218d67433195d32b78890ed7149",
  actionType: "TGVhZHM=",
  returnURL: `${process.env.NEXT_PUBLIC_APP_URL}`,
};

const ZOHO_URL = "https://crm.zoho.in/crm/WebToLeadForm";

/**
 * Smoothly scrolls to an element by id
 * @param {string} elementId - The id of the element to scroll to
 * @param {number} offset - Optional offset (e.g., for sticky headers)
 */
export function scrollToElement(elementId: string, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/**
 * Map form data to zoho field and submit
 * @param formData
 */

export const submitToZohoCRM = async (formData: FormData, thankYouPage: string) => {
  const data = new FormData();
  data.append("Last Name", formData.name);
  data.append("Phone", formData.phone);
  data.append("Email", formData.email);
  data.append("Description", formData.query);
  data.append("aG9uZXlwb3Q", "");

  Object.entries(hiddenInputs).forEach(([key, value]) => {
    data.append(key, value);
  });

  try {
    await fetch(ZOHO_URL, {
      method: "POST",
      body: data,
      mode: "no-cors",
    });
    window.location.href = `${hiddenInputs.returnURL}/${thankYouPage}`;
  } catch (err) {
    alert("Submission failed. Please try again.");
    console.error(err);
  }
};

export const randomQuote = (index: number) =>
  hairTransplantQuotes[index || Math.floor(Math.random() * hairTransplantQuotes.length)].text;
