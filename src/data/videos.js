
const records = [
  // Event recaps
  ['After Party — Archive Cut', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/1muJnpE2RoZ08S6_ApiMncXmiOqzDQsy8/view?usp=drivesdk'],

  ['After Party', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/18TyClaHSFTlzQVLZ4K3MDSxjrx6UoX8s/view?usp=drivesdk'],

  ['Event Recap 1', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/1ZkBPp3vk9-b8bDoBn0fi-Yk9PbQ6PGS5/view?usp=drivesdk'],

  ['Event Recap 2', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/1ZkBPp3vk9-b8bDoBn0fi-Yk9PbQ6PGS5/view?usp=drivesdk'],

  ['Event Recap 3', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/13ix0m3j9FhuyJhEibtBjHSYApYbz_RYw/view?usp=drivesdk'],

  ['PASSPORTMONIE @ Akwaaba 26 — Part 1', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/1ZSw-9uBQV1BthuF_pSGT3s2mSjIIyMtM/view?usp=drivesdk'],

  ['PASSPORTMONIE @ Akwaaba 26 — Part 2', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/1yVdZACQ79JSBFDY2akSzMnv1iU0DUbof/view?usp=drivesdk'],

  ['Get-together', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/10gGqfasLxkSswPkofta5r-_xAGKRwisp/view?usp=drivesdk'],

  ['House of Bole at GTCO', 'Event Recap', '', '', '',
    'https://drive.google.com/file/d/1o44clGwrCJ8tx-KfPU2neYhbRVaaV46p/view?usp=drivesdk'],

  // Behind the scenes
  ['Event Setup', 'Behind the Scenes', '', '', '',
    'https://drive.google.com/file/d/1UCMDus7K4DE-Fa7QL6kWdFKNFovBtYtJ/view?usp=drivesdk'],

  ['Decor / Finished Look', 'Behind the Scenes', '', '', '',
    'https://drive.google.com/file/d/1LHt4mjHqDimJ07OS5JOWFK4DvjmtggQI/view?usp=drivesdk'],

  ['Birthday Video Shoot', 'Behind the Scenes', '', '', '',
    'https://drive.google.com/drive/folders/1z5_IVbCQM06GEy421y1CwYqyf7n032Id'],

  // Brand content
  ['Kalio — Brand Content', 'Brand Content', '', '', '',
    'https://drive.google.com/file/d/1KUZTrWB9lSgzmuKECcoWpRsOMWlyT-Dy/view?usp=drivesdk'],

  // Team bonding
  ['Nestcoin — Team Bonding', 'Team Bonding', '', '', '',
    'https://drive.google.com/file/d/1cbwidtbDtBhAiXKUOahMVQ-1J9qbSAHV/view?usp=drivesdk'],

  // Highlights
  ['Archive Feature', 'Highlights', '', '', '',
    'https://drive.google.com/file/d/1iaxjVV_VQ1yZFyCkmRFjdZsEAu8-tJxR/view?usp=drivesdk'],

  ['Game Night Recap', 'Highlights', '', '', '',
    'https://drive.google.com/file/d/1zdO4iR2vJWpqGVQfO9njrHscWmJvilgU/view?usp=drivesdk'],

  ['Review Screenshots', 'Highlights', '', '', '',
    'https://drive.google.com/drive/folders/1IhVGSBj81iVmD6TLOXROgIN4vUI6IPvZ'],

  ['Highlight', 'Highlights', '', '', '',
    'https://drive.google.com/file/d/1U__71mYqOzrLClOAtSc67Lw0KRFPV-Cv/view?usp=drivesdk'],

  ['Watch Party', 'Highlights', '', '', '',
    'https://drive.google.com/file/d/1U__71mYqOzrLClOAtSc67Lw0KRFPV-Cv/view?usp=drivesdk'],
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
