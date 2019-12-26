import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {

  transform(value: any): string {
    if(!value) return null;    

    let sentence = String(value).split('.');
    for(var i = 0; i < sentence.length; i++){
      let curSentence = sentence[i];
      sentence[i] = this.transformSentence(curSentence) + '.';      
    }
    return sentence.join(' ');
  }

  private transformSentence(text: string): string{
    let words = text.split(' ');
    
    for(var i = 0; i < words.length; i++){
      let word = words[i];
      if(i > 0){
        words[i] = word.toLowerCase();
      } else {
        words[i] = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase(); 
      }
    }
    return words.join(' ');
  }
}