function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function sendMessage(contact) {
  const messageBox = document.querySelector("[contenteditable='true']");
  if (!messageBox) {
    alert("Message box not found!");
    throw new Error("Message box not found!");
  }
  const message = contact.message.replace("{{name}}", contact.name);
  messageBox.innerHTML = message;
  messageBox.dispatchEvent(new InputEvent("input", { bubbles: true }));
  const sendBtn = document.querySelector("span[data-icon='send']");
  if (!sendBtn) {
    alert("Send button not found!");
    throw new Error("Send button not found!");
  }
  sendBtn.click();
}

function openChat(phone) {
  location.href = `https://web.whatsapp.com/send?phone=${phone}`;
}

async function startMessaging() {
  const contacts = JSON.parse(localStorage.getItem("whatsblitz_data"));
  if (!contacts || !contacts.length) {
    alert("No contacts found in localStorage!");
    return;
  }
  const logs = [];

  for (let contact of contacts) {
    try {
      openChat(contact.number);
      await wait(4000);
      sendMessage(contact);
      logs.push({
        number: contact.number,
        status: "sent",
        time: new Date().toISOString(),
      });
    } catch (err) {
      logs.push({
        number: contact.number,
        status: "failed",
        error: err.message,
        time: new Date().toISOString(),
      });
    }
    await wait(Math.random() * 10000 + 5000);
  }
  localStorage.setItem("whatsblitz_logs", JSON.stringify(logs));
}

// Inject sidebar CSS
const style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = chrome.runtime
  ? chrome.runtime.getURL("sidebar.css")
  : "sidebar.css";
document.head.appendChild(style);

// Create sidebar
const sidebar = document.createElement("div");
sidebar.id = "whatsblitz-sidebar";
sidebar.innerHTML = `
  <h4>WhatsBlitz</h4>
  <button id="startNow">Start</button>
`;
document.body.appendChild(sidebar);
document.getElementById("startNow").onclick = startMessaging;
