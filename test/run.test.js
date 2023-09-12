const path = require("node:path");
const fs = require("node:fs");
const sassTrue = require("sass-true");

// 获取test目录下的所有子目录
const testDirectories = fs
  .readdirSync(__dirname, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// 对每个子目录运行测试
for (const directory of testDirectories) {
  // 获取子目录下的所有.scss文件
  const testFiles = fs
    .readdirSync(path.join(__dirname, directory))
    .filter((file) => path.extname(file) === ".scss");

  // 对每个.scss文件运行测试
  for (const file of testFiles) {
    const sassFile = path.join(__dirname, directory, file);
    sassTrue.runSass({ describe, it }, sassFile);
  }
}
