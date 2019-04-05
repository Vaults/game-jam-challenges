import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';
import {Dictionary} from './dictionary';

@Pipe({
  name: 'alienTalk'
})
export class AlienTalkPipe implements PipeTransform {

  transform(text: string, dictionary: Dictionary): string {
    if(!text){ return "";}
    const translatedText = text.split(" ").map(token => dictionary[token] || token).join(" ");
    return translatedText[0].toLocaleUpperCase() + translatedText.substring(1) + '.';
  }

}
