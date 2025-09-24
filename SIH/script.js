function head() {
    var tl = gsap.timeline();
  
    tl.to(".bounding-text", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 3,
        delay: -0.5,
        stagger: 0.5,
      }).to(".content h2",{
        scale:1,
        duration:0.8,
        delay:-1
      })
  }

head();

const menu_btn=document.querySelector(".menu-btn");
const content=document.querySelector(".menu-btn .dropdown-content");
const searchDiv=document.querySelector(".div2");
menu_btn.addEventListener("click",function(){
    content.classList.toggle('hide');
})
document.addEventListener("click",function(e){
    if(!content.contains(e.target) && !menu_btn.contains(e.target)){
        content.classList.add("hide");
    }
})

const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["are you genious", "are you nerd", "are you intelligent"],
  ["i hate you", "i dont like you"],
  ["how are you", "how is life", "how are things", "how are you doing"],
  ["how is corona", "how is covid 19", "how is covid19 situation"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you", "who is your creator"],

  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "ok", "okay", "nice", "welcome"],
  ["thanks", "thank you"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["corona", "covid19", "coronavirus"],
  ["you are funny"],
  ["i dont know"],
  ["boring"],
  ["im tired"],
  ["tell me about india"],
  ["what makes madhubani painting unique in indian folk art"],
  ["how does kathakali reflect the cultural heritage of kerala"],
  ["what is the historical significance of the ajanta and ellora caves"],
  ["why is the kumbh mela considered a significant cultural and religious event in india"],
  ["what makes the taj mahal an iconic symbol of indian architectural heritage"],
  ["how does warli painting represent the tribal culture of maharashtra"],
  ["what role do the vedic scriptures play in shaping indian spiritual heritage"],
  ["how is rajasthani miniature painting different from other indian art forms"],
  ["what is the cultural significance of the khajuraho temples"],
  ["how has the art of pattachitra evolved in odisha"],
  ["What makes Madhubani painting unique in Indian folk art?"],
  ["How does Kathakali reflect the cultural heritage of Kerala?"],
  ["What is the historical significance of the Ajanta and Ellora caves?"],
  ["Why is the Kumbh Mela considered a significant cultural and religious event in India?"],
  ["What makes the Taj Mahal an iconic symbol of Indian  architectural heritage?"],
  ["How does Warli painting represent the tribal culture of Maharashtra?"],
  ["What role do the Vedic scriptures play in shaping Indian spiritual heritage?"],
  ["How is Rajasthani miniature painting different from other Indian art forms?"],
  ["What is the cultural significance of the Khajuraho temples?"],
  ["How has the art of Pattachitra evolved in Odisha?"]

];
const botReply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Okay"],
  ["Yes I am! "],
  ["I'm sorry about that. But I like you dude."],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],

  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am always young."],
  ["I am just a bot", "I am a bot. What are you?"],
  ["Sabitha Kuppusamy"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Briyani", "Burger", "Sushi", "Pizza"],
  ["Dude!"],
  ["Yes?"],
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],
  ["india is a great country"],
  ["Madhubani painting, originating from the Mithila region of Bihar, is known for its intricate patterns, vibrant colors, and depictions of nature, Hindu deities, and mythology. Traditionally, these paintings were done on walls and floors using natural dyes."],
  ["Kathakali, a classical dance-drama form from Kerala, is distinguished by its elaborate costumes, makeup, and facial expressions. It tells stories from the Mahabharata and Ramayana, preserving Kerala's cultural heritage through dramatic performances."],
  ["The Ajanta and Ellora caves in Maharashtra are UNESCO World Heritage sites. Ajanta is known for its Buddhist rock-cut caves with exquisite frescoes, while Ellora showcases Buddhist, Hindu, and Jain temples, reflecting India's religious and artistic history."],
  ["Kumbh Mela is the largest religious gathering in the world, held at the confluence of sacred rivers. It is significant for its deep spiritual symbolism, rituals, and the belief in attaining moksha by bathing in the holy waters."],
  ["The Taj Mahal, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is renowned for its symmetrical architecture, white marble, and intricate inlay work. It symbolizes love, Mughal artistry, and the blend of Persian and Indian architectural styles."],
  ["Warli painting, created by the Warli tribe of Maharashtra, uses simple geometric shapes to depict daily life, farming, and nature. Traditionally painted on mud walls, it represents the tribe’s close relationship with the natural world and their cultural identity."],
  ["The Vedas, the oldest sacred texts of Hinduism, form the foundation of Indian spirituality, philosophy, and religious practices. They cover topics ranging from cosmology and rituals to ethics, influencing Indian thought and cultural traditions."],
  ["Rajasthani miniature painting is known for its detailed, vibrant depictions of royal life, battles, and love stories. Originating in the royal courts, these paintings use natural pigments and fine brushwork to capture intricate scenes on paper or cloth."],
  ["The Khajuraho temples in Madhya Pradesh are famous for their stunning architecture and intricate erotic sculptures. Built during the Chandela dynasty, they symbolize the celebration of life, love, and devotion, blending art with spirituality."],
  ["Pattachitra, a traditional cloth-based scroll painting from Odisha, has evolved over centuries, depicting stories from Hindu mythology, especially around the Jagannath cult. These paintings are known for their intricate details, mythological themes, and use of natural colors."],
  ["Madhubani painting, originating from the Mithila region of Bihar, is known for its intricate patterns, vibrant colors, and depictions of nature, Hindu deities, and mythology. Traditionally, these paintings were done on walls and floors using natural dyes."],
  ["Kathakali, a classical dance-drama form from Kerala, is distinguished by its elaborate costumes, makeup, and facial expressions. It tells stories from the Mahabharata and Ramayana, preserving Kerala's cultural heritage through dramatic performances."],
  ["The Ajanta and Ellora caves in Maharashtra are UNESCO World Heritage sites. Ajanta is known for its Buddhist rock-cut caves with exquisite frescoes, while Ellora showcases Buddhist, Hindu, and Jain temples, reflecting India's religious and artistic history."],
  ["Kumbh Mela is the largest religious gathering in the world, held at the confluence of sacred rivers. It is significant for its deep spiritual symbolism, rituals, and the belief in attaining moksha by bathing in the holy waters."],
  ["The Taj Mahal, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is renowned for its symmetrical architecture, white marble, and intricate inlay work. It symbolizes love, Mughal artistry, and the blend of Persian and Indian architectural styles."],
  ["Warli painting, created by the Warli tribe of Maharashtra, uses simple geometric shapes to depict daily life, farming, and nature. Traditionally painted on mud walls, it represents the tribe's close relationship with the natural world and their cultural identity."],
  ["The Vedas, the oldest sacred texts of Hinduism, form the foundation of Indian spirituality, philosophy, and religious practices. They cover topics ranging from cosmology and rituals to ethics, influencing Indian thought and cultural traditions."],
  ["Rajasthani miniature painting is known for its detailed, vibrant depictions of royal life, battles, and love stories. Originating in the royal courts, these paintings use natural pigments and fine brushwork to capture intricate scenes on paper or cloth."],
  ["The Khajuraho temples in Madhya Pradesh are famous for their stunning architecture and intricate erotic sculptures. Built during the Chandela dynasty, they symbolize the celebration of life, love, and devotion, blending art with spirituality."],
  ["Pattachitra, a traditional cloth-based scroll painting from Odisha, has evolved over centuries, depicting stories from Hindu mythology, especially around the Jagannath cult. These paintings are known for their intricate details, mythological themes, and use of natural colors."]
];

