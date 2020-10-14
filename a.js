const axiso = require("axios");

axiso
  .get("https://detail.clzleun.cn/T_YLn.php?D9F53A4F=j3grTd4GGO1SL0")
  .then((res) => {
    console.log(res.data);
  });
