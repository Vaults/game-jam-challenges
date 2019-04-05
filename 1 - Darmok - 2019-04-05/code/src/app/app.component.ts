import {Component, OnInit} from '@angular/core';
import {dictionary, Dictionary} from './imports/dictionary';
import {DialogState, states} from './imports/states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public dictionary: Dictionary;
  public state: DialogState;
  public responseStage: string[];

  private stateIndex = 0;

  ngOnInit(): void {
    this.dictionary = dictionary;
    this.responseStage = [];
    this.state = states[this.stateIndex];
  }

  public process(item: {key: string, value: string}) {
    this.responseStage.push(item.key);
    if(this.state.answer === null || this.state.response === null) {
      // No input
      this.nextState();
    } else {
      if(this.state.answer.startsWith(this.responseStage.join(" "))){
        if(this.state.answer === this.responseStage.join(" ")) {
          // Correct complete answer
          this.nextState();
        }
      } else {
        this.responseStage = [];
      }
    }
  }

  public nextState() {
    this.responseStage = [];
    this.state = states[++this.stateIndex];
    if(this.state.alien) {
      let audio = new Audio("assets/alien.m4a");
      audio.load();
      audio.playbackRate = [0.5, 0.75, 1][~~(Math.random()*3)]
      audio.currentTime = 0.5;
      audio.volume = 0.2;
      audio.play()
        .then(() => {}); //Chrome fix
    }
  }
}
