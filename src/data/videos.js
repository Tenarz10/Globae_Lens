const records = [
  ['After Party', 'Event Recap', 2026, 'Lagos, Nigeria', '00:53', 'https://drive.google.com/file/d/1muJnpE2RoZ08S6_ApiMncXmiOqzDQsy8/view?usp=drivesdk'],
  ['Event recap 1', 'Event Recap', 2026, 'Lagos, Nigeria', '00:48', 'https://drive.google.com/file/d/18TyClaHSFTlzQVLZ4K3MDSxjrx6UoX8s/view?usp=drivesdk'],
  ['Event recap 2', 'Event Recap', 2026, 'Lagos, Nigeria', '00:48', 'https://drive.google.com/file/d/1ZkBPp3vk9-b8bDoBn0fi-Yk9PbQ6PGS5/view?usp=drivesdk'],
  ['Event recap 3', 'Event Recap', 2025, 'Lagos, Nigeria', '00:42', 'https://drive.google.com/file/d/13ix0m3j9FhuyJhEibtBjHSYApYbz_RYw/view?usp=drivesdk'],
  ['PASSPORTMONIE @ Akwaaba 26', 'Event Recap', 2025, 'Akwaaba 26, Lagos', '00:57', 'https://drive.google.com/file/d/1ZSw-9uBQV1BthuF_pSGT3s2mSjIIyMtM/view?usp=drivesdk'],
  ['PASSPORTMONIE @ Akwaaba 26 (B-roll)', 'Event Recap', 2025, 'Akwaaba 26, Lagos', '01:05', 'https://drive.google.com/file/d/1yVdZACQ79JSBFDY2akSzMnv1iU0DUbof/view?usp=drivesdk'],
  ['Get-together', 'Event Recap', 2025, 'Lagos, Nigeria', '00:58', 'https://drive.google.com/file/d/10gGqfasLxkSswPkofta5r-_xAGKRwisp/view?usp=drivesdk'],
  ['House of bole at GTCO', 'Event Recap', 2025, 'Lagos, Nigeria', '00:47', 'https://drive.google.com/file/d/1o44clGwrCJ8tx-KfPU2neYhbRVaaV46p/view?usp=drivesdk'],
  ['City Pulse Launch', 'Event Recap', 2025, 'Abuja, Nigeria', '00:52', 'https://drive.google.com/file/d/1ZgR0kHn8g9mXJgW7RkLeM_7VfVhAB9LV/view?usp=drivesdk'],
  ['Rooftop Social', 'Event Recap', 2025, 'Ikoyi, Lagos', '01:02', 'https://drive.google.com/file/d/1No7V5_4D6b9wYO2aH2J3l5l8Y2fA3wQ3/view?usp=drivesdk'],
  ['Brand content (Kalio)', 'Brand Content', 2025, 'Lagos, Nigeria', '00:40', 'https://drive.google.com/file/d/1KUZTrWB9lSgzmuKECcoWpRsOMWlyT-Dy/view?usp=drivesdk'],
  ['Campaign Drop', 'Brand Content', 2025, 'Lagos, Nigeria', '00:45', 'https://drive.google.com/file/d/1gW1rF3clzQF8BPA8a6m6Tg4xYqM2m5Qs/view?usp=drivesdk'],
  ['Summer Capsule Teaser', 'Brand Content', 2025, 'Ibadan, Nigeria', '00:36', 'https://drive.google.com/file/d/1n6ZWX0P9nG7LwQfT8yVY1M2dD2uKQ5u2/view?usp=drivesdk'],
  ['Studio Walkthrough', 'Brand Content', 2024, 'Lekki, Lagos', '00:44', 'https://drive.google.com/file/d/1IJ6hQw6E5mVuUppQsk1znkA7jS2s0dVq/view?usp=drivesdk'],
  ['Product Story: Capsule Drop', 'Brand Content', 2024, 'Abuja, Nigeria', '00:48', 'https://drive.google.com/file/d/1eXc0utxP3J5Q8VL8Y7lZrUxgknd3m8vW/view?usp=drivesdk'],
  ['Brand Launch Reel', 'Brand Content', 2024, 'Port Harcourt, Nigeria', '00:50', 'https://drive.google.com/file/d/1E3QGPnVnIFbXxU6yYqz9d9l5Kf3QXv8D/view?usp=drivesdk'],
  ['Founder Interview Cut', 'Brand Content', 2024, 'Lagos, Nigeria', '00:54', 'https://drive.google.com/file/d/1kC0mJ_VW6pF2Vw9K8Q0p7Dg9m4L8e2Jx/view?usp=drivesdk'],
  ['Campaign Day 02', 'Brand Content', 2023, 'Kano, Nigeria', '00:39', 'https://drive.google.com/file/d/1b3P7fV6mH6rP1wL1oT1tR3Q2mL1c5Wrg/view?usp=drivesdk'],
  ['Mural Reveal', 'Brand Content', 2023, 'Lagos, Nigeria', '00:41', 'https://drive.google.com/file/d/1sY5j5xvKJ2Q16eY9p9iS5C7H3uFpb2Hk/view?usp=drivesdk'],
  ['Client Thank You Reel', 'Brand Content', 2023, 'Calabar, Nigeria', '00:43', 'https://drive.google.com/file/d/1G4nW4w0QdW5eV5rd3d7d6kR3tF3kH5xA/view?usp=drivesdk'],
  ['Team bonding: Client (Nestcoin)', 'Team Bonding', 2025, 'Lagos, Nigeria', '00:48', 'https://drive.google.com/file/d/1cbwidtbDtBhAiXKUOahMVQ-1J9qbSAHV/view?usp=drivesdk'],
  ['Creative Sprint Diary', 'Team Bonding', 2025, 'Lagos, Nigeria', '00:51', 'https://drive.google.com/file/d/1hA2Qx2bK0tDM1jJ4n3V7wLjXvW0dT6wR/view?usp=drivesdk'],
  ['Office Energy', 'Team Bonding', 2025, 'Lagos, Nigeria', '00:46', 'https://drive.google.com/file/d/1mR5S1qE3tE7F9dC3bQ4vX2P1sL6nQ7oT/view?usp=drivesdk'],
  ['Weekend Retreat', 'Team Bonding', 2025, 'Ogun, Nigeria', '00:57', 'https://drive.google.com/file/d/1oY2N8lP4rX2dC9qI7uS1wQ6vG8sF2kW9/view?usp=drivesdk'],
  ['Field Team Moments', 'Team Bonding', 2024, 'Kaduna, Nigeria', '00:49', 'https://drive.google.com/file/d/1Jd9pU4wM8zQ3nY4X7rQ1wF9aT2sP6gC1/view?usp=drivesdk'],
  ['Lunch Break Story', 'Team Bonding', 2024, 'Enugu, Nigeria', '00:35', 'https://drive.google.com/file/d/1iT1mW9xN4gF2pP0vQ6xR8aL7cM4jZ3vV/view?usp=drivesdk'],
  ['People First', 'Team Bonding', 2024, 'Lagos, Nigeria', '00:52', 'https://drive.google.com/file/d/1qL6sD0aY2cH8tR4kN1pF7xJ9mQ3vM7wR/view?usp=drivesdk'],
  ['Community Catch-Up', 'Team Bonding', 2023, 'Benin City, Nigeria', '00:44', 'https://drive.google.com/file/d/1wC0dM8xX7nV3rP1mQ4dF7sL9cT2pY8nR/view?usp=drivesdk'],
  ['Team Offsite Recap', 'Team Bonding', 2023, 'Abuja, Nigeria', '01:06', 'https://drive.google.com/file/d/1P8gD1qM3yR6sC9aQ4nH1tL7fV2mK8cT6/view?usp=drivesdk'],
  ['Meet the Crew', 'Team Bonding', 2023, 'Lagos, Nigeria', '00:40', 'https://drive.google.com/file/d/1uS2rQ5jN7kY8dM1fW3pX9vG6tL5cH2qR/view?usp=drivesdk'],
  ['Archive feature', 'Highlights', 2025, 'Lagos, Nigeria', '00:35', 'https://drive.google.com/file/d/1iaxjVV_VQ1yZFyCkmRFjdZsEAu8-tJxR/view?usp=drivesdk'],
  ['Game night recap', 'Highlights', 2025, 'Lagos, Nigeria', '00:46', 'https://drive.google.com/file/d/1zdO4iR2vJWpqGVQfO9njrHscWmJvilgU/view?usp=drivesdk'],
  ['Highlight', 'Highlights', 2025, 'Lagos, Nigeria', '00:50', 'https://drive.google.com/file/d/1U__71mYqOzrLClOAtSc67Lw0KRFPV-Cv/view?usp=drivesdk'],
  ['Watch party', 'Highlights', 2025, 'Lagos, Nigeria', '00:55', 'https://drive.google.com/file/d/1U__71mYqOzrLClOAtSc67Lw0KRFPV-Cv/view?usp=drivesdk'],
  ['Review screenshots', 'Highlights', 2025, 'Lagos, Nigeria', '00:00', 'https://drive.google.com/drive/folders/1IhVGSBj81iVmD6TLOXROgIN4vUI6IPvZ'],
  ['Street Light Cut', 'Highlights', 2024, 'Ibadan, Nigeria', '00:42', 'https://drive.google.com/file/d/1W5sH4nQ0rF8yK3pC7mL1vP9xY6gQ2dV8/view?usp=drivesdk'],
  ['Night Market Moment', 'Highlights', 2024, 'Kaduna, Nigeria', '00:48', 'https://drive.google.com/file/d/1B7xQ4wT9yF2mH3dL1sP6nV8gQ5rC7wM2/view?usp=drivesdk'],
  ['Weekend Reel', 'Highlights', 2024, 'Akwaaba, Lagos', '00:53', 'https://drive.google.com/file/d/1R8dW2mM5jN0rQ4fX7yT3vH9sL2kK8pC4/view?usp=drivesdk'],
  ['Best of the Month', 'Highlights', 2023, 'Lagos, Nigeria', '00:58', 'https://drive.google.com/file/d/1vD6mG8xT2yQ4pK7hN1rL5sC9wM3dF6pQ/view?usp=drivesdk'],
  ['City Motion', 'Highlights', 2023, 'Abuja, Nigeria', '00:46', 'https://drive.google.com/file/d/1Z8rQ2vU4mH7gN9wP3dC1xL5sT8qF2kV6/view?usp=drivesdk'],
  ['Event setup', 'Behind the Scenes', 2025, 'Lagos, Nigeria', '00:32', 'https://drive.google.com/file/d/1UCMDus7K4DE-Fa7QL6kWdFKNFovBtYtJ/view?usp=drivesdk'],
  ['Decor / finished look', 'Behind the Scenes', 2025, 'Lagos, Nigeria', '00:41', 'https://drive.google.com/file/d/1LHt4mjHqDimJ07OS5JOWFK4DvjmtggQI/view?usp=drivesdk'],
  ['Birthday video shoot', 'Behind the Scenes', 2025, 'Lagos, Nigeria', '00:00', 'https://drive.google.com/drive/folders/1z5_IVbCQM06GEy421y1CwYQyf7n032Id'],
  ['Venue Prep', 'Behind the Scenes', 2024, 'Lagos, Nigeria', '00:38', 'https://drive.google.com/file/d/1N8xR6cY3mQ7fT2pW9vL5gX1sD4qK7yJ3/view?usp=drivesdk'],
  ['Lighting Check', 'Behind the Scenes', 2024, 'Abuja, Nigeria', '00:34', 'https://drive.google.com/file/d/1X2mP4vL7rH9gQ3dN8sC1wT6kF5yJ2pL9/view?usp=drivesdk'],
  ['Crew Arrival', 'Behind the Scenes', 2024, 'Ibadan, Nigeria', '00:29', 'https://drive.google.com/file/d/1F4nQ2dX8vH6pM3wL9sT1kQ5cY7gR2mD8/view?usp=drivesdk'],
  ['Set Build', 'Behind the Scenes', 2023, 'Port Harcourt, Nigeria', '00:46', 'https://drive.google.com/file/d/1C7pM4qV6dG9xT3nH1sR2wL8kQ5mF7vY3/view?usp=drivesdk'],
  ['Behind the Curtain', 'Behind the Scenes', 2023, 'Lagos, Nigeria', '00:40', 'https://drive.google.com/file/d/1M2hT8nQ4vP6rD9sL1wC3qX7gF5mK8yT1/view?usp=drivesdk'],
  ['Prep Routine', 'Behind the Scenes', 2023, 'Kano, Nigeria', '00:37', 'https://drive.google.com/file/d/1Q8rM5xX3nT7gV1pF9yL2dH6cS4qK8mR1/view?usp=drivesdk'],
  ['Camera Warm-up', 'Behind the Scenes', 2022, 'Lagos, Nigeria', '00:31', 'https://drive.google.com/file/d/1D4nQ6wM9vF3rT1sH8qL5xK2gP7mY9cR1/view?usp=drivesdk'],
]

