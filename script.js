// Phrase banks sized to enable 1,000,000+ unique combinations

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
  "Kalash Marriage Lawn made our day special because",
  "From the first visit, we knew it was right as",
  "Planning felt effortless here since",
  "It became the heart of our celebration because",
  "Every detail was cared for as",
  "The setting elevated the event since",
  "Our experience felt premium because",
  "Right from the entrance, we felt welcomed as",
  "The vibe matched our vision since",
  "This venue brought our ideas to life because",
  "Their coordination was reassuring as",
  "Family and friends appreciated it since",
  "We felt truly hosted because",
  "The arrangements spoke quality as",
  "Everything came together beautifully since",
  "We trusted the team because",
  "The decor added magic as",
  "The day flowed perfectly since",
  "The venue felt just right because",
  "We’d been searching for this as",
  "It was special from start to finish since"
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
  "the arrangements reflected great planning",
  "the photo spots were thoughtfully designed",
  "the coordination with vendors was smooth",
  "the welcome area set a premium tone",
  "the bridal room was well prepared",
  "the entrance lighting felt grand",
  "the walkway decor guided guests elegantly",
  "the buffet layout was neat and accessible",
  "the service team responded quickly",
  "the floral accents added charm",
  "the stage backdrop looked luxurious",
  "the dance floor had great energy",
  "the timings were managed precisely",
  "the children's area was safe and fun",
  "the announcements were clear and timely",
  "the seating plan helped avoid crowding",
  "the temperature was comfortable throughout",
  "the prayer space was serene and tidy",
  "the valet service was courteous",
  "the signage made navigation easy",
  "the table decor matched the theme",
  "the restrooms were clean and stocked",
  "the waste management was handled discreetly",
  "the entry music created excitement",
  "the hospitality desk helped consistently",
  "the photo booth delighted guests",
  "the gift table was organized well",
  "the water stations were placed smartly",
  "the dessert counter was beautifully set",
  "the lighting transitions felt cinematic",
  "the sound checks avoided delays",
  "the rehearsal support was reassuring",
  "the cloakroom service was helpful",
  "the green room remained tidy",
  "the outdoor breeze felt refreshing",
  "the backup generator was reliable",
  "the ramp access supported seniors",
  "the child-friendly facilities impressed parents",
  "the vendor bay stayed uncluttered",
  "the entry timing was coordinated",
  "the premium cutlery looked refined",
  "the welcome drinks were served promptly",
  "the team handled last-minute changes calmly",
  "the paneling and finishes felt premium",
  "the drapes and fabrics added richness",
  "the facade lighting looked regal",
  "the pathway candles felt intimate",
  "the mandap area was arranged perfectly",
  "the ring ceremony setup was elegant",
  "the mehndi seating felt comfortable",
  "the sangeet sound was lively",
  "the haldi area was vibrant",
  "the reception entry felt royal",
  "the varmala stage was majestic",
  "the baraat route was managed well",
  "the car drop-off was smooth",
  "the photo timings were well coordinated",
  "the makings of the day felt thoughtful"
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
  "— our celebration was elevated.",
  "— premium experience throughout.",
  "— timeless and beautifully done.",
  "— hospitality that felt sincere.",
  "— organized and stress-free.",
  "— heartfelt thanks to the team.",
  "— polished, elegant, and warm.",
  "— exactly what we hoped for.",
  "— proud to have chosen this venue.",
  "— meticulous and thoughtful.",
  "— seamless coordination all day.",
  "— unforgettable memories made.",
  "— loved by every guest.",
  "— genuine care in every detail.",
  "— luxury without compromise.",
  "— refined and joyful.",
  "— we recommend wholeheartedly.",
  "— comfort and class, perfectly balanced.",
  "— we felt celebrated here.",
  "— graceful and well-executed.",
  "— a hallmark of quality."
];

