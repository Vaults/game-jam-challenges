import {PanicStage} from './PanicSystem';

export class PanicAudioSystem {
  private audio: HTMLAudioElement = new Audio();

  constructor(){
    this.audio.src = 'assets/noise.mp3';
    this.audio.load();
    this.audio.loop = true;
    this.audio.volume = 0.05;
  }

  public listen(state: PanicStage){
    if(['nervous', 'angsty', 'panicked'].includes(state)){
      if(state === 'angsty'){
        this.audio.volume = 0.05;
      }
      if(state === 'panicked'){
        this.audio.volume = 0.3;
      }
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
