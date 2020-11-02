const axios = require("axios");
let finish = 0
const count = 999;

  Array(count)
    .fill(1)
    .map((i) =>
      axios.get("https://www.hanbw.top").then((res) => {
        console.log(finish++);
      }).catch(err => console.log(err))
    )
