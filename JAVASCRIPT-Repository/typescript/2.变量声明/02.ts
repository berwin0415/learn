/**
 * let
 * 块级作用域
 */

try {
    throw "No!";
    
} catch (error) {
    console.log('catch it');
    
}

/**
 * 暂时性死去
 * 声明后才能访问
 */

//  console.log(a);
 let a = 1;

/**
 * const 声明后无法改变 引用不变
 * 但是依据可以修改属性
 * 
 */

 