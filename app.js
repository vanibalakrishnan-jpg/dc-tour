// ============================================================
//  NATIONAL TREASURE DC TOUR — APP LOGIC
//  GPS-powered interactive tour of all film locations
// ============================================================

const SITES = [
  {
    id: 1,
    name: "National Archives",
    emoji: "📜",
    shortDesc: "Where Ben Gates steals the Declaration of Independence",
    lat: 38.8935,
    lng: -77.0285,
    movie: "National Treasure (2004) — The heist of the century",
    history: `<p>The <strong>National Archives Building</strong>, completed in 1935, is one of America's most sacred civic temples. Designed by architect John Russell Pope in the neoclassical style, it houses the nation's founding documents: the Declaration of Independence, the Constitution, and the Bill of Rights.</p>
    <p>The Declaration of Independence was adopted by the Continental Congress on <strong>July 4, 1776</strong>, making it 250 years old this year. Thomas Jefferson drafted it in just 17 days, drawing on Enlightenment philosophy to argue that all men are created equal and that government derives power from the consent of the governed.</p>
    <p>The Rotunda has been home to these documents since 1952. The cases are filled with humidified argon gas and bulletproof glass — far harder to crack than the film suggests!</p>`,
    scene: `<p>In the film, <strong>Benjamin Franklin Gates</strong> (Nicolas Cage) attends a gala at the National Archives and steals the Declaration of Independence right under the noses of FBI agents.</p>
    <p>He discovers a map printed on the back of the Declaration — left there by the Founding Fathers — that leads to a massive treasure hidden beneath Washington D.C.</p>
    <p>The scene where Gates uses specialized glasses to read the invisible map on the back of the document is one of the film's most iconic moments. The production filmed exterior shots on location, though interior sequences used sets.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Open daily 10am–5:30pm (extended summer hours)</li>
      <li><strong>Admission:</strong> Free! Timed-entry passes are recommended.</li>
      <li>Book passes at <strong>archives.gov</strong> in advance — lines can be long.</li>
      <li>The Rotunda with the founding documents is the main attraction.</li>
      <li>Don't miss the <strong>Public Vaults</strong> exhibit — interactive and fascinating.</li>
      <li>Allow at least 1.5 hours for a proper visit.</li>
    </ul>`,
  },
  {
    id: 2,
    name: "Lincoln Memorial",
    emoji: "🏛️",
    shortDesc: "Clues hidden in Lincoln's memorial chambers",
    lat: 38.8893,
    lng: -77.0502,
    movie: "National Treasure (2004) — The treasure trail leads here",
    history: `<p>The <strong>Lincoln Memorial</strong>, dedicated in 1922, stands as one of America's most beloved monuments. Designed by Henry Bacon and modeled on the Parthenon, it honors the 16th President who preserved the Union and ended slavery.</p>
    <p>The <strong>19-foot marble statue</strong> of Lincoln was carved by Daniel Chester French. Lincoln's hands are often said to sign the letters "A" and "L" in American Sign Language, though this is debated by historians.</p>
    <p>The memorial has been a focal point for civil rights history: Marian Anderson performed here in 1939 when she was denied the DAR Constitution Hall, and <strong>Martin Luther King Jr.</strong> delivered his "I Have a Dream" speech on its steps in 1963.</p>`,
    scene: `<p>The Lincoln Memorial features prominently in the first National Treasure film. Ben Gates traces clues from the Declaration that lead to the monument, using the back of a $5 bill to understand how shadows and sight lines align to reveal the next clue.</p>
    <p>The idea that the founding fathers left a treasure map requiring knowledge of D.C.'s landmarks was a key plot device — the city's layout being designed by <strong>Pierre Charles L'Enfant</strong> with Masonic geometry in mind.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Open 24 hours, staffed 9:30am–11:30pm daily</li>
      <li><strong>Admission:</strong> Free</li>
      <li>Visit at <strong>sunrise or sunset</strong> for breathtaking views down the Reflecting Pool.</li>
      <li>Look for the spot on the steps marked "I Have a Dream" — commemorating MLK's speech.</li>
      <li>The lower chamber houses murals — often overlooked by visitors.</li>
      <li>Parking is available at the Lincoln Memorial Circle lot.</li>
    </ul>`,
  },
  {
    id: 3,
    name: "Washington Monument",
    emoji: "🗽",
    shortDesc: "The obelisk at the heart of the treasure map",
    lat: 38.8895,
    lng: -77.0353,
    movie: "National Treasure (2004) — Shadow alignment clue",
    history: `<p>The <strong>Washington Monument</strong>, completed in 1884, is the world's tallest obelisk at <strong>555 feet</strong>. It honors George Washington, the nation's first president. Construction began in 1848 but was halted for 23 years during the Civil War — you can still see a subtle change in the marble color about one-third of the way up.</p>
    <p>The monument was the tallest structure in the world at completion, briefly surpassing Cologne Cathedral. Its design was inspired by ancient Egyptian obelisks, which were symbols of the sun god Ra — a detail that ties into the film's themes of ancient wisdom hidden in plain sight.</p>
    <p>Inside, the monument contains 193 commemorative stones donated by states, cities, and countries around the world.</p>`,
    scene: `<p>The Washington Monument is central to the film's treasure-hunting logic. The shadow cast by the obelisk at a specific time of day points toward the next clue location — a nod to the film's themes of Masonic geometry and solar alignment encoded into D.C.'s original city plan.</p>
    <p>Washington was indeed a <strong>Freemason</strong>, and the film uses this historical fact as the seed for its conspiracy theory about the founding fathers hiding a massive treasure beneath the capital.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Daily 9am–5pm (closed Dec 25)</li>
      <li><strong>Admission:</strong> Free, but timed-entry passes required</li>
      <li>Book passes at <strong>recreation.gov</strong> — they go fast!</li>
      <li>The elevator ride to the top takes just 70 seconds.</li>
      <li>Views from the top show the entire L'Enfant grid — perfect for seeing the city like a treasure map.</li>
      <li>Bring the kids — there's a Junior Ranger program.</li>
    </ul>`,
  },
  {
    id: 4,
    name: "Library of Congress",
    emoji: "📚",
    shortDesc: "Ancient knowledge and Freemason connections",
    lat: 38.8887,
    lng: -77.0047,
    movie: "National Treasure (2004) — Research hub for the Gates family",
    history: `<p>The <strong>Library of Congress</strong> is the largest library in the world, holding more than <strong>170 million items</strong> in 470 languages. Founded in 1800 to serve Congress, it grew into a national library after the British burned the Capitol in 1814 — Thomas Jefferson sold his personal library of 6,487 books to replace the collection.</p>
    <p>The <strong>Thomas Jefferson Building</strong> (1897), the main building tourists visit, is a masterpiece of Italian Renaissance architecture. The Great Hall's ornate ceiling, with its detailed allegories of human knowledge, is one of the most beautiful interiors in America.</p>
    <p>The Library holds a copy of the <strong>Gutenberg Bible</strong>, one of only three perfect vellum copies in the world.</p>`,
    scene: `<p>The Gates family's research into Freemasonry and founding father secrets leads them to the Library of Congress in the film. Benjamin's father Patrick (Jon Voight) has spent decades researching the treasure legend, and the library's vast historical records provide the documentary evidence they need.</p>
    <p>The film correctly portrays many founding fathers as Freemasons — <strong>Washington, Franklin, and many signers of the Declaration</strong> were indeed members of the fraternal order.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Mon–Sat 8:30am–4:30pm</li>
      <li><strong>Admission:</strong> Free — visitor galleries and exhibitions open to all</li>
      <li>The <strong>Great Hall</strong> and Main Reading Room are stunning — don't miss them.</li>
      <li>Free tours are available Monday–Saturday, check schedule online.</li>
      <li>You can apply for a reader card and use the reading rooms if you're researching.</li>
      <li>The gift shop has excellent books on American history.</li>
    </ul>`,
  },
  {
    id: 5,
    name: "Independence Hall, Philadelphia (Origin)",
    emoji: "🔔",
    shortDesc: "Where the treasure hunt begins — film opening scene",
    lat: 38.8999,
    lng: -77.0269,
    movie: "National Treasure (2004) — The Gates family legacy begins here",
    history: `<p>Though <strong>Independence Hall</strong> is in Philadelphia, the film's narrative is deeply tied to it. The D.C. tour honors it through the nearby <strong>Capitol building</strong>, which reflects the same founding-era ideals. The U.S. Capitol was begun in 1793 — George Washington himself laid the cornerstone.</p>
    <p>The Capitol building where we see this stop is the seat of the American legislative branch. Its famous dome, completed during the Civil War by Lincoln's order as a symbol of national unity, rises <strong>288 feet</strong> and is topped by the Statue of Freedom.</p>
    <p>The Capitol's crypt was originally planned as Washington's tomb, but his family declined to move him from Mount Vernon.</p>`,
    scene: `<p>The film opens with young Benjamin Gates learning the family legend from his grandfather: that generations of the Gates family have been the keepers of a secret pointing to a massive treasure assembled by the founding fathers. The Capitol building and its surroundings set the scene for the film's grand conspiracy.</p>
    <p>The line <em>"Someone has to go first"</em> — Ben's grandfather telling him about the sacrifice of the treasure's guardians — is the emotional foundation of the entire film.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Capitol visitor center open Mon–Sat 8:30am–4:30pm</li>
      <li><strong>Admission:</strong> Free — reserve tours in advance through your Congress member's office</li>
      <li>The <strong>Rotunda</strong> features epic murals and the Apotheosis of Washington.</li>
      <li>The National Statuary Hall is where each state has contributed two statues.</li>
      <li>Walking the Capitol grounds at sunset with the dome lit up is unforgettable.</li>
    </ul>`,
  },
  {
    id: 6,
    name: "U.S. Capitol Building",
    emoji: "🏛️",
    shortDesc: "Seat of democracy and Masonic cornerstone ceremony",
    lat: 38.8899,
    lng: -77.0091,
    movie: "National Treasure (2004 & 2007) — Pivotal backdrop",
    history: `<p>The <strong>United States Capitol</strong> has been the meeting place of Congress since 1800. Architect William Thornton won the design competition, and the building has been expanded and renovated several times since. The <strong>Senate chamber</strong> and <strong>House chamber</strong> are where the laws of the nation are debated and passed.</p>
    <p>George Washington, a Freemason, laid the cornerstone in <strong>1793 wearing full Masonic regalia</strong> — a real historical fact that the film uses as evidence for its fictional treasure conspiracy.</p>
    <p>The Capitol sits at the very center of D.C.'s grid — all four quadrants of the city radiate from it, making it the literal and symbolic heart of the nation's capital.</p>`,
    scene: `<p>The Capitol's Masonic founding ceremony is a central piece of evidence in Ben Gates' theory. In <em>National Treasure: Book of Secrets</em>, the Capitol and its underground passageways figure into the hunt for the City of Gold.</p>
    <p>The film's fictional <strong>secret room at the Oval Office</strong> and <strong>underground passages</strong> connecting D.C.'s monuments are creative inventions — but the real Capitol does have miles of underground tunnels connecting it to Senate and House office buildings.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Visitor Center Mon–Sat 8:30am–4:30pm</li>
      <li><strong>Admission:</strong> Free — guided tours through congressmember offices</li>
      <li>Walk the <strong>East Front Plaza</strong> for classic photos with the full dome.</li>
      <li>The Capitol subway (used by senators) is not public, but the underground visitor center is impressive.</li>
      <li>Security screening required — leave large bags behind.</li>
    </ul>`,
  },
  {
    id: 7,
    name: "National Mall",
    emoji: "🌿",
    shortDesc: "The grand axis where the treasure map unfolds",
    lat: 38.8893,
    lng: -77.0353,
    movie: "National Treasure (2004) — The Masonic axis of power",
    history: `<p>The <strong>National Mall</strong> is a 1.9-mile park stretching from the Capitol to the Lincoln Memorial. It was designed by Pierre Charles L'Enfant in 1791 as the grand ceremonial spine of the new capital. The Mall holds many of America's most important museums and memorials — all free, all world-class.</p>
    <p>L'Enfant's original plan incorporated geometric sight lines, diagonal boulevards, and symbolic relationships between buildings — fueling theories (including the film's) about hidden meaning in D.C.'s layout.</p>
    <p>The Mall has hosted countless historic events: the 1963 March on Washington, inaugural celebrations, protest marches, and the annual Fourth of July festivities.</p>`,
    scene: `<p>The Mall serves as the central thread connecting all of the film's D.C. locations. Ben Gates uses knowledge of the Mall's geometry — and the relationships between its monuments — to decode the treasure map on the Declaration.</p>
    <p>Walking the Mall from the Capitol to the Lincoln Memorial is essentially walking the film's entire treasure trail in one straight line.</p>`,
    tips: `<ul>
      <li><strong>Open:</strong> 24 hours, free always</li>
      <li>Rent a bike from one of the many Capital Bikeshare stations — perfect for the full Mall.</li>
      <li>The <strong>Smithsonian museums</strong> line both sides — all free, all extraordinary.</li>
      <li>Food trucks cluster near the Washington Monument most days.</li>
      <li>Allow a full day to do justice to the museums and memorials.</li>
      <li>The Mall is stunning on a clear night with all monuments illuminated.</li>
    </ul>`,
  },
  {
    id: 8,
    name: "Smithsonian American History Museum",
    emoji: "⭐",
    shortDesc: "America's attic holds the nation's treasures",
    lat: 38.8913,
    lng: -77.0300,
    movie: "National Treasure — Spirit of American history",
    history: `<p>The <strong>National Museum of American History</strong> opened in 1964 and holds more than 1.8 million artifacts telling the story of the United States. The museum houses the original <strong>Star-Spangled Banner</strong> — the flag that flew over Fort McHenry in 1814 and inspired the national anthem.</p>
    <p>Among its collections: Thomas Edison's light bulbs, Julia Child's kitchen, the ruby slippers from The Wizard of Oz, and presidential inaugural gowns. It's a wonderfully eclectic repository of American life.</p>
    <p>The museum's focus on everyday American life — not just political history — makes it feel more personal than other Smithsonian institutions.</p>`,
    scene: `<p>While not directly featured in a specific National Treasure scene, this museum embodies the film's core theme: that America's greatest treasure isn't gold, but its <strong>history, ideals, and founding principles</strong>.</p>
    <p>Ben Gates' entire motivation is not greed but the desire to prove that the founding fathers were brilliant enough to hide — and worthy enough to deserve — such an extraordinary legacy.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Daily 10am–5:30pm</li>
      <li><strong>Admission:</strong> Free</li>
      <li>The <strong>Star-Spangled Banner</strong> gallery is emotional and beautifully presented.</li>
      <li>The food court on level one is convenient and reasonably priced.</li>
      <li>The <strong>America on the Move</strong> exhibit on transportation is surprisingly gripping.</li>
      <li>Docents offer free tours — check at the information desk.</li>
    </ul>`,
  },
  {
    id: 9,
    name: "White House",
    emoji: "🏠",
    shortDesc: "Presidential secrets in Book of Secrets",
    lat: 38.8977,
    lng: -77.0365,
    movie: "National Treasure: Book of Secrets (2007) — The President's secret book",
    history: `<p>The <strong>White House</strong> has been the residence of every U.S. president since John Adams in 1800. Designed by James Hoban and inspired by Leinster House in Dublin, Ireland, it was burned by British forces in 1814 — only a rainstorm saved the walls from complete destruction.</p>
    <p>The White House contains <strong>132 rooms, 35 bathrooms, and 6 levels</strong>. The famous Oval Office wasn't part of the original design — it was added in 1909 during the Taft administration.</p>
    <p>The White House is the only private residence of a head of state that is open to the public (through advance-request tours arranged by your congressional representative).</p>`,
    scene: `<p>In <em>National Treasure: Book of Secrets</em>, Ben Gates breaks into <strong>Buckingham Palace</strong> and then manages to get alone time with the President of the United States to ask him about a secret book kept by all presidents — a book containing the government's most classified secrets, including the truth about Area 51, the JFK assassination, and a lost City of Gold.</p>
    <p>The film invents the "Book of Secrets" but taps into real public fascination with what presidents know that we don't.</p>`,
    tips: `<ul>
      <li><strong>Public tours:</strong> Available through your U.S. Representative or Senator's office — request months in advance</li>
      <li>The <strong>White House Visitor Center</strong> (1450 Pennsylvania Ave) is open daily 7:30am–4pm and is a great alternative</li>
      <li>Stand at the <strong>Pennsylvania Ave fence</strong> for the classic front-lawn photo</li>
      <li>The <strong>Lafayette Square</strong> across the street offers great views and has historic significance of its own</li>
      <li>Evening views of the lit White House are particularly atmospheric</li>
    </ul>`,
  },
  {
    id: 10,
    name: "Freemason Memorial (Alexandria)",
    emoji: "🔺",
    shortDesc: "The Masonic Lodge at the heart of the conspiracy",
    lat: 38.8048,
    lng: -77.0469,
    movie: "National Treasure (2004) — The secret society that hid the treasure",
    history: `<p>The <strong>George Washington Masonic National Memorial</strong> in Alexandria, Virginia stands on Shooter's Hill, visible from much of D.C. Dedicated in 1932, this 333-foot tower is modeled on the ancient Lighthouse of Alexandria — one of the Seven Wonders of the ancient world.</p>
    <p>The memorial holds one of the largest collections of Washington Masonic artifacts in existence, including the trowel Washington used to lay the Capitol cornerstone and his Masonic apron. Washington was initiated as a Mason in 1752 at the Fredericksburg Lodge.</p>
    <p>Nine U.S. presidents have been Freemasons, and the order's symbols appear throughout Washington D.C.'s design and on the dollar bill.</p>`,
    scene: `<p>The Freemasons are the fictional engine of National Treasure's plot. The film posits that Masonic founding fathers collected Europe's greatest treasures during the Revolutionary War and hid them beneath D.C., leaving a trail of clues only a brilliant, Masonic-educated person could follow.</p>
    <p>While the treasure is fictional, <strong>Freemasonry's role in the founding of America</strong> is very real. The Alexandria memorial is the best place in the Washington area to experience this history firsthand.</p>`,
    tips: `<ul>
      <li><strong>Hours:</strong> Daily 9am–5pm</li>
      <li><strong>Admission:</strong> Free (tower tours $5-$10)</li>
      <li>About 7 miles from D.C. — take the King Street Metro (Blue/Yellow line) to Alexandria</li>
      <li>The <strong>tower tours</strong> offer spectacular views of the entire D.C. region</li>
      <li>The museum floors feature elaborate Masonic regalia, artwork, and artifacts</li>
      <li>Combine with a stroll through <strong>Old Town Alexandria</strong> — a charming colonial-era town</li>
    </ul>`,
  },
];

