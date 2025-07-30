# 📧 Dynamic Email Template Renderer

A Node.js tool that converts EJS templates into responsive HTML emails with dynamic data injection. Perfect for transactional emails, order confirmations, and notifications.

## ✨ Features

- 🖌️ EJS templating for dynamic content
- 📱 Built-in responsive design
- ✉️ Ready for integration with Nodemailer
- 🎨 SVG graphics support
- 🔄 Auto-resizing for desktop/mobile

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/elaheyaghoubi/mail-engine.git
   cd message
   ```
2. **Install dependencies**
  ```bash
npm install ejs
```
3. **Edit your template**
- Modify views/message.ejs
- Use ```<%= variable %>``` for dynamic content

4. **Render emails**
  ```bash
  node render-email.js
  ```
##  🛠 Customization
Edit ```render-email.js``` to add dynamic variables:


``` bash
const data = {
  customerName: "Sarah Johnson", // Shown in email greeting
  orderNumber: "LC-2023-456",   // For order tracking
  supportEmail: "help@lahzecard.com"
};
```
## 🤝 Contributing
1. Fork the project

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some amazing feature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request
## 📬 Contact
GitHub: @elaheyaghoubi
