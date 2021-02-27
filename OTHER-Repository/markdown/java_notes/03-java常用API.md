# 03-java常用API

### **0.1 导包**

使用import关键字导包，在类的所有代码之前导包，引入要使用的类型，java.lang包下的所有类无需导入。 格式：

```java
import 包名.类名; 
```

### 0.2 泛型

`<E>` ，表示一种指定的数据类型，叫做泛型。 `E` ，取自Element（元素）的首字母。在出现 E 的地方，我们使 

用一种引用数据类型将其替换即可，表示我们将存储哪种引用类型的元素。

### 0.3 包装类

| 基本类型 | 基本类型包装类 |
| -------- | -------------- |
| byte     | Byte           |
| short    | Short          |
| int      | Integer        |
| long     | Long           |
| float    | Float          |
| double   | Double         |
| char     | Character      |
| boolean  | Boolean        |

## 一、 java.util

### 1.1 Scanner类

Scanner类一个可以解析基本类型和字符串的简单文本扫描器。

**类**

- `import java.util.Scanner; `

**构造方法**

- `public Scanner(InputStream source) `：构造一个新的 `Scanner` ，它生成的值是从指定的输入流扫描的。

**成员方法**

- `public int nextInt() `：将输入信息的下一个标记扫描为一个` int `值。

**使用**

```java
//1. 导包 
import java.util.Scanner; 

public class Demo01_Scanner { 
  public static void main(String[] args) { 
    //2. 创建键盘录入数据的对象 
    Scanner sc = new Scanner(System.in); 
    //3. 接收数据 
    System.out.println("请录入一个整数："); 
    int i = sc.nextInt(); 
    //4. 输出数据 
    System.out.println("i:"+i); 
  } 
}
```

### 1.2  Random类

此类的实例用于生成伪随机数。 

**类**

- `java.util.Random`

**构造方法** 

- `public Random() `：创建一个新的随机数生成器。 

**成员方法** 

- `public int nextInt(int n) `：返回一个伪随机数，范围在`[0,n)`的`int` 值。 

**使用**

```java
//1. 导包 
import java.util.Random;

public class Demo01_Random { 
  public static void main(String[] args) { 
    //2. 创建键盘录入数据的对象 
    Random r = new Random(); 
    for(int i = 0; i < 3; i++){ 
      //3. 随机生成一个数据 
      int number = r.nextInt(10); 
      //4. 输出数据 
      System.out.println("number:"+ number); 
    } 
  } 
}
```

> 备注：创建一个 `Random` 对象，每次调用 `nextInt() `方法，都会生成一个随机数。

### 1.3  ArrayList类

`ArrayList` 是大小**可变的数组**的实现，存储在内的数据称为元素。此类提供一些方法来操作内部存储 

的元素。` ArrayList `中可不断添加元素，其大小也自动增长。 

**类**

`java.util.ArrayList <E>`

**构造方法** 

- `public ArrayList<E>() `：构造一个内容为空的集合。 

**成员方法** 

- `public boolean add(E e) `： 将指定的元素添加到此集合的尾部。 

- `public boolean add(E e)` ：将指定的元素添加到此集合的尾部。 

- `public E remove(int index) `：移除此集合中指定位置上的元素。返回被删除的元素。 

- `public E get(int index) `：返回此集合中指定位置上的元素。返回获取的元素。 

- `public int size()` ：返回此集合中的元素数。遍历集合时，可以控制索引范围，防止越界。 

**使用**

```java
// 1.导包
import java.util.ArrayList;

public class Demo01ArrayListMethod { 
  public static void main(String[] args) { 
    // 2. 创建集合对象 
    ArrayList<String> list = new ArrayList<String>(); 
    // 3. 添加元素 
    list.add("hello"); 
    // 4. 返回指定索引处的元素 
    System.out.println("get:"+list.get(0)); 
    // 5. 返回集合中的元素的个数 
    System.out.println("size:"+list.size()); 
    // 6. 删除指定索引处的元素，返回被删除的元素 
    System.out.println("remove:"+list.remove(0)); 
    // 7. 遍历输出 
    for(int i = 0; i < list.size(); i++){ 
      System.out.println(list.get(i)); 
    } 
  } 
}
```

## 二、 java.lang

### 1.1 String类

`java.lang.String `类代表字符串。Java程序中所有的字符串文字（例如 `"abc"`）都可以被看作是实现此类的实例。

类 String 中包括用于检查各个字符串的方法，比如用于**比较**字符串，**搜索**字符串，**提取**子字符串以及创建具有翻译为**大写**或**小写**的所有字符的字符串的副本。

 **特点**

