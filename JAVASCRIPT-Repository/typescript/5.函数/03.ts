//三、可选参数和默认参数

const buildName = (firstName:string,lastName?:string):string => `${firstName} ${lastName}`;

const result1 = buildName('Bob')
// const result2 = buildName('Bob', 'Adams', 's')//error
const result3 = buildName('Bob', 'Adams')