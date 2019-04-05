import { Pipe, PipeTransform } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Pipe({
  name: 'typewriter'
})
export class TypewriterPipe implements PipeTransform {

  private audio = new Audio();
  private interval = setInterval(() => {}, 1000000);

  constructor() {
    this.audio.src = "assets/type.mp3";
    this.audio.load();
  }


  transform(value: string): any {
    clearInterval(this.interval);
    if(value){
    const behaviorSubject = new Subject();
    let i = 0;


    this.interval = setInterval(() => {
      behaviorSubject.next(value.substring(0, i));

      const increment = () => {
        if(i < value.length){
          i++;
          this.audio.currentTime = 0.09;
          this.audio.play()
            .then(() => {}); //Chrome fix
        }
      }

      if(![".", ","].includes(value[i - 1])){
        increment();
      } else {
        setTimeout(() => {
          increment();
        }, 200);
      }

    }, 30);

    return behaviorSubject;
    }
    return value;
  }

}
