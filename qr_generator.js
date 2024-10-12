import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
// Use inquirer package to get user input

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message":"Type in your URL: ",
     name: "URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// use the qr-image npm packagr to turn the user entered URL into a QR image

// Create txt file to save the user input using the native fs node module


