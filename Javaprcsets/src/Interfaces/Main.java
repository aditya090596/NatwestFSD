package Interfaces;

public class Main {
    public static void main(String[] args) {
//        Car car=new Car ();
//        car.acc();
//        car.acc();
//        car.stop();
//        car.brake();

       Media carmedia=new Car ();
       // What things you can access depends on Left side (Engine )
        //Which one of those version to access depends on right side (Car)
//        car.acc();
//       car.acc();
//        car.stop();

//     carmedia.stop(); // that's why we can create separate class for these interfaces as well


        Nicecar car=new Nicecar();
        car.startMusic();
        car.start();
        car.upgradeengine();
        car.start();

    }
}
