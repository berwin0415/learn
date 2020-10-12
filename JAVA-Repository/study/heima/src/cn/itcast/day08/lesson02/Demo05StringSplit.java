package cn.itcast.day08.lesson02;
/*
* public String[] split(String regex):
* */
public class Demo05StringSplit {
    public static void main(String[] args) {
        String str1 = "aaa,bbb,ccc";
        String[] strArray = str1.split(",");
        for (int i = 0; i < strArray.length; i++) {
            System.out.println(strArray[i]);
        }

        String str2 = "aaa.bbb.ccc";
        String[] strArray2 = str2.split("\\.");
        for (int i = 0; i < strArray2.length; i++) {
            System.out.println(strArray[i]);
        }
    }
}
