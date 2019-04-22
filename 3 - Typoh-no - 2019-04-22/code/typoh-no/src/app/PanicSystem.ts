export type PanicListener = (panic: PanicStage) => void;

export type PanicStage = 'calm' | 'anxious' | 'nervous' | 'angsty' | 'panicked' | 'dead';

export class PanicSystem {
  private panicListeners: PanicListener[] = [];
  private timeoutTime: number;
  private timeout: number;

  constructor(private panic: number) {

  }

  public registerListener(listener: PanicListener){
    this.panicListeners.push(listener);
  }

  public setInterval(interval: number){
    this.timeoutTime = interval;
  }

  public start(){
    this.timeout = setTimeout(() => {
      console.log(this.panic)
      this.setPanic(this.panic + 2.5);
      this.timeoutTime -= 5;
      this.start();
    }, this.timeoutTime);
  }

  public stop(){
    clearTimeout(this.timeoutTime);
  }

  public setPanic(panic: number){
    if(panic < 0){
      this.panic = 0;
    } else if(panic > 100) {
      this.panic = 100;
    } else {
      this.panic = panic;
    }
    this.panicListeners.forEach(listener => listener(this.convertToStage(this.panic)));
  }

  public goodType(){
    this.setPanic(this.panic / 1.05);
  }

  public badType(){
    this.setPanic(this.panic + 10);
  }

  private convertToStage(panic: number): PanicStage {
    if(panic === 100) { return 'dead';}
    if(panic < 5) { return 'calm'; }
    if(panic < 40) { return 'anxious';}
    if(panic < 50) { return 'nervous';}
    if(panic < 60) { return 'angsty';}
    return 'panicked';
  }
}
