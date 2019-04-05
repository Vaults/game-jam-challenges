export type Dictionary = {[key: string]: string};
const words = ['body', 'like', 'orbital', 'moon', 'day', 'all', 'birth', 'mouth', 'sponge', 'hello', 'grateful', 'mind', 'in'];

const createDictionary = () => words.reduce((acc, next) => {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvxyz";
  const randomCharacter = () => {
    if(Math.random() > 0.2) {
      return vowels[~~(Math.random()*5)];
    }
    return consonants[~~(Math.random()*21)];
  }

  acc[next] = Array(3 + ~~(Math.random()*4)).fill("").map(_ => randomCharacter()).join('');
  return acc;
}, {});

const storedDict = window.localStorage.getItem('dict');
if(!storedDict) {
  window.localStorage.setItem('dict', JSON.stringify(createDictionary()));
}

export const dictionary = JSON.parse(window.localStorage.getItem('dict'));
