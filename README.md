# spritefont-js

A library that allows you to easily use a sprite sheet of characters as a font.

## What is this?

This is a JavaScript file, spritefont.js, that you plug in to an HTML page to create an easy-to-use font.  While it's not the same as using a native font, the library is still easy to use.  The most work goes into setting up the font.

## How do I use this?

First, you need a sprite sheet.  This is a standard image that has characters laid out in a way so that you can define rectangles to use for the characters.

Here is an example of a font on a sprite sheet (courtesy of Team D-13 from the game Monolith):

![Monolith Large Font](examples/fonts/monolith-large.png)

To use this as a font in spritefont-js, you have to first include spritefont-js.  Download it to a sane location and add it in a script tag:

```
<script src="./dist/spritefont.min.js"></script>
```

Next you need to define your font.  Don't forget to setup upper and lower case characters if your sprite sheet only has upper case!

```
SpriteFont.setup({
    name: "Monolith Large",
    url: "./examples/fonts/monolith-large.png",
    letters: {
        "A": {left: 0, top: 0, width: 25, height: 40},
        "B": {left: 25, top: 0, width: 25, height: 40},
        "C": {left: 50, top: 0, width: 25, height: 40},
        "D": {left: 75, top: 0, width: 25, height: 40},
        "E": {left: 100, top: 0, width: 25, height: 40},
        "F": {left: 125, top: 0, width: 25, height: 40},
        "G": {left: 150, top: 0, width: 25, height: 40},
        "H": {left: 175, top: 0, width: 25, height: 40},
        "I": {left: 200, top: 0, width: 25, height: 40},
        "J": {left: 225, top: 0, width: 25, height: 40},
        "K": {left: 250, top: 0, width: 25, height: 40},
        "L": {left: 275, top: 0, width: 25, height: 40},
        "M": {left: 300, top: 0, width: 25, height: 40},
        "N": {left: 325, top: 0, width: 25, height: 40},
        "O": {left: 350, top: 0, width: 25, height: 40},
        "P": {left: 375, top: 0, width: 25, height: 40},
        "Q": {left: 400, top: 0, width: 25, height: 40},
        "R": {left: 425, top: 0, width: 25, height: 40},
        "S": {left: 450, top: 0, width: 25, height: 40},
        "T": {left: 475, top: 0, width: 25, height: 40},
        "U": {left: 500, top: 0, width: 25, height: 40},
        "V": {left: 525, top: 0, width: 25, height: 40},
        "W": {left: 550, top: 0, width: 25, height: 40},
        "X": {left: 575, top: 0, width: 25, height: 40},
        "Y": {left: 600, top: 0, width: 25, height: 40},
        "Z": {left: 625, top: 0, width: 25, height: 40},
        "Ä": {left: 650, top: 0, width: 25, height: 40},
        "Ö": {left: 675, top: 0, width: 25, height: 40},
        "Ü": {left: 700, top: 0, width: 25, height: 40},
        "a": {left: 0, top: 0, width: 25, height: 40},
        "b": {left: 25, top: 0, width: 25, height: 40},
        "c": {left: 50, top: 0, width: 25, height: 40},
        "d": {left: 75, top: 0, width: 25, height: 40},
        "e": {left: 100, top: 0, width: 25, height: 40},
        "f": {left: 125, top: 0, width: 25, height: 40},
        "g": {left: 150, top: 0, width: 25, height: 40},
        "h": {left: 175, top: 0, width: 25, height: 40},
        "i": {left: 200, top: 0, width: 25, height: 40},
        "j": {left: 225, top: 0, width: 25, height: 40},
        "k": {left: 250, top: 0, width: 25, height: 40},
        "l": {left: 275, top: 0, width: 25, height: 40},
        "m": {left: 300, top: 0, width: 25, height: 40},
        "n": {left: 325, top: 0, width: 25, height: 40},
        "o": {left: 350, top: 0, width: 25, height: 40},
        "p": {left: 375, top: 0, width: 25, height: 40},
        "q": {left: 400, top: 0, width: 25, height: 40},
        "r": {left: 425, top: 0, width: 25, height: 40},
        "s": {left: 450, top: 0, width: 25, height: 40},
        "t": {left: 475, top: 0, width: 25, height: 40},
        "u": {left: 500, top: 0, width: 25, height: 40},
        "v": {left: 525, top: 0, width: 25, height: 40},
        "w": {left: 550, top: 0, width: 25, height: 40},
        "x": {left: 575, top: 0, width: 25, height: 40},
        "y": {left: 600, top: 0, width: 25, height: 40},
        "z": {left: 625, top: 0, width: 25, height: 40},
        "ä": {left: 650, top: 0, width: 25, height: 40},
        "ö": {left: 675, top: 0, width: 25, height: 40},
        "ü": {left: 700, top: 0, width: 25, height: 40},
        "0": {left: 725, top: 0, width: 25, height: 40},
        "1": {left: 750, top: 0, width: 25, height: 40},
        "2": {left: 775, top: 0, width: 25, height: 40},
        "3": {left: 800, top: 0, width: 25, height: 40},
        "4": {left: 825, top: 0, width: 25, height: 40},
        "5": {left: 850, top: 0, width: 25, height: 40},
        "6": {left: 875, top: 0, width: 25, height: 40},
        "7": {left: 900, top: 0, width: 25, height: 40},
        "8": {left: 925, top: 0, width: 25, height: 40},
        "9": {left: 950, top: 0, width: 25, height: 40},
        "_": {left: 975, top: 0, width: 25, height: 40},
    }
});
```

In your HTML, simply setup an element to use:

```
<div id="title">Monolith</div>
```

Then in your JavaScript, you setup your element like so:

```
const title = new SpriteFont(document.getElementById("title"), "Monolith Large");
```

This will immediately convert the element to text in the specified font!  If you ever need to change the text in that element, simply use the `text` property of the SprintFont object:

```
title.text = "SprintFont";
```

That's all there is to it!

## What if the font doesn't have a character?

If the font is missing the character, or you didn't setup the character, it will fall back to just displaying normal text.  Be sure to setup proper CSS to show a proper fallback.  Fallback letters will be in a span tag, and you can take advantage of that to align fallback characters as needed.

## Does this work cross-browser?

Great question!  This is still a pre-release version, and I have not done testing on browsers outside of Chrome.  I am very interested in learning about compatibility on other browsers.

## Is there a way to colorize the font?

If you're using an all-white font you can easily accomplish this with SVG filters.  In your HTML, if you want to make a red that is #E22922, create the following matrix inline somewhere inside the body of the document:

```
<svg>
    <filter id="red">
        <feColorMatrix type="matrix" values="
            0 0 0 0 0.78548
            0 0 0 0 0.02585
            0 0 0 0 0.01778
            0 0 0 1 0
        " />
    </filter>
</svg>
```

The value of the last number in each of the first three rows is the ratio of red, green, and blue respectively, squared.  So, for instance, red's E2 in hex is 226 in decimal.  Divide that number by 255 and square the result, and you get approximately 0.78548, which is the number you should use in the matrix.  Repeat for green and blue.  The last row is for alpha and should remain as is.

Then, you can use that filter as a CSS style, even in a linked CSS stylesheet file:

```
filter: url(#red);
```

## Version History

### v0.1.0 - 2/2/2020

* Initial version, created for Monorail Racing. (https://twitter.com/MonorailRacing)