1. 字符串不变：字符串的值在创建后不能被更改。
2. 因为String对象是不可变的，所以它们可以被共享。 
3.  `"abc"` 等效于 `char[] data={ 'a' , 'b' , 'c' } `。 

**类**

- `java.lang.String`

**构造方法**

- `public String()` ：初始化新创建的 String对象，以使其表示空字符序列。 

- `public String(char[] value) `：通过当前参数中的字符数组来构造新的String。 

- `public String(byte[] bytes) `：通过使用平台的默认字符集解码当前参数中的字节数组来构造新的String。

**成员方法**

- **判断功能的方法**
  - `public boolean equals (Object anObject)` ：将此字符串与指定对象进行比较。
  - `public boolean equalsIgnoreCase (String anotherString) `：将此字符串与指定对象进行比较，忽略大小写。

- **获取功能的方法** 
  - `public int length () `：返回此字符串的长度。 
  - `public String concat (String str)` ：将指定的字符串连接到该字符串的末尾。 
  - `public char charAt (int index)` ：返回指定索引处的 char值。 
  - `public int indexOf (String str)` ：返回指定子字符串第一次出现在该字符串内的索引,不存在返回`-1`。 
  - `public String substring (int beginIndex)` ：返回一个子字符串，从beginIndex开始截取字符串到字符串结尾。 
  - `public String substring (int beginIndex, int endIndex) `：返回一个子字符串，从beginIndex到endIndex截取字符串。含beginIndex，不含endIndex

- **转换功能的方法** 
  - `public char[] toCharArray ()` ：将此字符串转换为新的字符数组。
  - `public byte[] getBytes () `：使用平台的默认字符集将该 String编码转换为新的字节数组。 
  - `public String replace (CharSequence target, CharSequence replacement) `：将与target匹配的字符串使用replacement字符串替换。 

- **分割功能的方法** 
  - `public String[] split(String regex) `:将此字符串按照给定的regex（规则）拆分为字符串数组。

**使用**

```java
// 无参构造 
String str = new String（）； 
// 通过字符数组构造 
char chars[] = {'a', 'b', 'c'}; 
String str2 = new String(chars); 
// 通过字节数组构造 
byte bytes[] = { 97, 98, 99 }; 
String str3 = new String(bytes);

// 判断功能方法
public class String_Demo01 { 
  public static void main(String[] args) { 
    // 创建字符串对象 
    String s1 = "hello"; 
    String s2 = "hello"; 
    String s3 = "HELLO"; 
    // boolean equals(Object obj):比较字符串的内容是否相同 
    System.out.println(s1.equals(s2)); // true 
    System.out.println(s1.equals(s3)); // false 
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐"); 
    //boolean equalsIgnoreCase(String str):比较字符串的内容是否相同,忽略大小写 
    System.out.println(s1.equalsIgnoreCase(s2)); // true 
    System.out.println(s1.equalsIgnoreCase(s3)); // true 
    System.out.println("‐‐‐‐‐‐‐‐‐‐‐"); 
  } 
}

// 获取功能的方法
public class String_Demo02 { 
  public static void main(String[] args) { 
    String s = "helloworld"; 
    // int length():获取字符串的长度，其实也就是字符个数 
    System.out.println(s.length()); 
    // String concat (String str):将将指定的字符串连接到该字符串的末尾. 
    String s2 = s.concat("**hello itheima");// helloworld**hello itheima 
    // char charAt(int index):获取指定索引处的字符 
    System.out.println(s.charAt(0)); 
    // int indexOf(String str):获取str在字符串对象中第一次出现的索引,没有返回‐1 
    System.out.println(s.indexOf("l")); 
    // String substring(int start):从start开始截取字符串到字符串结尾 
    System.out.println(s.substring(0));
    // String substring(int start,int end):从start到end截取字符串。含start，不含end。
    System.out.println(s.substring(0, s.length())); 
  } 
}

// 转换功能的方法
public class String_Demo03 { 
  public static void main(String[] args) { 
    String s = "abcde"; 
    // char[] toCharArray():把字符串转换为字符数组 
    char[] chs = s.toCharArray(); 
    // byte[] getBytes ():把字符串转换为字节数组 
    byte[] bytes = s.getBytes(); 
  }
}

// 分割功能的方法
public class String_Demo04 { 
  public static void main(String[] args) { 
    String s = "aa|bb|cc"; 
    String[] strArray = s.split("|"); // ["aa","bb","cc"]
  }
}
```

