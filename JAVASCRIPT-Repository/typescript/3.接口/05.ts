// 函数类型

interface SearchFunc {
    (source: string, substring: string): boolean
}

const mySearch: SearchFunc = (src: string, sub: string): boolean => {
    const result = src.search(sub);
    return result > 1
}