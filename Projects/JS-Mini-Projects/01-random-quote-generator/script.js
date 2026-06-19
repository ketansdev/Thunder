const quote = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke",
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    quote: "Small steps every day lead to big results.",
    author: "Unknown",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "Your limitation—it's only your imagination.",
    author: "Unknown",
  },
  {
    quote: "Great things never come from comfort zones.",
    author: "Unknown",
  },
  {
    quote: "Stay positive, work hard, make it happen.",
    author: "Unknown",
  },
  {
    quote: "Don't stop until you're proud.",
    author: "Unknown",
  },
  {
    quote: "Success doesn't just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    quote: "Difficult roads often lead to beautiful destinations.",
    author: "Zig Ziglar",
  },
  {
    quote: "Believe in yourself and all that you are.",
    author: "Christian D. Larson",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    quote: "Work hard in silence, let success make the noise.",
    author: "Frank Ocean",
  },
  {
    quote: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote:
      "Never give up on a dream just because of the time it will take to accomplish it.",
    author: "Earl Nightingale",
  },
  {
    quote: "Today is your opportunity to build the tomorrow you want.",
    author: "Ken Poirot",
  },
];

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("click", quote)
  const quoteText = document.querySelector("h2");
  const author = document.querySelector("p");
  const index = Math.floor(Math.random() * quote.length);
  quoteText.textContent = quote[index].quote;
  author.textContent = `—${quote[index].author}`;
});
