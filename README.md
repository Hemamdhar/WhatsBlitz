# 📬 WhatsBlitz – Chrome Extension for Personalized WhatsApp Messaging

WhatsBlitz is a Chrome Extension that automates personalized WhatsApp messages using contact data from an Excel file. It directly integrates with WhatsApp Web, simulates human behavior, and handles messaging with precision and style.

---

## 🚀 Features

- 📂 Upload Excel/CSV with numbers, names, and custom messages
- ✨ Dynamic message templating using placeholders like `{{name}}`
- 💬 Auto-message contacts via WhatsApp Web
- ⏱️ Randomized delay between messages (5s–15s)
- 🧭 Floating sidebar for in-page control
- 📊 Progress tracking and logs
- 🛑 Error detection (invalid numbers, WhatsApp not open, etc.)

---

## 🛠️ Setup Instructions

1. Clone or download the repo
2. Open `chrome://extensions` in Chrome
3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the `whatsblitz/` folder
6. Click the WhatsBlitz icon and upload an Excel file
7. Open [https://web.whatsapp.com](https://web.whatsapp.com)
8. Use the floating sidebar or console to begin messaging

---

## 🧪 Sample Excel Format

| number       | name  | message                                  |
| ------------ | ----- | ---------------------------------------- |
| 919876543210 | John  | Hi {{name}}, your order is ready!        |
| 918765432109 | Alice | Hello {{name}}, thanks for your support. |

✅ Save as `.xlsx` or `.csv`

---

## 💻 How It Works

- Reads Excel using SheetJS (`xlsx.full.min.js`)
- Injects floating sidebar into WhatsApp Web
- Sends messages via simulated input/keyboard events
- Waits randomly between messages to mimic human behavior

---

## 🧱 Technologies Used

- Manifest V3 (Chrome Extension)
- JavaScript
- SheetJS (Excel parsing)
- DOM Automation
- HTML/CSS

---

## 📂 Deliverables

- ✅ Chrome Extension (ZIP + GitHub)
- ✅ Sample Excel File
- ✅ Demo Video
- ✅ This README

---

## ❗ Known Issues

- Does not support attachments/media
- Requires WhatsApp Web to be open and stable
- UI not optimized for mobile resolution

---

## 📹 Demo Video

> You’ll find the demo video inside `/demo/whatsblitz_demo.mp4` (or linked in the GitHub repo)

---

## 📧 Contact

If you have questions, reach out at [info@alfaleus.com](mailto:info@alfaleus.com) or open an issue in the GitHub repo.
