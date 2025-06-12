import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app")!;
  const link = "https://github.com/bikathi/due-time";

  // Create the main element
  const mainElement = document.createElement("main");

  // Create the title element
  const h3Element = document.createElement("h3");
  h3Element.textContent = "Add a TODO";

  // create the form element
  const formElement = document.createElement("form");

  // title input
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.className = "form-input";
  titleInput.setAttribute("maxLength", "50");
  titleInput.placeholder = "Remind me to feed my cat...";
  titleInput.setAttribute("required", "true");

  // date-time-selector input
  const dateTimeSelectorInput = document.createElement("input");
  dateTimeSelectorInput.setAttribute("type", "datetime-local");
  dateTimeSelectorInput.className = "form-input";
  titleInput.setAttribute("required", "true");

  // submit button
  const formSubmitButton = document.createElement("button");
  formSubmitButton.id = "form-submit-button";
  formSubmitButton.setAttribute("type", "submit");
  formSubmitButton.innerText = "Save";

  formElement.appendChild(titleInput);
  formElement.appendChild(dateTimeSelectorInput);
  formElement.appendChild(formSubmitButton);

  // Create the link element to the Github
  const aElement = document.createElement("a");
  aElement.href = link;
  aElement.className = "link-color";
  aElement.target = "_blank";
  aElement.textContent = "view code on Github";

  // Append all elements to the main element
  mainElement.appendChild(h3Element);
  mainElement.appendChild(formElement);
  mainElement.appendChild(aElement);

  // Append the main element to the page
  appElement.appendChild(mainElement);

  let count = 0;

  // Get the count value from Chrome storage
  // chrome.storage.sync.get(["count"], function (result) {
  //   count = result.count || 0;
  //   countLabel.textContent = `${count}`;
  // });

  // Decrement the count
  // minusButton.addEventListener("click", function () {
  //   if (count > 0) {
  //     count--;
  //     countLabel.textContent = `${count}`;
  //     chrome.storage.sync.set({ count });
  //     chrome.runtime.sendMessage({ type: "COUNT", count });
  //   }
  // });

  // Increment the count
  // addButton.addEventListener("click", function () {
  //   count++;
  //   countLabel.textContent = `${count}`;
  //   chrome.storage.sync.set({ count });
  //   chrome.runtime.sendMessage({ type: "COUNT", count });
  // });
});
