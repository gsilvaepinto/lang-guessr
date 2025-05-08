
# WhatLang – Language Detection CLI

A simple command-line tool that guesses the language of a sentence using the [franc](https://www.npmjs.com/package/franc) language detection library.

This is my first Node.js project — built to help me learn how to use npm packages, handle command-line input, and work with external libraries in JavaScript.

---

## Features

- Detects the language of a sentence passed through the command line.
- Displays the top 3 most likely language guesses.
- Converts language codes (like `eng`, `spa`, `sco`) into full language names.
- Highlights the best match as the detected language.
- Shows a friendly error message if the language cannot be determined.

---

## Example

```bash
node index.js "Maybe he'll come, but it was raining a lot yesterday, so I don't know."
```

Output:

```
Top language guesses:

1. Scots (sco) – score: 1.0000
2. English (eng) – score: 0.9999
3. Afrikaans (afr) – score: 0.9981

Detected language: Scots
```

---

## Technologies Used

- **Node.js**: To run JavaScript outside the browser.
- **`franc`**: To analyze text and detect language.
- **`langs`**: To convert ISO 639-3 language codes into readable names.
- **`colors`**: To colorize the terminal output for better readability.

---

## How It Works

1. **User Input**: The user types a sentence in the terminal.
2. **Language Detection**: The sentence is analyzed using `francAll()` to get the top possible language matches.
3. **Language Mapping**: The 3-letter codes returned by `franc` are mapped to human-readable language names using `langs`.
4. **Display Output**: The top 3 guesses are shown, and the most likely one is highlighted.
5. **Fallback**: If a language code isn’t recognized, a fallback name is provided.

---

## Why I Built This

This project helped me learn:

- How to read command-line arguments in Node.js.
- How to install and use npm packages like `franc` and `langs`.
- How to handle simple errors and display clean output.
- The basics of working with real-world APIs/libraries in JavaScript.

---

## Credits

- Language detection powered by [franc](https://www.npmjs.com/package/franc)
- Language code mapping by [langs](https://www.npmjs.com/package/langs)
- Terminal coloring by [colors](https://www.npmjs.com/package/colors)
