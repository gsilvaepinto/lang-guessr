import { franc, francAll } from "franc";
import colors from 'colors';
import langs from 'langs';

function main(){
    const weakLangs = {
        sco: 'Scottish'
    };

    const input = process.argv[2];

    if (!input){
        console.log("Please provide a text input.".red);
        return;
    }

    const topGuesses = francAll(input);

    if (!topGuesses.length || topGuesses[0][0] === 'und'){
        console.log("Sorry, couldn't determine the language.".yellow);
        return;
    }

    console.log("Top language guesses:\n".cyan);
    topGuesses.slice(0, 3).forEach(([code, score], index) => {
        const lang = langs.where('3', code);
        const name = lang ? lang.name : weakLangs[code] || code;
        const line = `${index + 1}. ${name} (${code}) – score: ${score.toFixed(4)}`;
        console.log(line);
    })

    const [bestGuess] = topGuesses[0];
    const bestLang = langs.where('3', bestGuess) || {name: weakLangs[bestGuess] || bestGuess}

    console.log(`\nDetected language: ${bestLang.name}`.green);
}

main();
