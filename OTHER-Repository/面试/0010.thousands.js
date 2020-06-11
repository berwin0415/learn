function toThousands1(number) {
  number = (number || 0).toString();
  while (/\d+(\d{3})+/.test(number)) {
    number = number.replace(/(\d+)(\d{3})/, "$1,$2");
  }
}

toThousands1("32456644");

function toThousands2(number) {
  number = (number || 0).toString();
  let str = "";
  for (let i = number.length - 1; i >= 0; i--) {
    const element = number[i];
    str = element + str;
    if ((number.length - i) % 3 === 0) {
      str = "," + str;
    }
  }
  return str;
}

console.log(toThousands2("32456644"));