// Luxury tone modifiers and connectors (small, high-impact variations)
const tones = [
  "truly",
  "deeply",
  "absolutely",
  "genuinely",
  "remarkably",
  "undeniably",
  "beautifully",
  "wonderfully",
  "impeccably",
  "consistently"
];

const connectors = [
  "and",
  "while",
  "as well as",
  "along with",
  "plus",
  "with"
];

const eventTypes = [
  "wedding",
  "reception",
  "engagement",
  "mehndi",
  "haldi",
  "sangeet",
  "anniversary",
  "family function",
  "corporate event",
  "birthday",
  "baby shower",
  "get-together"
];

// Optional second feature notes
const serviceNotes = [
  "the coordination team stayed proactive",
  "timelines were honored without stress",
  "little details were handled gracefully",
  "guest comfort stayed the priority",
  "the flow of events felt natural",
  "requests were managed with a smile",
  "the hosting experience felt premium",
  "on-ground support remained attentive",
  "communication stayed clear and prompt",
  "quality remained consistent throughout",
  "arrangements reflected careful planning",
  "everything came together beautifully"
];

// Create a stable hash to track uniqueness (session-level)
const usedHashes = new Set();
function hashParts(parts) {
  // Simple 32-bit hash
  const str = parts.join("|");
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}

function generateReview() {
  const opening = openings[Math.floor(Math.random() * openings.length)];
  const tone = tones[Math.floor(Math.random() * tones.length)];
  const feature1 = features[Math.floor(Math.random() * features.length)];
  const useSecond = Math.random() < 0.6; // 60% chance to add a second clause
  const connector = connectors[Math.floor(Math.random() * connectors.length)];
  const feature2 = useSecond ? features[Math.floor(Math.random() * features.length)] : null;
  const note = serviceNotes[Math.floor(Math.random() * serviceNotes.length)];
  const event = eventTypes[Math.floor(Math.random() * eventTypes.length)];
  const closing = closings[Math.floor(Math.random() * closings.length)];

  // Build sentence with subtle variations and ordering tweaks
  const clauses = [];
  clauses.push(`${opening} ${tone} ${feature1}`);
  if (useSecond && feature2 && feature2 !== feature1) {
    clauses.push(`${connector} ${feature2}`);
  }
  clauses.push(`${connector} ${note}`);
  clauses.push(`It was our ${event}, ${closing}`);

  // Randomize minor punctuation rhythm to add variation
  const punctuationVariant = Math.random();
  let sentence;
  if (punctuationVariant < 0.33) {
    sentence = clauses.join(", ") + "";
  } else if (punctuationVariant < 0.66) {
    sentence = clauses.slice(0, 2).join(", ") + ". " + clauses.slice(2).join(", ");
  } else {
    sentence = clauses[0] + "; " + clauses.slice(1).join(", ");
  }

  // Ensure session-level uniqueness by hashing key parts
  const signatureParts = [
    opening, tone, feature1,
    useSecond ? feature2 : "",
    connector, note, event, closing,
    punctuationVariant < 0.33 ? "A" : punctuationVariant < 0.66 ? "B" : "C"
  ];
  const sig = hashParts(signatureParts);

  // If already used, try regenerating up to a few times
  let attempts = 0;
  while (usedHashes.has(sig) && attempts < 5) {
    attempts++;
    return generateReview();
  }
  usedHashes.add(sig);
  return sentence;
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
    setTimeout(() => (msg.textContent = ""), 2000);
  }).catch(() => {
    const msg = document.getElementById("copyMsg");
    msg.textContent = "❌ Copy failed. Please try again.";
    setTimeout(() => (msg.textContent = ""), 2500);
  });
});

// Universal Google review link
const placeId = "ChIJMRToX2fimzkRUan3u1DooSM";
const mapsBtn = document.getElementById("mapsBtn");
mapsBtn.href = `https://search.google.com/local/writereview?placeid=${placeId}`;
