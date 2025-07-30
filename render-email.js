const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Data to pass to the template (customize these values)
const data = {
  customerName: "John Doe", // Dynamic name from your template
  // Add other variables if needed
};

// Path to your EJS template
const templatePath = path.join(__dirname, 'views', 'message.ejs');

// Read the EJS template file
const template = fs.readFileSync(templatePath, 'utf8');

// Render the template with data
const renderedHTML = ejs.render(template, data);

// Save the output to a file (for email sending)
fs.writeFileSync('output-email.html', renderedHTML);

console.log('Email template rendered successfully!');
console.log('Output saved to: output-email.html');