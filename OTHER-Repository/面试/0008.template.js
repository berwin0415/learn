console.log(template("my name is {{name}}, age is {{age }}", { name: "tom", age: 16 }))

function template(str, data) {
  return str.replace(/\{\{(.+?)\}\}/g, (match, $1) => {
      $1 =$1.split('').filter(x => x !== ' ').join('')
    return data[$1]
  });
}
