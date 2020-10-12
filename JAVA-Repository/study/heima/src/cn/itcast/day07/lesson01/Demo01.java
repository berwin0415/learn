package cn.itcast.day07.lesson01;

import java.util.Scanner;

public class Demo01 {
    public static void main(String[] args) {
//        Scanner sc = new Scanner(System.in);
        int num = input();
        System.out.println(num);
    }

    public static int input() {
        return new Scanner(System.in).nextInt();
    }
}