// ============================================================
//  BONUS ATTRACTIONS (non-film sites worth visiting)
// ============================================================
const ATTRACTIONS = [
  {
    name: "National Air & Space Museum",
    emoji: "🚀",
    lat: 38.8882,
    lng: -77.0198,
    type: "Museum",
    desc: "One of the world's most visited museums — home to the Wright Flyer, the Apollo 11 Command Module, and the Spirit of St. Louis. Right on the Mall.",
    hours: "Daily 10am–5:30pm",
    admission: "Free (timed-entry passes recommended)",
    phone: "+1 202-633-2214",
    tip: "Book timed-entry passes at si.edu in advance. Allow at least 3–4 hours — it's enormous and unmissable.",
  },
  {
    name: "International Spy Museum",
    emoji: "🕵️",
    lat: 38.8841,
    lng: -77.0256,
    type: "Museum",
    desc: "The world's largest collection of spy artifacts and gadgets. You get a secret identity at the door and go undercover through the exhibits. Perfect National Treasure energy!",
    hours: "Daily 9am–7pm (Sat until 8pm)",
    admission: "Paid — book online at spymuseum.org",
    phone: "+1 202-393-7798",
    tip: "Pairs perfectly with the National Treasure theme — real-life espionage history is just as thrilling as the film.",
  },
  {
    name: "Smithsonian National Zoo",
    emoji: "🐼",
    lat: 38.9296,
    lng: -77.0498,
    type: "Zoo",
    desc: "One of America's great free zoos, home to giant pandas, gorillas, elephants, and hundreds of species. Spread across 163 acres in the heart of D.C.",
    hours: "Daily 8am–6pm",
    admission: "Free! (parking fees apply)",
    phone: "+1 202-633-2614",
    tip: "Giant pandas Bao Li and Qing Bao are the stars — arrive early for the best viewing. Wear comfortable shoes — it's hilly!",
  },
  {
    name: "The Escape Game DC",
    emoji: "🔐",
    lat: 38.8972,
    lng: -77.0250,
    type: "Experience",
    desc: "Rated 5.0 stars — one of DC's best escape rooms right in Penn Quarter. Immersive themed rooms like Prison Break, Special Ops, and The Depths. Great for groups.",
    hours: "Daily 8am–midnight",
    admission: "Paid — book at theescapegame.com",
    phone: "+1 202-301-4631",
    tip: "Book in advance — slots fill up fast, especially on weekends. Perfect evening activity after a full day on the Mall.",
  },
];

