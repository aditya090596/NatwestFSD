package Interfaces;

public class CDplayer implements Media{
    @Override
    public void start() {
        System.out.println("Playmusic");
    }

    @Override
    public void stop() {
        System.out.println("Music stop");
    }
}
