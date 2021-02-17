# 01-JAVA语言基础

## 前言

**什么是Java语言**

 Java语言是美国Sun公司（Stanford University Network），在1995年推出的高级的编程语言。所谓编程语言，是 计算机的语言，人们可以使用编程语言对计算机下达命令，让计算机完成人们需要的功能。

**Java虚拟机——JVM**

- **JVM**（Java Virtual Machine ）：Java虚拟机，简称JVM，是运行所有Java程序的假想计算机，是Java程序的 运行环境，是Java 最具吸引力的特性之一。我们编写的Java代码，都运行在 JVM 之上。 
- **跨平台**：任何软件的运行，都必须要运行在操作系统之上，而我们用Java编写的软件可以运行在任何的操作系 统上，这个特性称为Java语言的跨平台特性。该特性是由JVM实现的，我们编写的程序运行在JVM上，而JVM 运行在操作系统上。

> 如图所示，Java的虚拟机本身不具备跨平台功能的，每个操作系统下都有不同版本的虚拟机。

**JRE 和 JDK**

- **JRE** (Java Runtime Environment) ：是Java程序的运行时环境，包含 JVM 和运行时所需要的 核心类库 。
- **JDK** (Java Development Kit)：是Java程序开发工具包，包含 JRE 和开发人员使用的工具。

> 我们想要运行一个已有的Java程序，那么只需安装 JRE 即可。
>
>  我们想要开发一个全新的Java程序，那么必须安装 JDK 。

![07-JDK&JRE&JVM关系示意图](D:\projects\learn\OTHER-Repository\markdown\java_notes\assets\01\01-JDK&JRE&JVM关系示意图.png)

## 一、数据类型

### 1.1 **数据类型分类** 

Java的数据类型分为两大类： 

- 基本数据类型：包括 `整数` 、 `浮点数 `、 `字符` 、 `布尔 `。 
- 引用数据类型：包括 `类 `、 `数组` 、 `接口`

### 1.2 基本数据类型

四类八种基本数据类型：

| 数据类型     | 关键字         | 内存占用 | 用 取值范围            |
| ------------ | -------------- | -------- | ---------------------- |
| 字节型       | byte           | 1个字节  | -128~127               |
| 短整型       | short          | 2个字节  | -32768~32767           |
| 整型         | int（默认）    | 4个字节  | -2的31次方~2的31次方-1 |
| 长整型       | long           | 8个字节  | -2的63次方~2的63次方-1 |
| 单精度浮点数 | float          | 4个字节  | 1.4013E-45~3.4028E+38  |
| 双精度浮点数 | double（默认） | 8个字节  | 4.9E-324~1.7977E+308   |
| 字符型       | char           | 2个字节  | 0-65535                |
| 布尔类型     | boolean        | 1个字节  | true，false            |



## 二、常量与变量

- **常量：是指在Java程序中固定不变的数据。**
- **变量：常量是固定不变的数据，那么在程序中可以变化的量称为变量。**

### 2.1 常量分类

| 类型       | 含义                                   | 数据举例                    |
| ---------- | -------------------------------------- | --------------------------- |
| 整数常量   | 量 所有的整数                          | 0，1， 567， -9             |
| 小数常量   | 所有的小数                             | 0.0， -0.1， 2.55           |
| 字符常量   | 单引号引起来,只能写一个字符,必须有内容 | 容 'a' ， ' '， '好'        |
| 字符串常量 | 双引号引起来,可以写多个字符,也可以不写 | "A" ，"Hello" ，"你好" ，"" |
| 布尔常量   | 只有两个值（流程控制中讲解）           | true ， false               |
| 空常量     | 只有一个值（引用数据类型中讲解）       | null                        |

**例：输出常量**

```java
public class ConstantDemo {
    public static void main(String[] args){
        //输出整数常量
        System.out.println(123);
        //输出小数常量
        System.out.println(0.125);
        //输出字符常量
        System.out.println('A');
        //输出布尔常量
        System.out.println(true);
        //输出字符串常量
        System.out.println("你好Java");
    }
}
```

### 2.2 变量的定义

变量定义的格式包括三个要素： `数据类型` 、 `变量名 `、 `数据值` 。

> - 变量名称：在同一个大括号范围内，变量的名字不可以相同。 
>
> - 变量赋值：定义的变量，不赋值不能使用。

**格式**

```
数据类型 变量名 = 数据值;
```

**例：**

```java
public class Variable {
    public static void main(String[] args){
        //定义字节型变量
        byte b = 100;
        System.out.println(b);
        //定义短整型变量
        short s = 1000;
        System.out.println(s);
        //定义整型变量
        int i = 123456;
        System.out.println(i);
        //定义长整型变量
        long l = 12345678900L;
        System.out.println(l);
        //定义单精度浮点型变量
        float f = 5.5F;
        System.out.println(f);
        //定义双精度浮点型变量
        double d = 8.5;
        System.out.println(d);
        //定义布尔型变量
        boolean bool = false;
        System.out.println(bool);
        //定义字符型变量
        char c = 'A';
        System.out.println(c);
    }
}
```

>long类型：建议数据后加L表示。
>
>float类型：建议数据后加F表示。

**数据类型分类** 

Java的数据类型分为两大类： 

- 基本数据类型：包括 `整数` 、 `浮点数 `、 `字符` 、 `布尔 `。 
- 引用数据类型：包括 `类 `、 `数组` 、 `接口`