package cn.itcast.day08.lesson02;

/*
 * public char[] toCharArray()
 * public byte[] getBytes()
 * public String replace(CharSequence oldString, CharSequence new String)
 *
 *
 * */
public class Demo04StringConvert {
    public static void main(String[] args) {
        char[] chars = "123456ab".toCharArray();
        System.out.println(chars);
        System.out.println("=".repeat(20));

        byte[] bytes = "abc".getBytes();
        for (int i = 0; i < bytes.length; i++) {
            System.out.println(bytes[i]);

        }
        System.out.println("=".repeat(20));
        String str1 = "How do you do?";
        String str2 = str1.replace("o", "*");
        System.out.println(str2);
    }
}