const RESTAURANTS = [
  {
    name: "Founding Farmers DC",
    emoji: "🌾",
    lat: 38.9003,
    lng: -77.0445,
    rating: 4.5,
    price: "$$",
    vibe: "Farm-to-table American. Huge veggie menu, hearty portions, beautiful space near the White House.",
    hours: "Mon–Fri 7am–10pm · Sat–Sun 8:30am–11pm",
    phone: "+1 202-822-8783",
    tip: "Breakfast here before hitting the Mall — their biscuits are legendary.",
  },
  {
    name: "Immigrant Food",
    emoji: "🌍",
    lat: 38.8992,
    lng: -77.0400,
    rating: 4.4,
    price: "$$",
    vibe: "Globally inspired bowls and small plates right across from the White House. Many vegetarian choices with creative international flavors.",
    hours: "Tue–Sat 11:30am–8pm · Mon & Sun until 3pm",
    phone: "+1 202-888-0760",
    tip: "Perfect lunch stop mid-tour — steps from the National Archives.",
  },
  {
    name: "Teaism Penn Quarter",
    emoji: "🍵",
    lat: 38.8950,
    lng: -77.0234,
    rating: 4.5,
    price: "$$",
    vibe: "Asian-fusion tea house with extensive vegetarian and vegan options. Calm, quiet, great for a mid-tour break.",
    hours: "Daily 11am–8pm",
    phone: "+1 202-638-6010",
    tip: "Near the National Archives and Library of Congress — ideal for a peaceful lunch.",
  },
  {
    name: "Sweetgreen — Capitol Hill",
    emoji: "🥗",
    lat: 38.8870,
    lng: -77.0027,
    rating: 4.4,
    price: "$$",
    vibe: "Fresh salads and grain bowls, mostly vegetarian. Fast, reliable, and steps from the Library of Congress.",
    hours: "Daily 10:30am–9pm",
    phone: "+1 202-547-9338",
    tip: "Great quick lunch between the Capitol and Library of Congress stops.",
  },
  {
    name: "PLANTA Washington DC",
    emoji: "🌱",
    lat: 38.9057,
    lng: -77.0478,
    rating: 4.5,
    price: "$$$",
    vibe: "Upscale 100% plant-based restaurant. Inventive sushi, noodles, and stunning presentations. Ideal for a special dinner.",
    hours: "Mon–Thu 11:30am–10pm · Fri 11:30am–11pm · Sat–Sun 11am–11pm",
    phone: "+1 202-790-5972",
    tip: "Book ahead for dinner — one of DC's top vegan fine-dining experiences.",
  },
  {
    name: "DC Vegan",
    emoji: "🌿",
    lat: 38.9098,
    lng: -77.0380,
    rating: 4.5,
    price: "$$",
    vibe: "100% vegan comfort food: chick'n parm, eggplant dishes, baked goods. Cozy neighborhood spot in Dupont Circle.",
    hours: "Mon–Thu 11am–9pm · Fri–Sat 11am–10pm · Sun 11am–9pm",
    phone: "+1 202-297-0886",
    tip: "Great dinner option in the Dupont Circle area, evening after the tour.",
  },
  {
    name: "AMBAR Capitol Hill",
    emoji: "🫙",
    lat: 38.8820,
    lng: -76.9954,
    rating: 4.7,
    price: "$$",
    vibe: "Balkan tapas with outstanding veggie spreads (beet tzatziki, eggplant moussaka). All-you-can-eat lunch deal is incredible value.",
    hours: "Mon–Thu 12pm–9:30pm · Fri–Sat 10am–10:30pm · Sun 10am–9:30pm",
    phone: "+1 202-813-3039",
    tip: "The $33 all-you-can-eat lunch is one of DC's best deals — veggie options are the stars.",
  },
  {
    name: "Pavilion Café (Sculpture Garden)",
    emoji: "☕",
    lat: 38.8913,
    lng: -77.0235,
    rating: 3.9,
    price: "$$",
    vibe: "Casual café inside the National Gallery Sculpture Garden. Veggie sandwiches, quiche, and salads in a beautiful outdoor setting.",
    hours: "Daily 10am–4pm",
    phone: "+1 202-289-3360",
    tip: "Perfectly located mid-Mall for a relaxed lunch break between monuments.",
  },

  // ── INDIAN ──────────────────────────────────────────────────
  {
    name: "Rasika",
    emoji: "🪔",
    lat: 38.8949,
    lng: -77.0213,
    rating: 4.3,
    price: "$$$",
    cuisine: "Indian",
    vibe: "DC's most acclaimed Indian restaurant — Michelin-recommended. Modern, refined Indian cooking. The Palak Chaat and Dal Makhani are legendary. Steps from the National Archives.",
    hours: "Lunch Mon–Fri 11:30am–2:30pm · Dinner daily from 5pm (closed Sat lunch)",
    phone: "+1 202-637-1222",
    tip: "Book ahead — this is one of the hardest reservations in DC. Perfect dinner after the Archives.",
  },
  {
    name: "Rania",
    emoji: "✨",
    lat: 38.8956,
    lng: -77.0268,
    rating: 4.4,
    price: "$$$",
    cuisine: "Indian",
    vibe: "Michelin-starred Indian fine dining. Stunning cocktails, artistic presentations, and a full vegetarian tasting menu. A truly special occasion restaurant.",
    hours: "Dinner only Tue–Sat 5pm–9:30pm · Closed Mon & Sun",
    phone: "+1 202-804-6434",
    tip: "Ask for the vegetarian tasting menu — it's one of the best in the city.",
  },
  {
    name: "Herbivore Indian Cuisine",
    emoji: "🫛",
    lat: 38.9115,
    lng: -77.0652,
    rating: 4.7,
    price: "$$",
    cuisine: "Indian",
    vibe: "Vegetarian-forward Indian restaurant in Georgetown. Excellent dosas, biryanis, and curries in a relaxed, colorful setting. Great for families.",
    hours: "Daily from 9am–9:30pm (Tue from 11am)",
    phone: "+1 202-621-7502",
    tip: "Try the masala dosa — crispy, fresh, and authentic. Great Georgetown dinner option.",
  },

  // ── ITALIAN ─────────────────────────────────────────────────
  {
    name: "Olio e Più",
    emoji: "🫒",
    lat: 38.8981,
    lng: -77.0316,
    rating: 4.7,
    price: "$$$",
    cuisine: "Italian",
    vibe: "Beloved Italian spot near the White House with beautiful, fresh food. Outstanding pasta, seafood, and a lively atmosphere. Open late — great post-tour dinner.",
    hours: "Mon–Thu 11am–midnight · Fri 11am–1am · Sat 10am–1am · Sun 10am–midnight",
    phone: "+1 771-208-4815",
    tip: "Walk-ins welcome late evening. Great for a relaxed dinner after a long day on the Mall.",
  },
  {
    name: "Pines of Florence",
    emoji: "🌲",
    lat: 38.9056,
    lng: -77.0443,
    rating: 4.8,
    price: "$$",
    cuisine: "Italian",
    vibe: "One of DC's highest-rated Italian restaurants. Homemade pastas, gluten-free options, halal meats. Warm, family-run feel. Regulars rave about every dish.",
    hours: "Mon–Thu 12–10pm · Fri–Sun 2–10pm",
    phone: "+1 202-450-1994",
    tip: "Top pick for Italian — get any of the homemade pastas. Reservations strongly recommended.",
  },
  {
    name: "Filomena Ristorante",
    emoji: "🍝",
    lat: 38.9044,
    lng: -77.0626,
    rating: 4.6,
    price: "$$$",
    cuisine: "Italian",
    vibe: "A Georgetown institution for 40+ years. Handmade pastas, generous portions, and a wonderfully festive atmosphere. A celebration-worthy classic.",
    hours: "Daily 11:30am–10:30pm (Fri–Sat until 11pm)",
    phone: "+1 202-338-8800",
    tip: "The pappardelle and ravioli are standouts. Great for a big group dinner in Georgetown.",
  },

  // ── MEDITERRANEAN ───────────────────────────────────────────
  {
    name: "Zaytinya",
    emoji: "🧆",
    lat: 38.8989,
    lng: -77.0236,
    rating: 4.5,
    price: "$$$",
    cuisine: "Mediterranean",
    vibe: "José Andrés' iconic mezze restaurant. Turkish, Greek & Lebanese small plates — a vegetarian paradise. Bright, buzzy, and excellent value for the quality.",
    hours: "Mon–Thu 11:30am–10pm · Fri 11:30am–11pm · Sat 11am–11pm · Sun 11am–10pm",
    phone: "+1 202-638-0800",
    tip: "Order the crispy eggplant, Brussels sprouts, and halloumi. Near Penn Quarter — great for lunch mid-tour.",
  },
  {
    name: "Maydan",
    emoji: "🔥",
    lat: 38.9198,
    lng: -77.0310,
    rating: 4.6,
    price: "$$$",
    cuisine: "Mediterranean",
    vibe: "Michelin-starred Lebanese restaurant with dramatic wood-fire cooking. Spectacular mezze spreads — the cauliflower and muhammara are unmissable. One of DC's most memorable dining experiences.",
    hours: "Dinner daily 5–11pm · Sun brunch 11am–2pm",
    phone: "+1 202-370-3696",
    tip: "Book the Tawle communal tasting menu — an extraordinary vegetarian feast.",
  },
  {
    name: "Agora DC",
    emoji: "🫙",
    lat: 38.9106,
    lng: -77.0382,
    rating: 4.6,
    price: "$$",
    cuisine: "Mediterranean",
    vibe: "Turkish Mediterranean mezze in Dupont Circle. Cozy, warm atmosphere with outstanding pita bread, hummus, and shared plates. Great for groups.",
    hours: "Tue–Fri from 12pm · Mon & Sat–Sun from 4:30–5pm",
    phone: "+1 202-332-6767",
    tip: "The pita bread alone is worth the trip. Great pre- or post-Masonic Memorial stop.",
  },
  {
    name: "ala",
    emoji: "🌙",
    lat: 38.9081,
    lng: -77.0437,
    rating: 4.5,
    price: "$$",
    cuisine: "Mediterranean",
    vibe: "Modern Turkish mezze in Dupont Circle. Creative, flavor-packed vegetarian hot plates and excellent pita. Relaxed outdoor seating and great cocktails.",
    hours: "Tue–Fri 4–9pm (Fri until 10pm) · Sat–Sun 10am–10pm · Closed Mon",
    phone: "N/A",
    tip: "Order the vegetarian hot mezze and Adana burger. The kunafa dessert is incredible.",
  },
];

