package Interfaces;

public class Nicecar {
    private Engine engine; // can take any interface inside this package
private Media player =new CDplayer();
    public Nicecar(){
        engine=new PowerEngine();

    }

    public Nicecar(Engine engine) {
        this.engine = engine;
    }
 public void start(){
        engine.start();
 }
    public void stop(){
        engine.stop();
    }
    public void startMusic(){
        player.start();
    }
    public void stopMusic(){
        player.stop();
    }
    public void upgradeengine(){
        this.engine= new ElectricEngine();
    }

}
