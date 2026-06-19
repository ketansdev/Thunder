const jokes = [
  "😂 Why don't scientists trust atoms? Because they make up everything! 🤣",
  "🤣 Why did the scarecrow win an award? Because he was outstanding in his field! 🌾😂",
  "😂 Why don't skeletons fight each other? They don't have the guts! 💀🤣",
  "🤣 What do you call fake spaghetti? An impasta! 🍝😂",
  "😂 Why did the bicycle fall over? Because it was two-tired! 🚲🤣",
  "🤣 Why can't your nose be 12 inches long? Because then it would be a foot! 👃😂",
  "😂 What do you call cheese that isn't yours? Nacho cheese! 🧀🤣",
  "🤣 Why did the math book look sad? It had too many problems! 📚😂",
  "😂 Why did the coffee file a police report? It got mugged! ☕🤣",
  "🤣 What do you call a bear with no teeth? A gummy bear! 🐻😂",
  "😂 Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳🤣",
  "🤣 Why don't eggs tell jokes? They'd crack each other up! 🥚😂",
  "😂 What did one wall say to the other wall? I'll meet you at the corner! 🧱🤣",
  "🤣 Why did the computer go to the doctor? It caught a virus! 💻😂",
  "😂 What do you call a sleeping bull? A bulldozer! 🐂🤣",
  "🤣 Why did the cookie go to the hospital? Because it felt crummy! 🍪😂",
  "😂 Why was the broom late? It swept in! 🧹🤣",
  "🤣 What do you call a fish wearing a bowtie? Sofishticated! 🐟😂",
  "😂 Why don't oysters share their pearls? Because they're shellfish! 🦪🤣",
  "🤣 What did the janitor say when he jumped out of the closet? Supplies! 🧼😂",
  "😂 Why did the banana go to the doctor? It wasn't peeling well! 🍌🤣",
  "🤣 Why was the stadium so cool? It was filled with fans! 🏟️😂",
  "😂 What kind of tree fits in your hand? A palm tree! 🌴🤣",
  "🤣 Why did the tomato blush? Because it saw the salad dressing! 🍅😂",
  "😂 Why don't seagulls fly over the bay? Because then they'd be bagels! 🥯🤣",
  "🤣 What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks! 🦖😂",
  "😂 Why did the student eat his homework? Because the teacher said it was a piece of cake! 🎂🤣",
  "🤣 Why are frogs so happy? They eat whatever bugs them! 🐸😂",
  "😂 What do you call an alligator detective? An investi-gator! 🐊🤣",
  "🤣 Why did the chicken join a band? Because it had the drumsticks! 🐔🥁😂",
];

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const jokeText = document.getElementById("jokeText");

  const index = Math.floor(Math.random() * jokes.length);
  jokeText.textContent = jokes[index];
});
