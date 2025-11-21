// Expanded phrase banks for 10,000 combinations

const openings = [
  "We celebrated at Kalash Marriage Lawn and",
  "Our wedding at Kalash Marriage Lawn was unforgettable because",
  "Attending an event here was delightful since",
  "Kalash Marriage Lawn impressed us as",
  "The venue made our occasion special as",
  "Hosting our ceremony here was a joy because",
  "Kalash Marriage Lawn stood out during our event since",
  "Our guests loved the atmosphere because",
  "The celebration felt grand as",
  "Choosing this venue was perfect since",
  "We enjoyed every moment here because",
  "The arrangements were smooth as",
  "Kalash Marriage Lawn truly delivered since",
  "Our family gathering was memorable because",
  "The venue exceeded expectations as",
  "We felt comfortable here since",
  "The hospitality was remarkable because",
  "Our function was seamless as",
  "The ambiance was charming since",
  "Kalash Marriage Lawn made our day special because"
];

const features = [
  "the open air lawn created a grand vibe",
  "the cozy indoor space felt welcoming",
  "the dedicated kitchen made catering smooth",
  "indoor parking was convenient for guests",
  "power backup kept everything seamless",
  "AC and non-AC rooms gave flexibility",
  "CCTV ensured safety throughout",
  "the spacious lawn accommodated everyone comfortably",
  "the indoor hall was beautifully decorated",
  "lighting arrangements enhanced the atmosphere",
  "the staff was attentive and professional",
  "cleanliness was maintained throughout the venue",
  "the sound system worked perfectly",
  "the stage setup was elegant",
  "the entryway was decorated beautifully",
  "the seating was comfortable and well arranged",
  "the catering team worked efficiently",
  "the lawn greenery added freshness",
  "the indoor area was cozy and stylish",
  "parking attendants were helpful",
  "backup facilities ensured no interruptions",
  "rooms were spacious and well maintained",
  "security was reliable with CCTV",
  "the ambience was festive and vibrant",
  "the arrangements reflected great planning"
];

const closings = [
  "— highly recommended!",
  "— exceeded expectations.",
  "— would book again.",
  "— perfect blend of elegance.",
  "— made our day memorable.",
  "— truly worth every penny.",
  "— a venue that stands out.",
  "— unforgettable experience.",
  "— ideal for family functions.",
  "— flawless from start to finish.",
  "— a place we’ll always cherish.",
  "— everything was handled smoothly.",
  "— guests were impressed.",
  "— we’ll return for future events.",
  "— a gem in Lucknow.",
  "— remarkable service and ambience.",
  "— left us delighted.",
  "— a venue that delivers quality.",
  "— simply outstanding.",
  "— our celebration was elevated."
];

// Generate review
function generateReview() {
  const opening = openings[Math.floor(Math.random() * openings.length)];
  const feature = features[Math.floor(Math.random() * features.length)];
  const closing = closings[Math.floor(Math.random() * closings.length)];
  return `${opening} ${feature}, ${closing}`;
}

// Display initial review
const reviewText = document.getElementById("reviewText");
reviewText.textContent = generateReview();

// New review
document.getElementById("newReviewBtn").addEventListener("click", () => {
  reviewText.textContent = generateReview();
});

// Copy review
document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(reviewText.textContent).then(() => {
    const msg = document.getElementById("copyMsg");
    msg.textContent = "✅ Copied!";
    setTimeout(() => msg.textContent = "", 2000);
  });
});

// Universal Google review link
const placeId = "ChIJMRToX2fimzkRUan3u1DooSM";
const mapsBtn = document.getElementById("mapsBtn");

// Always use HTTPS link (works everywhere)
mapsBtn.href = `https://search.google.com/local/writereview?placeid=${placeId}`;

