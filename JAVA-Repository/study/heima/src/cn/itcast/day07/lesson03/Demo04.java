package cn.itcast.day07.lesson03;

import java.util.Random;
import java.util.Scanner;

public class Demo04 {
    public static void main(String[] args) {
        Random n = new Random();
        int target = n.nextInt(100) + 1;
        System.out.println("请输入数字：");
        Scanner sc = new Scanner(System.in);
        int guessNum = sc.nextInt();
        while (guessNum != target) {
            if (target > guessNum) {
                System.out.println("小了");
            } else {
                System.out.println("大了");
            }
            guessNum = sc.nextInt();
        }
        System.out.println("猜对了：数字是" + target);
    }
}
