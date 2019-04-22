import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PanicAudioSystem} from './PanicAudioSystem';
import {PanicStage, PanicSystem} from './PanicSystem';
import {states} from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'typoh-no';
  public text: string;
  public question: string;
  public placeholder = '';
  public started = false;
  public typedText = "";
  public disabled = false;
  public lost = false;
  public classes = [];
  public wrong = false;

  private interval: number;
  private stageCounter: number;
  private panicSystem: PanicSystem;
  private typeTimestamps: number[] = [];
  private startTimeout = 2500;

  ngOnInit(): void {
    this.question = "Let's go!"
    this.interval = this.loopHint();
    setTimeout(() => this.focusText(), 100);
  }

  public loopHint() {
    let count = 0;
    return setInterval(() => {
      count++;
      if(count > this.question.length + 20) {
        count = 0;
      }
      this.placeholder = this.question.substring(0, count);
    }, 150);
  }

  public onChange(text: string){
    if(!this.started) {
      this.wrong = !this.question.startsWith(text);
      if(text === this.question) {
        this.start();
      }
    } else {
      if(this.question.startsWith(text)){
        if(this.question === text){
          this.nextStage();
        } else {
          this.good();
        }
      } else {
        this.bad();
      }
    }
    this.typeTimestamps.push(new Date().getTime());
    this.updateAvg();
  }

  private updateAvg(){
    if(this.typeTimestamps.length > 2){
      const diffs = this.typeTimestamps.map((o, i, a) => (i > 0) ? o - a[i - 1] : null).filter(x => x !== null);
      let sum = diffs.reduce((p, n) => p + n, 0);

      // this is insane
      if(sum > this.startTimeout) {
        sum -= this.startTimeout;
      }

      const avg = sum / diffs.length;
      if(this.panicSystem) {
        this.panicSystem.setInterval(avg);
      }
    }
  }

  public nextStage(){
    setTimeout(() => {
      this.question = states[++this.stageCounter];
      this.typedText = '';
    }, 150);
  }



  public start(){
    window.clearInterval(this.interval);
    this.text = '';
    this.placeholder = '';
    this.stageCounter = -1;
    this.disabled = true;
    this.panicSystem = new PanicSystem(0);

    this.classes = ['panic', 'shake-jesus-why'];

    setTimeout(() => {
      this.started = true;
      this.disabled = false;
      this.panicSystem.registerListener((panic) => {
        if(panic === 'dead'){
          this.lost = true;
        }
      });

      this.panicSystem.registerListener((p) => this.stylePanic(p));
      const pas = new PanicAudioSystem();
      this.panicSystem.registerListener(p => pas.listen(p));
      this.nextStage();
      this.panicSystem.start();
      setTimeout(() => {
        this.focusText();
      }, 100)
    }, this.startTimeout);

  }

  @ViewChild("typo") textArea: ElementRef;
  focusText(): void {
    this.textArea.nativeElement.focus();
  }

  private good(){
    this.panicSystem.goodType();
    this.wrong = false;
  }

  private bad(){
    this.panicSystem.badType();
    this.wrong = true;
  }

  private stylePanic(p: PanicStage) {
    if(p === 'calm') {
      this.classes = [];
    } else if(p === 'anxious') {
      this.classes = ['anxious', 'shake-slowest']
    } else if(p === 'nervous') {
      this.classes = ['nervous', 'shake']
    } else if(p === 'angsty') {
      this.classes = ['angsty', 'shake-fast']
    } else if(p === 'panicked') {
      this.classes = ['panic', 'shake-jesus-why']
    }
  }
}
