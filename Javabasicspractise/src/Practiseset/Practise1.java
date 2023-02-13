package Practiseset;

import java.util.Random;
import java.util.Scanner;

public class Practise1 {

   // Game 0 for Rock , 1 for scissors, 2 for paper

    public static void main(String[] args) {
        int n;
        int m;
        Random cominput = new Random();
        Scanner sin = new Scanner(System.in);
        int i=0;
        while ( i<5) {
            System.out.println("Enter 0 for Rock,1 for Scissors,2 for paper");
            n = sin.nextInt();
            m = cominput.nextInt(3);
            {
                if (n == m) {
                    System.out.println("Draw");
                } else if (n == 0 && m == 1 || n == 1 && m == 0 || n == 2 && m == 1) {
                    System.out.println("Computer Wins");
                } else {
                    System.out.println("You wins");
                }
                if (m == 0) {
                    System.out.println("Compute choice: Rock");
                } else if (m == 1) {
                    System.out.println("Compute choice: Scissors");
                } else {
                    System.out.println("Compute choice: Paper");
                }

            }
            i++;
        }

    }
    }



