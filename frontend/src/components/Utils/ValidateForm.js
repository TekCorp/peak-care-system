import { showPopupMessage } from "./ShowPopupMessage";

export const validateForm = (inputsFieldAr, formInputData) => {
  let missingFields = [];
  let consentMissing = false;

  inputsFieldAr.forEach((input) => {
    if (input.required && !formInputData[input.name]) {
      if (input.consentField) {
        consentMissing = true;
      } else {
        missingFields.push(input.label);
      }
    }
  });

  if (missingFields.length > 0) {
    showPopupMessage(
      `Please fill the following required fields: ${missingFields.join(", ")}`,
      "fail"
    );
    return false;
  }

  if (consentMissing) {
    showPopupMessage(`Please ${inputsFieldAr.find(i => i.consentField)?.label}!`, "fail");
    return false;
  }

  return true;
};