// ============================================================
//  STATE
// ============================================================
const visited = new Set(JSON.parse(localStorage.getItem("nt_visited") || "[]"));
let userLat = null, userLng = null;
let currentSiteIndex = 0;
let map, userMarker;
const siteMarkers = [];
let restaurantMarkers = [];
let attractionMarkers = [];
let showRestaurants = true;
let showAttractions = true;

// ============================================================
//  MAP INIT
// ============================================================
function initMap() {
  map = L.map("map", {
    center: [38.8935, -77.0285],
    zoom: 14,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  SITES.forEach((site, idx) => {
    const isVisited = visited.has(site.id);
    const icon = L.divIcon({
      className: "",
      html: `<div class="custom-marker ${isVisited ? "visited" : ""}"><span>${site.emoji}</span></div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -44],
    });

    const marker = L.marker([site.lat, site.lng], { icon }).addTo(map);
    marker.bindPopup(`
      <div class="popup-inner">
        <strong>${site.name}</strong>
        <p style="font-size:0.8rem;color:#c9a84c;margin:2px 0;">${site.shortDesc}</p>
        <button onclick="openModal(${idx})">EXPLORE →</button>
      </div>
    `);
    siteMarkers.push(marker);
  });

  // Render restaurant markers
  renderRestaurantMarkers();
  // Render attraction markers
  renderAttractionMarkers();
}

// ============================================================
//  RESTAURANTS ON MAP
// ============================================================
function renderRestaurantMarkers() {
  restaurantMarkers.forEach(m => map.removeLayer(m));
  restaurantMarkers = [];
  if (!showRestaurants) return;

  const cuisineColor = {
    "Indian":        { bg: "#2a1a00", border: "#e8a020", label: "#f5c060" },
    "Italian":       { bg: "#1a0a1a", border: "#c060d0", label: "#e0a0f0" },
    "Mediterranean": { bg: "#001a2a", border: "#20a0d0", label: "#80d4f0" },
    "default":       { bg: "#1a2e14", border: "#6abf69", label: "#a8e6a0" },
  };

  RESTAURANTS.forEach((r) => {
    const c = cuisineColor[r.cuisine] || cuisineColor["default"];
    const icon = L.divIcon({
      className: "",
      html: `<div class="custom-marker restaurant-marker" style="background:${c.bg};border-color:${c.border};"><span>${r.emoji}</span></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -40],
    });
    const marker = L.marker([r.lat, r.lng], { icon }).addTo(map);
    const stars = "★".repeat(Math.round(r.rating)) + "☆".repeat(5 - Math.round(r.rating));
    const cuisineTag = r.cuisine ? `<span style="background:${c.border};color:${c.bg};font-size:0.65rem;padding:1px 6px;border-radius:10px;font-family:'Cinzel',serif;font-weight:600;">${r.cuisine}</span> ` : "";
    marker.bindPopup(`
      <div class="popup-inner">
        <strong>${r.emoji} ${r.name}</strong>
        <p style="margin:4px 0;">${cuisineTag}<span style="color:${c.label};font-size:0.75rem;">${stars} ${r.rating} · ${r.price}</span></p>
        <p style="font-size:0.78rem;color:#e8d9b5;margin:4px 0;">${r.vibe}</p>
        <p style="font-size:0.72rem;color:#c9a84c;margin-top:4px;">⏰ ${r.hours}</p>
        ${r.phone !== "N/A" ? `<p style="font-size:0.72rem;color:#c9a84c;">📞 ${r.phone}</p>` : ""}
        <p style="font-size:0.72rem;font-style:italic;color:${c.label};margin-top:4px;">💡 ${r.tip}</p>
      </div>
    `);
    restaurantMarkers.push(marker);
  });
}

function toggleRestaurants() {
  showRestaurants = !showRestaurants;
  renderRestaurantMarkers();
  const btn = document.getElementById("toggleRestaurants");
  if (btn) {
    btn.textContent = showRestaurants ? "🍽️ Hide Restaurants" : "🍽️ Show Restaurants";
    btn.style.background = showRestaurants ? "rgba(100,180,90,0.2)" : "rgba(201,168,76,0.1)";
    btn.style.borderColor = showRestaurants ? "#6abf69" : "var(--gold-dark)";
    btn.style.color = showRestaurants ? "#a8e6a0" : "var(--gold)";
  }
}

// ============================================================
//  ATTRACTIONS ON MAP
// ============================================================
function renderAttractionMarkers() {
  attractionMarkers.forEach(m => map.removeLayer(m));
  attractionMarkers = [];
  if (!showAttractions) return;

  const typeColor = {
    "Museum":     { bg: "#001a2a", border: "#4fc3f7", label: "#b3e5fc" },
    "Zoo":        { bg: "#0a1a00", border: "#aed581", label: "#dcedc8" },
    "Experience": { bg: "#1a0a00", border: "#ff8a65", label: "#ffccbc" },
  };

  ATTRACTIONS.forEach((a) => {
    const c = typeColor[a.type] || { bg: "#1a1408", border: "#c9a84c", label: "#e8c96b" };
    const icon = L.divIcon({
      className: "",
      html: `<div class="custom-marker attraction-marker" style="background:${c.bg};border-color:${c.border};"><span>${a.emoji}</span></div>`,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -42],
    });
    const marker = L.marker([a.lat, a.lng], { icon }).addTo(map);
    marker.bindPopup(`
      <div class="popup-inner">
        <strong>${a.emoji} ${a.name}</strong>
        <p style="margin:4px 0;"><span style="background:${c.border};color:${c.bg};font-size:0.65rem;padding:1px 6px;border-radius:10px;font-family:'Cinzel',serif;font-weight:600;">${a.type}</span></p>
        <p style="font-size:0.78rem;color:#e8d9b5;margin:4px 0;">${a.desc}</p>
        <p style="font-size:0.72rem;color:#c9a84c;margin-top:4px;">⏰ ${a.hours}</p>
        <p style="font-size:0.72rem;color:#c9a84c;">🎟️ ${a.admission}</p>
        <p style="font-size:0.72rem;color:#c9a84c;">📞 ${a.phone}</p>
        <p style="font-size:0.72rem;font-style:italic;color:${c.label};margin-top:4px;">💡 ${a.tip}</p>
      </div>
    `);
    attractionMarkers.push(marker);
  });
}

