/**
 * @typedef {Object<string, {url: string, letters: Letters}>} Fonts
 * @typedef {Object<string, {left: number, top: number, width: number, height: number}>} Letters
 */

//   ###                   #     #            #####                 #
//  #   #                        #            #                     #
//  #      # ##   # ##    ##    ####    ###   #       ###   # ##   ####
//   ###   ##  #  ##  #    #     #     #   #  ####   #   #  ##  #   #
//      #  ##  #  #        #     #     #####  #      #   #  #   #   #
//  #   #  # ##   #        #     #  #  #      #      #   #  #   #   #  #
//   ###   #      #       ###     ##    ###   #       ###   #   #    ##
//         #
//         #
/**
 * A class that allows you to create a font from a sprite and use it in an HTML document.
 */
class SpriteFont {
    //                           #                       #
    //                           #                       #
    //  ##    ##   ###    ###   ###   ###   #  #   ##   ###    ##   ###
    // #     #  #  #  #  ##      #    #  #  #  #  #      #    #  #  #  #
    // #     #  #  #  #    ##    #    #     #  #  #      #    #  #  #
    //  ##    ##   #  #  ###      ##  #      ###   ##     ##   ##   #
    /**
     * Creates the SpriteFont object for the specified element.
     * @param {HTMLElement} el The element to display the font on.
     * @param {string} font The font to use, setup in the setup function.
     */
    constructor(el, font) {
        this.el = el;

        el.dataset.font = font;
        el.dataset.text = el.innerText;

        this.draw();
    }


    //  #                 #
    //  #                 #
    // ###    ##   #  #  ###
    //  #    # ##   ##    #
    //  #    ##     ##    #
    //   ##   ##   #  #    ##
    /**
     * Gets the text of the element.
     */
    get text() {
        return this.el.dataset.text;
    }

    /**
     * Sets the text of the element.
     */
    set text(text) {
        this.el.dataset.text = text;
        this.draw();
    }

    //    #
    //    #
    //  ###  ###    ###  #  #
    // #  #  #  #  #  #  #  #
    // #  #  #     # ##  ####
    //  ###  #      # #  ####
    /**
     * Draws the text.
     */
    draw() {
        let html = "";

        for (let i = 0; i < this.el.dataset.text.length; i++) {
            const letter = this.el.dataset.text.substr(i, 1),
                font = SpriteFont.fonts[this.el.dataset.font],
                letterInfo = font.letters[letter];

            if (letterInfo) {
                html = `${html}<div style="display: inline-block; width: ${letterInfo.width}px; height: ${letterInfo.height}px; background: url(${font.url}) -${letterInfo.left}px ${letterInfo.top}px"></div>`;
            } else {
                html = `${html}<span>${letter}</span>`;
            }
        }

        this.el.innerHTML = html;
    }

    //               #
    //               #
    //  ###    ##   ###   #  #  ###
    // ##     # ##   #    #  #  #  #
    //   ##   ##     #    #  #  #  #
    // ###     ##     ##   ###  ###
    //                          #
    /**
     * Sets up a font for use with SpriteFont.
     * @param {object} options The options to use.
     * @param {string} options.name The name of the font.
     * @param {string} options.url The URL of the image of the font.
     * @param {Letters} options.letters The list of available letters.
     */
    static setup(options) {
        SpriteFont.fonts[options.name] = {
            url: options.url,
            letters: options.letters
        }
    }
}

/** @type {Fonts} */
SpriteFont.fonts = {};