const archiveImages = {
  'Event Recap': [
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/A_moment_of_joy_-_Bride_and_her_groom_dancing_at_their_wedding_party_in_northern_Nigeria_%2810%29.jpg/960px-A_moment_of_joy_-_Bride_and_her_groom_dancing_at_their_wedding_party_in_northern_Nigeria_%2810%29.jpg',
      alt: 'A couple dancing at a wedding celebration in northern Nigeria',
      credit: 'Sani Oumar · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:A_moment_of_joy_-_Bride_and_her_groom_dancing_at_their_wedding_party_in_northern_Nigeria_(10).jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Wedding_dinner_party_%281%29.jpg/960px-Wedding_dinner_party_%281%29.jpg',
      alt: 'Guests gathered around a Nigerian wedding dinner',
      credit: 'Sani Oumar · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Wedding_dinner_party_(1).jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Wedding_dinner_party_%282%29.jpg/960px-Wedding_dinner_party_%282%29.jpg',
      alt: 'Friends and family sharing a wedding celebration',
      credit: 'Sani Oumar · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Wedding_dinner_party_(2).jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Cultural_Display_during_the_Ayet_Atyap_Cultural_Festival_02.jpg/960px-Cultural_Display_during_the_Ayet_Atyap_Cultural_Festival_02.jpg',
      alt: 'A cultural performance at the Ayet Atyap festival in Nigeria',
      credit: 'Samsule2 · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Cultural_Display_during_the_Ayet_Atyap_Cultural_Festival_02.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Argungu_Fishing_Festival%2C_Nigeria_Photo_11.jpg/960px-Argungu_Fishing_Festival%2C_Nigeria_Photo_11.jpg',
      alt: 'A lively crowd at Nigeria’s Argungu Fishing Festival',
      credit: 'Photobyamin · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Argungu_Fishing_Festival,_Nigeria_Photo_11.jpg',
    },
  ],
  'Brand Content': [
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/GTBank_Lagos_Fashion_%26_Design_Week_2014_-_Ituen_Basi.png/960px-GTBank_Lagos_Fashion_%26_Design_Week_2014_-_Ituen_Basi.png',
      alt: 'A Nigerian designer’s collection on the Lagos Fashion and Design Week runway',
      credit: 'NdaniTV · CC BY 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:GTBank_Lagos_Fashion_%26_Design_Week_2014_-_Ituen_Basi.png',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/LFDW3_-56.jpg/960px-LFDW3_-56.jpg',
      alt: 'A look from Lagos Fashion and Design Week',
      credit: 'Chidi “Lex Ash” Ashimole · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:LFDW3_-56.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/A_Nigerian_lady_in_Ankara_clothing.jpg/960px-A_Nigerian_lady_in_Ankara_clothing.jpg',
      alt: 'A woman wearing colorful Nigerian Ankara fabric',
      credit: 'Jamie Tubers · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:A_Nigerian_lady_in_Ankara_clothing.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Female_fashion_designer.jpg/960px-Female_fashion_designer.jpg',
      alt: 'A Nigerian fashion designer at work',
      credit: 'Bigkotech · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Female_fashion_designer.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Sugar-cane_Fruits_Sold_on_the_Streets_of_Lagos%2C_Nigeria_1.jpg/960px-Sugar-cane_Fruits_Sold_on_the_Streets_of_Lagos%2C_Nigeria_1.jpg',
      alt: 'Fresh fruit being sold on a Lagos street',
      credit: 'Eze kelechi · CC0',
      source: 'https://commons.wikimedia.org/wiki/File:Sugar-cane_Fruits_Sold_on_the_Streets_of_Lagos,_Nigeria_1.jpg',
    },
  ],
  'Team Bonding': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/A_Nigerian_family_in_Ankara_clothing.jpg',
      alt: 'A Nigerian family dressed in matching Ankara clothing',
      credit: 'Jamie Tubers · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:A_Nigerian_family_in_Ankara_clothing.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Nigerian_ladies_in_Ankara_clothings.jpg/960px-Nigerian_ladies_in_Ankara_clothings.jpg',
      alt: 'Friends wearing bright Ankara outfits',
      credit: 'Jamie Tubers · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Nigerian_ladies_in_Ankara_clothings.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/African_woman_works_-_Lagos_city.jpg/960px-African_woman_works_-_Lagos_city.jpg',
      alt: 'A woman going about her work in Lagos',
      credit: 'Nicopixel · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:African_woman_works_-_Lagos_city.jpg',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Lagos_Life_goes_on.jpg',
      alt: 'Everyday life unfolding on the streets of Lagos',
      credit: 'Andrew Esiebo · CC BY-SA 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Lagos_Life_goes_on.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Aerial_view_of_a_busy_tomato_market_in_Lagos_Nigeria.jpg/960px-Aerial_view_of_a_busy_tomato_market_in_Lagos_Nigeria.jpg',
      alt: 'A busy tomato market in Lagos seen from above',
      credit: 'Ayorinde Ogundele · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_a_busy_tomato_market_in_Lagos_Nigeria.jpg',
    },
  ],
  Highlights: [
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Argungu_Fishing_Festival%2C_Nigeria_Photo_4.jpg/960px-Argungu_Fishing_Festival%2C_Nigeria_Photo_4.jpg',
      alt: 'A colorful moment from Nigeria’s Argungu Fishing Festival',
      credit: 'Photobyamin · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Argungu_Fishing_Festival,_Nigeria_Photo_4.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Cultural_Display_during_the_Ayet_Atyap_Cultural_Festival_07.jpg/960px-Cultural_Display_during_the_Ayet_Atyap_Cultural_Festival_07.jpg',
      alt: 'Dancers at the Ayet Atyap Cultural Festival in Nigeria',
      credit: 'Samsule2 · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Cultural_Display_during_the_Ayet_Atyap_Cultural_Festival_07.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Atyap_drummers.jpg/960px-Atyap_drummers.jpg',
      alt: 'A group of Atyap drummers performing in Nigeria',
      credit: 'Kambai Akau · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Atyap_drummers.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/2005_market_Lagos_Nigeria_12129000.jpg/960px-2005_market_Lagos_Nigeria_12129000.jpg',
      alt: 'People shopping at a Lagos market',
      credit: 'Zouzou Wizman · CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:2005_market_Lagos_Nigeria_12129000.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Wedding_dinner_party_%283%29.jpg/960px-Wedding_dinner_party_%283%29.jpg',
      alt: 'A joyful gathering at a Nigerian wedding dinner',
      credit: 'Sani Oumar · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Wedding_dinner_party_(3).jpg',
    },
  ],
  'Behind the Scenes': [
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/LFDW3_-135.jpg/960px-LFDW3_-135.jpg',
      alt: 'A runway look from Lagos Fashion and Design Week',
      credit: 'Chidi “Lex Ash” Ashimole · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:LFDW3_-135.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Female_fashion_designer.jpg/960px-Female_fashion_designer.jpg',
      alt: 'A fashion designer preparing a piece in Nigeria',
      credit: 'Bigkotech · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Female_fashion_designer.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Sugar-cane_Fruits_Sold_on_the_Streets_of_Lagos%2C_Nigeria_1.jpg/960px-Sugar-cane_Fruits_Sold_on_the_Streets_of_Lagos%2C_Nigeria_1.jpg',
      alt: 'A street vendor’s fresh fruit display in Lagos',
      credit: 'Eze kelechi · CC0',
      source: 'https://commons.wikimedia.org/wiki/File:Sugar-cane_Fruits_Sold_on_the_Streets_of_Lagos,_Nigeria_1.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Aerial_view_of_a_busy_tomato_market_in_Lagos_Nigeria.jpg/960px-Aerial_view_of_a_busy_tomato_market_in_Lagos_Nigeria.jpg',
      alt: 'Vendors and shoppers at a Lagos tomato market',
      credit: 'Ayorinde Ogundele · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_a_busy_tomato_market_in_Lagos_Nigeria.jpg',
    },
    {
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Wedding_dinner_party_%281%29.jpg/960px-Wedding_dinner_party_%281%29.jpg',
      alt: 'The details and guests at a Nigerian wedding dinner',
      credit: 'Sani Oumar · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Wedding_dinner_party_(1).jpg',
    },
  ],
}