const alternative = [
  "Same here, dude.",
  "That's cool! Go on...",
  "Dude...",
  "Ask something else...",
  "Hey, I'm listening..."
];

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-aus";
  u.volume = 1;
  u.rate = 1;
  u.pitch = 1;
  synth.speak(u);
}

function sendMessage() {
  const inputField = document.getElementById("input");
  let input = inputField.value.trim();
  input != "" && output(input);
  inputField.value = "";
}
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      input != "" && output(input);
      inputField.value = "";
    }
  });
});

function output(input) {
  let product;

  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  text = text
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();

  let comparedText = compare(userMessage, botReply, text);

  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  //containMessageCheck(string);
  if (item) return item;
  else return containMessageCheck(string);
}

function containMessageCheck(string) {
  let expectedReply = [
    [
      "Good Bye, dude",
      "Bye, See you!",
      "Dude, Bye. Take care of your health in this situation."
    ],
    ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
    ["Have a pleasant evening!", "Good evening too", "Evening!"],
    ["Good morning, Have a great day!", "Morning, dude!"],
    ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["evening", "good evening"],
    ["morning", "good morning"],
    ["noon"]
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}
function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  voiceControl(product);
}


const chatBox=document.querySelector(".box")
document.querySelector(".add .btn").addEventListener("click",()=>{
  chatBox.classList.toggle("hide-box")
})