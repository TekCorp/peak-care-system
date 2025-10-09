export const showPopupMessage = (message, type) => {
  let color = "";
  switch (type) {
    case "success":
      color = "#32a532";
      break;
    case "fail":
      color = "#da4949";
      break;
    default:
      color = "black";
      break;
  }

  const alertDiv = document.createElement("div");
  alertDiv.textContent = message;
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "5%";
  alertDiv.style.left = "50%";
  alertDiv.style.transform = "translate(-50%, -50%)";
  alertDiv.style.color = "#fff";
  alertDiv.style.backgroundColor = color;
  alertDiv.style.padding = "10px";
  alertDiv.style.borderRadius = "2px";
  alertDiv.style.zIndex = "9999";
  alertDiv.style.fontSize = `20px`;
  alertDiv.style.fontFamily = `"DM Sans", sans-serif`;

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 2500);
};