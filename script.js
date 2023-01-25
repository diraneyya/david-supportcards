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
        `,
  },

  {
    name: "Sarah",
    emoji: "💜🌈💛",
    title: "Sending soothing vibes",
    paragraph: `
            For a healing change of <a href="https://www.youtube.com/watch?v=vPhg6sc1Mk4&ab_channel=NaturalezaViva-SonidosyPaisajesIncre%C3%ADbles">location</a>
            without moving.
        `,
  },
  
  {
    name: "Lisa",
    emoji: "💗💫",
    title: "Hugs & strengths",
    paragraph: `
            I am very sorry for your loss.. Think of all the beautiful strolls, cuddles and best-buddy times you had. 
            I dont know you that long, yet, from what I know I can only imagine he had a true best friend in you and a beautiful life. 
            Feel hugged xox
        `,
  },
  {
    name: "Yevhenii",
    emoji: "❤️❤️❤️❤️❤️",
    title: "Positive vibes",
    paragraph: `
            Hope this <a href="https://open.spotify.com/track/2grjqo0Frpf2okIBiifQKs?si=28bd3ebf01944db2"
            target="_blank">song</a> will cheer you up
        `,
  },
  {
    name: "Nadia",
    emoji: "💫 🐱 ✨",
    title: "Here for you",
    paragraph: `
            Lovely <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"_blank">videoclip</a> to cheer you up!
        `,
  },
  {
    name: "Alisa",
    emoji: "💛 💪 🧘",
    title: "Hang in there!",
    paragraph: `
    Sending you strength and support. Remember to take care of yourself and give yourself time to process and heal.
        `,
  },
  {
    name: "Dejan",
    emoji: "🙏 ♥️",
    title: "My deepest sympathy",
    paragraph: `
    Wishing you peace, comfort, courage, and lots of love at this time of sorrow.
        <a href="https://music.youtube.com/watch?v=HUpBIRfoTwg"_blank">song</a>
        `,
  },
];
const shuffledCardData = 
    supportCardData.sort((a, b) => 0.5 - Math.random());

/**
 * STUDENT PARTICIPANT
 * DO NOT UPDATE THIS PART
 */

// Mount backdrop handlers
let backdropState = {
    answer: null,
    clicked: []
};

addEventListener('load', initializeApplication);
function initializeApplication() {
    const backdrop = document.querySelector('#backdrop');

    function showBackdrop(answer) {
        backdropState.answer = answer;
        backdrop.style.display = 'flex';
        backdrop.style.opacity = 1.0;
    }
    const lovelies = document.querySelectorAll('.lovelies span');
    function hideBackdrop() {
        if (backdrop.style.display === 'none') return;

        for (let [index, button] of Object.entries(lovelies)) {
            button.classList.remove('wrong');
            button.classList.remove('right');
        }
        backdropState.answer = null;
        backdrop.style.display = 'none';
        backdrop.style.opacity = 1.0;
    }

    hideBackdrop();
    backdrop.addEventListener('click', hideBackdrop);

    const buttons = document.querySelectorAll('.content .stars');
    console.assert(buttons.length === supportCardData.length, {
        error: `"who am I" buttons not found (length: ${buttons.length})`});
    for (let [index, button] of Object.entries(buttons)) {
        button.addEventListener('click', event => {
            console.dir(shuffledCardData[index]);
            showBackdrop(shuffledCardData[index].name);
            event.stopPropagation();
        })
    }

    console.assert(lovelies.length === supportCardData.length, {
        error: `"lovely person" buttons not found (length: ${buttons.length})`});
    for (let [index, button] of Object.entries(lovelies)) {
        button.addEventListener('click', event => {
            console.assert(backdropState.answer !== null);
            if (backdropState.answer === null)
                console.error("Backdrop launched without an answer in state");
            if (lovelies[index].innerText === backdropState.answer) {
                lovelies[index].classList.add('right');
                for (let [index2, button] of Object.entries(lovelies))
                    if (index2 !== index) button.classList.add('wrong');
                backdrop.style.opacity = 0.0;
                setTimeout(1000, hideBackdrop);
            } else {
                lovelies[index].classList.add('wrong');
            }

            event.stopPropagation();
        })
    }
}

// Templating code
if ("content" in document.createElement("template")) {
  // Grab the support-card template from the page
  const cardTemplate = document.querySelector("#supportcard");
  const personTemplate = document.querySelector("#lovelyperson");

  for (supportCard of shuffledCardData) {
    // Clone the support card, modify its fields and insert
    // it in place
    let clone = cardTemplate.content.cloneNode(true);
    let fields = clone.querySelectorAll("#field");
    clone.dataset = {name: supportCard.name};
    fields[0].textContent = supportCard.emoji;
    if (/<([^> ]+)[^>]+>.*<\/\1>/s.test(supportCard.paragraph))
      fields[1].innerHTML = supportCard.paragraph;
    else fields[1].textContent = supportCard.paragraph;
    fields[2].textContent = supportCard.title;

    cardTemplate.parentElement.appendChild(clone);

    // Clone the lovely person choice box, modify its field
    // and insert it in place
    clone = personTemplate.content.cloneNode(true);
    fields = clone.querySelectorAll("#field");
    fields[0].textContent = supportCard.name;

    personTemplate.parentElement.appendChild(clone);
  }
} else {
  // Find another way to add the rows to the table because
  // the HTML cardTemplate element is not supported.
  document.body.innerHTML = `
    <div class="container">
        <div class="face face2">
            <h2>Browser not supported</h2>
        </div>
    </div>
  `;
}
