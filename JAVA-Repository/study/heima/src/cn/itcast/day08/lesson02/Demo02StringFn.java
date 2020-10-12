package cn.itcast.day08.lesson02;

public class Demo02StringFn {
    public static void main(String[] args) {
        // 获取字符串长度 length
        int len = "HELLO WORLD".length();
        System.out.println(len);

        //  拼接字符串 concat
        String str1 = "hello";
        String str2 = "world";
        String str3 = str1.concat(str2);
        System.out.println(str3);

        // 获取指定引索位置字符 charAt
        String str4 = "abcdef";
        char ch = str4.charAt(3);
        System.out.println(ch);

        // indexOf
    }
}
