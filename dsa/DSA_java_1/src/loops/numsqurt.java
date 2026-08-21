package loops;

import java.util.Scanner;

public class numsqurt {

    public static void main(String[] args) {

        System.out.println("Enter the number");

        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        for (int i = 1; i < num; i++) {

            for (int j = 1; j < num; j++) {
                System.out.print(j + " ");
            }

            System.out.println();
        }
    }
}