function toggleAttractions() {
  showAttractions = !showAttractions;
  renderAttractionMarkers();
  const btn = document.getElementById("toggleAttractions");
  if (btn) {
    btn.textContent = showAttractions ? "🎡 Hide Attractions" : "🎡 Show Attractions";
    btn.style.background = showAttractions ? "rgba(79,195,247,0.15)" : "rgba(201,168,76,0.1)";
    btn.style.borderColor = showAttractions ? "#4fc3f7" : "var(--gold-dark)";
    btn.style.color = showAttractions ? "#b3e5fc" : "var(--gold)";
  }
}

// ============================================================
//  GPS
// ============================================================
function initGPS() {
  if (!navigator.geolocation) {
    setGPSStatus("Not supported", "error");
    return;
  }

  navigator.geolocation.watchPosition(
    (pos) => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      setGPSStatus("GPS Active", "active");

      if (userMarker) {
        userMarker.setLatLng([userLat, userLng]);
      } else {
        const youIcon = L.divIcon({
          className: "",
          html: `<div style="width:16px;height:16px;background:#4285F4;border-radius:50%;border:3px solid white;box-shadow:0 0 10px rgba(66,133,244,0.8);"></div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        userMarker = L.marker([userLat, userLng], { icon: youIcon, zIndexOffset: 1000 }).addTo(map);
        userMarker.bindPopup("<div class='popup-inner'><strong>YOU ARE HERE</strong></div>");
      }

      updateAllDistances();
    },
    (err) => {
      console.warn("GPS error:", err.message);
      setGPSStatus("No GPS", "error");
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
  );
}

function setGPSStatus(text, type) {
  document.getElementById("gpsStatus").textContent = text;
  const dot = document.querySelector(".gps-dot");
  dot.className = "gps-dot" + (type === "active" ? " active" : type === "error" ? " error" : "");
}

function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 3958.8; // miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(miles) {
  if (miles < 0.1) return `${Math.round(miles * 5280)} ft away`;
  return `${miles.toFixed(1)} mi away`;
}

function updateAllDistances() {
  SITES.forEach((site, idx) => {
    if (userLat == null) return;
    const dist = haversineDistance(userLat, userLng, site.lat, site.lng);
    const el = document.getElementById(`dist-${idx}`);
    if (el) el.textContent = `📍 ${formatDistance(dist)}`;
  });
}

// ============================================================
//  RENDER CARDS
// ============================================================
function renderCards() {
  const grid = document.getElementById("sitesGrid");
  grid.innerHTML = "";
  SITES.forEach((site, idx) => {
    const isVisited = visited.has(site.id);
    const dist =
      userLat != null
        ? formatDistance(haversineDistance(userLat, userLng, site.lat, site.lng))
        : "";

    const card = document.createElement("div");
    card.className = `site-card ${isVisited ? "visited" : ""}`;
    card.id = `card-${idx}`;
    card.innerHTML = `
      <span class="card-emoji">${site.emoji}</span>
      <div class="card-number">STOP ${String(idx + 1).padStart(2, "0")} OF ${SITES.length}</div>
      <div class="card-title">${site.name}</div>
      <div class="card-desc">${site.shortDesc}</div>
      ${dist ? `<div class="card-distance" id="dist-${idx}">📍 ${dist}</div>` : `<div class="card-distance" id="dist-${idx}"></div>`}
    `;
    card.addEventListener("click", () => openModal(idx));
    grid.appendChild(card);
  });
}

// ============================================================
//  MODAL
// ============================================================
function openModal(idx) {
  currentSiteIndex = idx;
  const site = SITES[idx];

  document.getElementById("modalBadge").textContent = site.emoji;
  document.getElementById("modalTitle").textContent = site.name;
  document.getElementById("modalMovie").textContent = site.movie;
  document.getElementById("tabHistory").innerHTML = site.history;
  document.getElementById("tabScene").innerHTML = site.scene;
  document.getElementById("tabTips").innerHTML = site.tips;

  // Reset to history tab
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((tc) => tc.classList.add("hidden"));
  document.querySelector('[data-tab="history"]').classList.add("active");
  document.getElementById("tabHistory").classList.remove("hidden");

  // Mark visited button
  const btn = document.getElementById("markVisited");
  if (visited.has(site.id)) {
    btn.textContent = "✓ Already Visited!";
    btn.classList.add("done");
  } else {
    btn.textContent = "Mark as Visited ✓";
    btn.classList.remove("done");
  }

  // Distance
  const distEl = document.getElementById("modalDistance");
  if (userLat != null) {
    const d = haversineDistance(userLat, userLng, site.lat, site.lng);
    distEl.textContent = `📍 You are ${formatDistance(d)} from this site`;
  } else {
    distEl.textContent = "Enable GPS for distance info";
  }

  // Pan map
  map.flyTo([site.lat, site.lng], 16, { duration: 1 });

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ============================================================
//  TABS
// ============================================================
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach((tc) => tc.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById("tab" + capitalize(tab.dataset.tab)).classList.remove("hidden");
  });
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================================
//  NAVIGATION
// ============================================================
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

document.getElementById("prevSite").addEventListener("click", () => {
  openModal((currentSiteIndex - 1 + SITES.length) % SITES.length);
});

document.getElementById("nextSite").addEventListener("click", () => {
  openModal((currentSiteIndex + 1) % SITES.length);
});

document.getElementById("markVisited").addEventListener("click", () => {
  const site = SITES[currentSiteIndex];
  visited.add(site.id);
  localStorage.setItem("nt_visited", JSON.stringify([...visited]));

  const btn = document.getElementById("markVisited");
  btn.textContent = "✓ Already Visited!";
  btn.classList.add("done");

  // Update card
  const card = document.getElementById(`card-${currentSiteIndex}`);
  if (card) card.classList.add("visited");

  // Update marker
  const marker = siteMarkers[currentSiteIndex];
  marker.setIcon(
    L.divIcon({
      className: "",
      html: `<div class="custom-marker visited"><span>${site.emoji}</span></div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -44],
    })
  );

  updateProgress();
});

// ============================================================
//  PROGRESS
// ============================================================
function updateProgress() {
  const count = visited.size;
  document.getElementById("visitedCount").textContent = count;
  document.getElementById("progressFill").style.width = `${(count / SITES.length) * 100}%`;
}

// ============================================================
//  KEYBOARD NAV
// ============================================================
document.addEventListener("keydown", (e) => {
  const overlay = document.getElementById("modalOverlay");
  if (!overlay.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") openModal((currentSiteIndex - 1 + SITES.length) % SITES.length);
  if (e.key === "ArrowRight") openModal((currentSiteIndex + 1) % SITES.length);
});

// ============================================================
//  BOOT
// ============================================================
initMap();
initGPS();
renderCards();
updateProgress();
