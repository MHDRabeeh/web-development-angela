/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image. 
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";

let clientUrl = "";
let UserUrl = async () => {
  let answer = await inquirer.prompt([
    /* Pass your questions in here */
    {
      message: "Type your URL :",
      name: "URL",
    },
  ]);
  clientUrl = answer.URL;

  let qr_svg = qr.image(clientUrl);
  qr_svg.pipe(require("fs").createWriteStream("i_love_qr.png"));
  fs.writeFile("./QrImage.png", svg_string, (err) => {
    if (err) {
      console.log("this is error message ", err);
    }
  });
};
UserUrl();
if (clientUrl) {
  console.log("this is qr code .. ", clientUrl);
}
