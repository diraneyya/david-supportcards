/**
 * STUDENT PARTICIPANT
 * PLEASE UPDATE YOUR PART HERE
 * 
 * Instructions:
 *   - Go to the curly-brace-scoped part with your name inside it
 *   - Change the emoji, this is a list of the glyphs available in
 *     the emoji font used: 
 *     https://fonts.google.com/noto/specimen/Noto+Emoji/glyphs
 *   - Change the title, one or two words max
 *   - Change the paragraph, spill your heart out
 * 
 * Ideas:
 *  - The paragraph part can have links, remember, David is a musi-
 *    cian, so by including a link to a track, you might manage to
 *    touch his heart more easily.
 *  - Images can also be included, in which case, try to use your
 *    limited knowledge to ensure the image (sizing and color wise)
 *    blends well with the rest of the page
 */
const supportCardData = [
    {
        name: "Orwa",
        emoji: "💛❤️🧡💝",
        title: "Much love",
        paragraph: `
            A <a href="https://open.spotify.com/album/77mt6Wp8IJ4arMlbwoJiNH"
            target="_blank">song</a> for you, beautiful
        `
    },
    {
        name: "Sarah",
        emoji: "placeholder",
        title: "placeholder",
        paragraph: `
            placeholder
        `
    },
    {
        name: "Lisa",
        emoji: "placeholder",
        title: "placeholder",
        paragraph: `
            placeholder 
        `
    },
    {
        name: "Yevhenii",
        emoji: "💜🙌🖤🙌💜",
        title: "Positive vibes",
        paragraph: `
            Hope this <a href="https://open.spotify.com/track/2grjqo0Frpf2okIBiifQKs?si=28bd3ebf01944db2"
            target="_blank">song</a> will cheer you up
        `
    },
    {
        name: "Nadia",
        emoji: ":dizzy: :smile_cat: :sparkles:",
        title: "Here for yoy",
        paragraph: `
            Lovely <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"_blank">videoclip</a> to cheer you up!
        `
    },
    {
        name: "Alisa",
        emoji: "placeholder",
        title: "placeholder",
        paragraph: `
            placeholder
        `
    },
];

/**
 * STUDENT PARTICIPANT
 * DO NOT UPDATE THIS PART
 */
if ('content' in document.createElement('template')) {
    // Grab the support-card template from the page
    const template = document.querySelector('#supportcard');

    const shuffledCardData = supportCardData.sort(
        (a, b) => 0.5 - Math.random());
    for (supportCard of shuffledCardData) {

        // Clone the support card, modify its fields and insert 
        // it into the document
        const clone = template.content.cloneNode(true);
        const fields = clone.querySelectorAll("#field");
        fields[0].textContent = supportCard.emoji;
        if (/<([^> ]+)[^>]+>.*<\/\1>/s.test(supportCard.paragraph))
            fields[1].innerHTML = supportCard.paragraph;
        else
            fields[1].textContent = supportCard.paragraph;
        fields[2].textContent = supportCard.title;
    
        document.querySelector('.container').appendChild(clone);
    }
} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
  document.body.innerHTML = `
    <div class="container">
        <div class="face face2">
            <h2>Browser not supported</h2>
        </div>
    </div>
  `;
}
