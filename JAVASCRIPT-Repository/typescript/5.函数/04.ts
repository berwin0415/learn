//四 剩余参数

const buildNameFun: (firstName: string, ...restOfName: string[]) => string = (firstName: string, ...restOfName: string[]): string => firstName + ' ' + restOfName.join(' ')