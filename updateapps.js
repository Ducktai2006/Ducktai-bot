const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomColor() {
  var color = "";
  for (var i = 0; i < 3; i++) {
      var sub = Math.floor(Math.random() * 256).toString(16);
      color += (sub.length == 1 ? "0" + sub : sub);
  }
  return "#" + color;
};
const logMitai = console.log;

logMitai(
  chalk.bold.hex(randomColor()).bold(`[ UPDATE - APPSTATE ] »`),
  chalk.bold.hex(randomColor()).bold(`Vui lòng dán appstate mới để cập nhật.`));

rl.question('-> ', (input) => {
  try {

    const jsonContent = JSON.parse(input);

    fs.writeFile('appstate.json', JSON.stringify(jsonContent, null, 2), (err) => {
      if (err) {
        console.error('Lỗi không thể cập nhật appstate: ', err);
      } else {
        logMitai(
          chalk.bold.hex(randomColor()).bold(`[ UPDATE APPSTATE - SECURITY ] »`),chalk.bold.hex(randomColor()).bold(`Đã cập nhật Appstate mới thành công.`));
      }
      rl.close();
    });
  } catch (e) {
    console.error('Nội dung bạn nhập không phải là JSON hợp lệ: ', e.message);
    rl.close();
  }
});