const descriptions = {
  'Event Recap': 'A quick look at the mood, movement, and moments that made the night memorable.',
  'Brand Content': 'Polished visual stories designed to feel true to the brand and sharp in motion.',
  'Team Bonding': 'Candid, people-first moments that capture energy, trust, and connection.',
  Highlights: 'The standout reels, the best moments, and the frames worth revisiting.',
  'Behind the Scenes': 'The process, preparation, and details that set the final story in motion.',
}

const categoryImageIndexes = {}

export const videos = records.map(([title, category, year, location, duration, externalLink], index) => {
  const images = archiveImages[category]
  const imageIndex = categoryImageIndexes[category] || 0
  categoryImageIndexes[category] = imageIndex + 1
  const image = images[imageIndex % images.length]

  return {
    id: String(index + 1),
    title,
    description: descriptions[category],
    category,
    thumbnail: image.url,
    thumbnailAlt: image.alt,
    thumbnailCredit: image.credit,
    thumbnailSource: image.source,
    videoUrl: null,
    embedUrl: externalLink?.includes('/drive/folders/') ? '' : `https://drive.google.com/file/d/${externalLink.match(/\/d\/([^/]+)/)?.[1]}/preview`,
    externalLink,
    date: String(year),
    duration,
    featured: index < 4,
    location: 'Lagos, Nigeria',
    isPlaceholder: !externalLink?.includes('/file/d/'),
  }
})

export const getVideoById = (id) => videos.find((video) => video.id === id)
