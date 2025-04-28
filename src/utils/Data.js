import logo from "../assets/images/logo.png";
import { URL } from "../resuable/URL";
import gulmarg from "../assets/images/Gulmarg.avif";
import sonamarg from "../assets/images/sonamarg.avif";
import pahalgam from "../assets/images/pahalgam.avif";
import srinagar from "../assets/images/srinagar.avif";
import doodhpathri from "../assets/images/doodhpathri.png";
import Aharbal from "../assets/images/Aharbal.avif";
import wular_lake from "../assets/images/Wular-Lake.avif";
import Verinag from "../assets/images/Verinag.avif";
import Guraz_valley from "../assets/images/Gurez-valley.avif";
import Dachigam_National_Park from "../assets/images/Dachigam National Park.avif";
import Dakshum_Wildlife from "../assets/images/Daksum Wildlife.avif";
import Sinthan_Top from "../assets/images/Sinthan Top.avif";
import moriro_lake from "../assets/images/moriro-lake.avif";
import kaksang_la_Pass from "../assets/images/kaksang la Pass.avif";
import Umling_La_Pass from "../assets/images/Umling La Pass.avif";
import Lamayuru_Monastery from "../assets/images/Lamayuru Monastery.avif";
import bungus_valley from "../assets/images/bungus_valley.avif";

export const All_Data = {
  logo: logo,
  menuData: [
    { label: "Home", href: URL.Home },
    {
      label: "packages",
      href: URL.Package,
    },
    { label: "destinations", href: URL.Destinations },

    { label: "contact", href: URL.Contact },
  ],
  banner_data: {
    banner_slider_images: [
      {
        img: gulmarg,
        title: "Gulmarg",
        people: "10 Peoples Going",
      },
      {
        title: "Sonamarg",
        people: "10 Peoples Going",
        img: sonamarg,
      },
      {
        title: "Pahalgam",
        people: "10 Peoples Going",
        img: pahalgam,
      },
      {
        title: "Srinagar",
        people: "10 Peoples Going",
        img: srinagar,
      },

      {
        title: "Doodhpathri",
        people: "10 Peoples Going",
        img: doodhpathri,
      },
      {
        title: "Sinthan Top",
        people: "10 Peoples Going",
        img: Sinthan_Top,
      },
      {
        title: "Bungus Valley ",
        people: "10 Peoples Going",
        img: bungus_valley,
      },
    ],
    list: ["Mountains", "Plains", "Lakes"],
  },
  packages: [
    {
      img: "https://www.travelleadsholidays.com/cloud.gigfolioo.com/s3/Travel%20Leads%20Holidays/PACKAGESMODEL/ffx6whbm0l4aqruib.jpg",
      title: "Heavenly Kashmir Retreat",
      // price: "12,500",
      duration: "5N / 6D",
      description:
        "Unwind in the serene beauty of Kashmir with our 6-day Heavenly Kashmir Retreat. Experience the tranquil waters of Dal Lake, the lush meadows of Gulmarg, and the picturesque valleys of Pahalgam. This tour promises a perfect blend of relaxation, adventure, and cultural exploration amidst the breathtaking landscapes of Kashmir.",
      family: "Family, Couples",
      package_type: "Kashmir",
      id: 1,
      itenerary: [
        {
          label: "Day 1: Arrival in Srinagar",
          meal: "",
          activities: [
            "Arrival at Srinagar Airport.",
            "Transfer to houseboat/hotel.",
            "Evening Shikara ride on Dal Lake, visiting Nehru Park.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 2: Srinagar Sightseeing",
          meal: "",
          activities: [
            " Visit Mughal Gardens: Shalimar Bagh, Nishat Bagh, and Chashme Shahi.",
            "Explore Shankaracharya Temple.",
            "Visit the Hazratbal Shrine.",
            "Evening at leisure, strolling through the local markets.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 3: Srinagar to Gulmarg",
          meal: "",
          activities: [
            "Drive to Gulmarg (Approx. 2 hours).",
            "Enjoy a Gondola ride to Kongdoori and Apharwat Peak.",
            "Free time for activities like skiing, snowboarding, or a pony ride (seasonal).",
            "Overnight stay in Gulmarg.",
          ],
        },
        {
          label: "Day 4: Gulmarg to Pahalgam",
          meal: "",
          activities: [
            "Drive to Pahalgam (Approx. 4 hours).",
            "En route, visit the Awantipora Ruins and Saffron fields.",
            "Explore Betaab Valley.",
            "Evening at leisure by the Lidder River.",
            "Overnight stay in Pahalgam.",
          ],
        },
        {
          label: "Day 5: Pahalgam Exploration",
          meal: "",
          activities: [
            "Day free for leisure activities such as trekking, horse riding, or fishing.",
            "Optional visit to Aru Valley or Baisaran Valley.",
            "Overnight stay in Pahalgam.",
          ],
        },
        {
          label: "Day 6: Departure from Srinagar",
          meal: "",
          activities: [
            "Drive back to Srinagar.",
            "Transfer to Srinagar Airport for your onward journey.",
            "Departure with cherished memories of Kashmir.",
          ],
        },
      ],
    },
    {
      img: "https://www.travelleadsholidays.com/cloud.gigfolioo.com/s3/Travel%20Leads%20Holidays/PACKAGESMODEL/ffx6whbm0l4aqxrd9.jpg",
      title: "Kashmir Adventure",
      // price: "8500",
      duration: "8N / 9D",
      description:
        "Explore the majestic beauty of Kashmir over 9 days, with visits to its most stunning destinations. Enjoy serene boat rides on Dal Lake, the adventurous trails of Pahalgam, the panoramic vistas of Gulmarg, and the captivating valleys of Sonamarg. This tour combines natural splendor, cultural richness, and thrilling activities for a memorable experience.",
      family: "Family, Couples",
      package_type: "Kashmir",
      id: 2,
      itenerary: [
        {
          label: "Day 1: Arrival in Srinagar",
          meal: "",
          activities: [
            " Arrival at Srinagar Airport.",
            "Transfer to houseboat/hotel.",
            "Evening Shikara ride on Dal Lake.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 2: Srinagar Sightseeing",
          meal: "",
          activities: [
            " Visit Mughal Gardens: Shalimar Bagh, Nishat Bagh,Chashme Shahi.",
            "Explore Shankaracharya Temple.",
            "Visit Hazratbal Shrine.",
            "Stroll through the local markets.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 3: Srinagar to Sonamarg",
          meal: "",
          activities: [
            "Drive to Sonamarg (Approx. 3 hours).",
            "Visit Thajiwas Glacier.",
            "Optional pony ride or trekking.",
            "Return to Srinagar.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 4: Srinagar to Pahalgam",
          meal: "",
          activities: [
            "Drive to Pahalgam (Approx. 4 hours).",
            "En route, visit Awantipora Ruins and Saffron fields.",
            "Explore Betaab Valley.",
            "Evening leisure by Lidder River.",
            "Overnight stay in Pahalgam.",
          ],
        },
        {
          label: "Day 5: Pahalgam Exploration",
          meal: "",
          activities: [
            "Day free for leisure activities like horse riding, trekking, or fishing.",
            "Optional visit to Aru Valley or Baisaran Valley.",
            "Overnight stay in Pahalgam.",
          ],
        },
        {
          label: "Day 6: Pahalgam to Gulmarg",
          meal: "",
          activities: [
            "Drive to Gulmarg (Approx. 4 hours).",
            "Enjoy a Gondola ride to Kongdoori and Apharwat Peak.",
            "Leisure time for skiing, snowboarding, or pony rides (seasonal).",
            "Overnight stay in Gulmarg.",
          ],
        },
        {
          label: "Day 7: Gulmarg Exploration",
          meal: "",
          activities: [
            "Day free to explore Gulmarg.",
            "Visit Gulmarg Golf Course or take a walk through the scenic meadows.",
            "Overnight stay in Gulmarg.",
          ],
        },
        {
          label: "Day 8: Gulmarg to Srinagar",
          meal: "",
          activities: [
            "Drive back to Srinagar.",
            "Visit the floating markets on Dal Lake.",
            "Evening free for exploring Srinagar’s local cuisine and shopping.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 9: Departure from Srinagar",
          meal: "",
          activities: [
            "Transfer to Srinagar Airport for your onward journey.",
            "Departure with unforgettable memories of Kashmir.",
          ],
        },
      ],
    },
    {
      img: "https://www.travelleadsholidays.com/cloud.gigfolioo.com/s3/Travel%20Leads%20Holidays/PACKAGESMODEL/ffx6whbm0l4ar1eqx.jpg",
      title: "Magical Kashmir Delight",
      // price: "12300",
      duration: "6N / 7D",
      description:
        "Embark on a 7-day adventure through the stunning landscapes of Kashmir. From the tranquil waters of Dal Lake to the breathtaking views from Gulmarg and the lush greenery of Pahalgam, this tour offers a perfect mix of natural beauty, adventure, and cultural experiences. Indulge in the serene ambiance and warm hospitality of Kashmir.",
      family: "Family, Couples",
      package_type: "Kashmir",
      id: 3,
      itenerary: [
        {
          label: "Day 1: Arrival in Srinagar",
          meal: "",
          activities: [
            " Arrival at Srinagar Airport.",
            "Transfer to houseboat/hotel.",
            "Evening Shikara ride on Dal Lake, visiting Nehru Park.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 2: Srinagar Sightseeing",
          meal: "",
          activities: [
            " Visit Mughal Gardens: Shalimar Bagh, Nishat Bagh,Chashme Shahi.",
            "Explore Shankaracharya Temple.",
            "Visit Hazratbal Shrine.",
            "Evening free for shopping at the local markets.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 3: Srinagar to Pahalgam",
          meal: "",
          activities: [
            "Drive to Pahalgam (Approx. 4 hours).",
            "En route, visit the Awantipora Ruins and Saffron fields.",
            "Explore the beautiful Betaab Valley.",
            "Evening at leisure by the Lidder River.",
            "Overnight stay in Pahalgam.",
          ],
        },
        {
          label: "Day 4: Pahalgam Exploration",
          meal: "",
          activities: [
            "Day free for leisure activities like horse riding, trekking, or fishing.",
            "Optional visit to Aru Valley or Baisaran Valley.",
            "Overnight stay in Pahalgam.",
          ],
        },
        {
          label: "Day 5: Pahalgam to Gulmarg",
          meal: "",
          activities: [
            "Drive to Gulmarg (Approx. 4 hours).",
            "Enjoy a cable car ride (Gondola) to Kongdoori and Apharwat Peak.",
            "Leisure time for skiing, snowboarding, or pony rides (seasonal).",
            "Overnight stay in Gulmarg.",
          ],
        },
        {
          label: "Day 6: Gulmarg to Srinagar",
          meal: "",
          activities: [
            "Morning leisure in Gulmarg.",
            "Drive back to Srinagar.",
            "Visit the floating markets on Dal Lake.",
            "Evening free for exploring Srinagar’s local cuisine and shopping.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 7: Departure from Srinagar",
          meal: "",
          activities: [
            "Transfer to Srinagar Airport for your onward journey.",
            "Departure with unforgettable memories of Kashmir.",
          ],
        },
      ],
    },
    {
      img: "https://www.travelleadsholidays.com/cloud.gigfolioo.com/s3/Travel%20Leads%20Holidays/PACKAGESMODEL/ffx6whbm0l4ar1eqx.jpg",
      title: "Mystical Kashmir Escape",
      // price: "12300",
      duration: "6N / 5D",
      description:
        "Embark on a 6-day journey through the enchanting landscapes of Kashmir. From the serene waters of Dal Lake to the snow-capped peaks of Gulmarg and the lush meadows of Pahalgam, this tour offers a perfect blend of natural beauty and cultural richness. Explore vibrant markets, visit historic sites, and experience the warm hospitality of Kashmir.",
      family: "Family, Couples",
      package_type: "Kashmir",
      id: 3,
      itenerary: [
        {
          label: "Day 1: Arrival in Srinagar",
          meal: "",
          activities: [
            " Arrival at Srinagar Airport.",
            "Transfer to houseboat/hotel.",
            "Evening Shikara ride on Dal Lake.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 2: Srinagar Sightseeing",
          meal: "",
          activities: [
            " Visit Mughal Gardens: Shalimar Bagh, Nishat Bagh,Chashme Shahi.",
            "Explore Shankaracharya Temple.",
            "Visit Hazratbal Shrine.",
            "Evening free for shopping at the local markets.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 3: Srinagar to Gulmarg",
          meal: "",
          activities: [
            "Drive to Gulmarg (Approx. 2 hours).",
            "Enjoy a cable car ride (Gondola) to Apharwat Peak.",
            "Free time for activities like skiing, snowboarding, or a pony ride (seasonal).",
            "Overnight stay in Gulmarg.",
          ],
        },
        {
          label: "Day 4: Gulmarg to Pahalgam",
          meal: "",
          activities: [
            "Drive to Pahalgam (Approx. 4 hours).",
            "En route, visit the Awantipora Ruins and Saffron fields.",
            "Explore the beautiful Betaab Valley and Aru Valley.",
            "EEvening leisure time by the Lidder River.",
            "Overnight stay in Pahalgam.",
          ],
        },
        {
          label: "Day 5: Pahalgam to Srinagar",
          meal: "",
          activities: [
            "Morning free for leisure activities (optional rafting or horse riding).",
            "Drive back to Srinagar.",
            "Visit the famous Hazratbal Shrine.",
            "Evening free for exploring Srinagar’s local cuisine",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 6: Departure from Srinagar",
          meal: "",
          activities: [
            "Transfer to Srinagar Airport for your onward journey.",
            "Departure with unforgettable memories of Kashmir.",
          ],
        },
      ],
    },
    {
      img: "https://www.bakhtortourandtravels.com/wp-content/uploads/2024/07/ma2ogrerjjg-1024x683.jpg",
      title: "Spiritual Retreat",
      // price: "12300",
      duration: "5N / 6D",
      description:
        "Embark on a 6-day journey through the enchanting landscapes of Kashmir. From the serene waters of Dal Lake to the snow-capped peaks of Gulmarg and the lush meadows of Pahalgam, this tour offers a perfect blend of natural beauty and cultural richness. Explore vibrant markets, visit historic sites, and experience the warm hospitality of Kashmir.",
      family: "Family, Couples",
      package_type: "Kashmir",
      id: 3,
      itenerary: [
        {
          label: "Day 1: Arrive at Jammu Airport or Railway Station",
          meal: "",
          activities: [
            "Arrive at Jammu Airport or Railway Station.",
            "Transfer to Katra, the base camp for Vaishno Devi pilgrimage.",
            "Check-in at the hotel and rest.",
            "Evening at leisure to explore local markets.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 2: Vaishno Devi Darshan",
          meal: "",
          activities: [
            "Early morning trek to Vaishno Devi Shrine (13 km one way).",
            "Seek blessings at the holy cave temple of Mata Vaishno Devi.",
            "Return to Katra by late evening.",
            "Overnight stay in Katra.",
          ],
        },
        {
          label: "Day 3: Katra to Srinagar",
          meal: "",
          activities: [
            "After breakfast, check-out from the hotel in Katra.",
            "Drive to Srinagar (approximately 260 km, 7-8 hours).",
            "Arrive in Srinagar, check-in at the hotel or houseboat.",
            "Evening Shikara ride on Dal Lake.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 4: Srinagar Sightseeing",
          meal: "",
          activities: [
            "After breakfast, proceed for local sightseeing in Srinagar.",
            "Visit Mughal Gardens: Nishat Bagh, Shalimar Bagh, and Chashme Shahi.",
            "Explore the old city and its vibrant markets.",
            "Optional visit to Shankaracharya Temple.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 5: Excursion to Gulmarg",
          meal: "",
          activities: [
            "After breakfast, excursion to Gulmarg (approximately 50 km, 1.5 hours).",
            "Enjoy Gondola ride (cable car) up to Khilanmarg.",
            "Explore the scenic beauty and indulge in optional activities like horse riding, skiing (in winter), etc.",
            "Return to Srinagar in the evening.",
            "Overnight stay in Srinagar.",
          ],
        },
        {
          label: "Day 6: Departur",
          meal: "",
          activities: [
            "After breakfast, check-out from the hotel.",
            "Transfer to Srinagar Airport for onward journey.",
          ],
        },
      ],
    },
  ],
  destinations: [
    {
      destination_type: "Kashmir",
      img: wular_lake,
      title: "Wulnar lake",
      discription: [
        "Nestled in the heart of the Kashmir Valley, between the towns of Sopore and Bandipora, lies the majestic Wular Lake, one of the largest freshwater lakes in Asia. Spanning an impressive area that fluctuates seasonally from approximately 30 to 189 square kilometers, this expansive water body is a sight to behold, reflecting the grandeur of the surrounding Himalayan peaks.",

        "The lakes origin is attributed to tectonic activity, and it is believed by some to be a remnant of the ancient Satisar Lake. The Jhelum River, a vital waterway of Kashmir, feeds into Wular Lake, and subsequently flows out, making the lake an important natural flood reservoir for the region. This dynamic interplay with the river causes the lakes size to vary dramatically throughout the year, creating a constantly evolving landscape.",

        "Wular Lake is not only a significant geographical feature but also an ecological hotspot. Its extensive marshes and diverse vegetation provide a crucial habitat for a wide array of flora and fauna. It is a haven for bird watchers, attracting numerous migratory waterfowl species, including the common pochard, mallard, and various egrets. The surrounding wetlands are also home to mammals like the Kashmir stag (Hangul) and Himalayan musk deer.",

        "The lake is also economically vital, supporting a thriving fishing industry. Its waters are rich in various fish species, including carp and snow trout, providing livelihoods for thousands of local fishermen. Furthermore, the abundant growth of water chestnuts in the lake offers another source of income and sustenance for the communities living along its shores.",

        "Adding to its charm is the island of Zaina Lank, situated in the lakes center. This artificial island was constructed in 1444 AD by the Kashmiri ruler Sultan Zain-ul-Abidin, adding a historical touch to the natural beauty.",

        "Recognizing its ecological, economic, and cultural significance, Wular Lake was designated as a Wetland of International Importance under the Ramsar Convention in 1990. While facing challenges such as siltation and encroachment, efforts are underway to conserve this precious natural heritage of Kashmir, ensuring its beauty and biodiversity endure for generations to come.",
      ],
    },
    {
      destination_type: "Kashmir",
      img: Verinag,
      title: "Verinag",
      discription: [
        'Nestled at the foothills of the Pir Panjal range in the Anantnag district of Jammu and Kashmir, Verinag emerges as a captivating spring and a significant historical site. The very name "Verinag" is believed to be a derivative of "Vitasta Nag," referencing the source of the vital Jhelum River, which originates from this very spot. The spring itself is an octagonal stone basin, enclosed by an arcade of Mughal arches built by Emperor Jahangir in the early 17th century. This architectural marvel, constructed from locally sourced dressed stones, showcases the exquisite artistry of the Mughal era and exudes a sense of tranquility.',

        "The crystal-clear waters of the Verinag spring emerge from the depths with a mesmerizing turquoise hue, creating a captivating visual spectacle. The surrounding gardens, also laid out during Jahangir's reign and further enhanced by his son Shah Jahan, add to the site's allure. These Mughal gardens, with their meticulously manicured lawns, vibrant flowerbeds, and cascading fountains, offer a serene retreat for visitors. The towering chinar trees, characteristic of Kashmiri landscapes, provide ample shade and a majestic backdrop to the spring and its architectural surroundings.",

        "Beyond its natural beauty, Verinag holds considerable historical importance. It is believed to have been a significant stopover on the ancient Silk Route, connecting Kashmir with Central Asia. The Mughal rulers, captivated by its beauty and strategic location, developed it into a royal garden and a place of leisure. Jahangir, in particular, held Verinag in high regard, expressing his deep affection for the site in his memoirs, the Tuzk-e-Jahangiri. He even desired to be buried there, although his final resting place is in Lahore.",

        "Today, Verinag stands as a popular tourist destination, attracting visitors with its blend of natural splendor and historical significance. The site offers a glimpse into the rich cultural heritage of Kashmir and the artistic sensibilities of the Mughal emperors. The cool, refreshing air, the gentle murmur of the spring, and the grandeur of the Mughal architecture create an atmosphere of peace and serenity, making Verinag a must-visit location for anyone exploring the beauty and history of Kashmir. The site continues to be a source of both natural wonder and historical intrigue, reminding visitors of the valley's rich past and enduring beauty.",
      ],
    },
    {
      destination_type: "Kashmir",
      img: Aharbal,
      title: "Aharbal",
      discription: [
        "Nestled amidst the towering pine and fir trees of the Noorabad region in the Kulgam district of Jammu and Kashmir, lies the breathtaking Aharbal Waterfall. Often dubbed the 'Niagara Falls of Kashmir' due to its impressive volume and forceful cascade, Aharbal is a captivating natural spectacle that draws visitors with its raw power and scenic beauty. The Veshu River, a tributary of the Jhelum, plunges down from a narrow gorge, creating a thunderous roar and a misty spray that often forms vibrant rainbows in the sunlight.",

        "The main waterfall at Aharbal is a sight to behold, with the water cascading down a series of rocky ledges with tremendous force. The sheer volume of water, particularly during the spring and summer months as snow melts in the upper reaches, is truly awe-inspiring. However, the beauty of Aharbal extends beyond the main falls. The surrounding area is characterized by lush green meadows, dense forests, and numerous smaller waterfalls and cascades that meander through the landscape, offering opportunities for exploration and tranquility.",

        "Aharbal is not just a visual treat; it's also a popular destination for adventure enthusiasts and nature lovers. Trekking trails wind through the surrounding forests, offering panoramic views of the valley and leading to other scenic spots like Kungawatan and Gurwatan. The area is also known for its angling opportunities in the Veshu River, which is home to various species of fish. The cool and refreshing air, coupled with the sounds of nature, makes Aharbal an ideal escape from the hustle and bustle of daily life.",

        "Historically, Aharbal has also held a certain significance, although perhaps not as prominent as some other Mughal gardens or religious sites in Kashmir. Its untouched natural beauty has always been appreciated, and it continues to be a cherished local picnic spot and a growing attraction for tourists seeking natural wonders. The Jammu and Kashmir tourism department has been actively promoting Aharbal as an eco-tourism destination, emphasizing its pristine environment and potential for sustainable tourism.",

        "While Aharbal might be less crowded than some of the more famous tourist spots in Kashmir, its raw natural beauty and the sheer power of its waterfall leave a lasting impression on all who visit. The combination of the cascading water, the verdant surroundings, and the tranquil atmosphere makes Aharbal a truly unforgettable experience in the heart of the Kashmir Valley.",
      ],
    },
    {
      destination_type: "Kashmir",
      img: Dachigam_National_Park,
      title: "Dachigam Wildlife",
      discription: [
        "Dachigam Wildlife Sanctuary, nestled in the picturesque valley of Kashmir, is a significant protected area renowned for its rich biodiversity and breathtaking landscapes. Located approximately 22 kilometers from Srinagar, the summer capital of Jammu and Kashmir, India, this sanctuary spans an area of 141 square kilometers within the Zabarwan Range of the Western Himalayas. The name 'Dachigam' literally translates to 'ten villages' in Kashmiri, a poignant reminder of the ten villages that were relocated to establish this crucial conservation zone.",
        "The history of Dachigam dates back to the early 20th century when it was initially established as a game reserve by the Maharaja of Jammu and Kashmir in 1910. This step was primarily taken to safeguard the Hangul, or Kashmir stag, a magnificent and endangered species endemic to the region. Recognizing the importance of this area not only for wildlife but also as a vital catchment for the Harwan reservoir, which supplied clean drinking water to Srinagar, the Maharaja declared it a protected area. Over the years, its ecological significance grew, leading to its upgrade as a wildlife sanctuary in 1951 and finally as a National Park in 1981, granting it stronger legal protection.",
        "Dachigam is best known as the last viable natural habitat of the Hangul (Cervus elaphus hanglu), a critically endangered subspecies of red deer. Conservation efforts within the park are paramount for the survival of this iconic animal, recognized by its impressive antlers with 11 to 16 points. Besides the Hangul, the sanctuary harbors a diverse array of other fascinating mammals, including the elusive snow leopard (Panthera uncia), the Himalayan black bear (Ursus thibetanus laniger), the Himalayan brown bear (Ursus arctos isabellinus), leopards (Panthera pardus), musk deer (Moschus chrysogaster), Himalayan grey langurs (Semnopithecus ajax), leopard cats (Prionailurus bengalensis), yellow-throated martens (Martes flavigula), jungle cats (Felis chaus), long-tailed marmots (Marmota caudata), Indian foxes (Vulpes bengalensis), and Himalayan weasels (Mustela altaica).",
      ],
    },
    {
      destination_type: "Kashmir",
      img: Guraz_valley,
      title: "Gurez Valley",
      discription: [
        "Nestled high in the Himalayas, approximately 123 kilometers north of Srinagar in the Bandipora district of Jammu and Kashmir, lies the breathtaking Gurez Valley. At an elevation of around 2,400 meters (8,000 feet) above sea level, this enchanting valley is a tapestry of towering, snow-capped mountains, verdant meadows, and the pristine, gurgling waters of the Kishanganga River (known as the Neelum in Pakistan). Historically, Gurez was an integral part of ancient Dardistan, a region that stretched from Sharada Peeth in the west to Minimarg in the north, Drass in the east, and Bagtore in the south. Its strategic location along the ancient Silk Route connected the Kashmir Valley with Gilgit and further into Central Asia, leaving behind traces of diverse cultural influences.",
        "The inhabitants of Gurez are primarily Dards, who speak the Shina language, a Dardic language with roots connecting them to the Gilgit Valley in present-day Pakistan. Their unique culture, intertwined with the Kashmiri traditions of the mountain regions, is a fascinating blend of customs, attire, and a resilient spirit shaped by the challenging yet beautiful environment. Traditional log wood houses dot the landscape, lending the valley a rustic charm reminiscent of the European countryside. ",
        "Gurez Valley's beauty is legendary, often drawing comparisons to the Swiss Alps with its dazzling fields of wildflowers and panoramic vistas. The majestic Harmukh peak provides a stunning backdrop, while the pyramid-shaped Habba Khatoon mountain, named after the celebrated Kashmiri poetess, stands sentinel over the valley, steeped in local folklore and romantic tales. Legend has it that Habba Khatoon, heartbroken by the imprisonment of her husband, Emperor Yousuf Shah Chak, wandered near this peak in search of her beloved.",
        "The Kishanganga River, the lifeline of the valley, meanders through its length, offering opportunities for angling, particularly for brown trout. The roaring sound of the river echoes through the mountains, creating a soothing ambiance for visitors. For adventure enthusiasts, Gurez offers numerous trekking routes that lead towards Gangabal and Sonamarg in the east and Drass and Zanskar in the north. The rugged terrain also presents challenging rock climbing opportunities.",
      ],
    },
    {
      destination_type: "Kashmir",
      img: Dakshum_Wildlife,
      title: "Dakshum Wildlife ",
      discription: [
        "Dakshum Wildlife Sanctuary, also known as Rajparian Wildlife Sanctuary, is a hidden gem nestled in the Anantnag district of Jammu and Kashmir, not far from the popular tourist destination of Daksum. Spanning approximately 20 square kilometers, this sanctuary offers a tranquil escape into the heart of nature, characterized by its dense coniferous forests, lush sub-alpine pastures, and the pristine Rajparian Nallah flowing through it.",
        "Historically, the area now encompassed by the Dakshum Wildlife Sanctuary held significance as a game reserve during the Maharaja's rule before 1948, primarily dedicated to the conservation of the Hangul, or Kashmir stag. Recognizing its ecological importance, the area was officially upgraded to the Rajparian Wildlife Sanctuary in 1981, solidifying its status as a protected area. The name 'Rajparian' is derived from the Rajparian Nallah, a vital watercourse that meanders through the sanctuary, shaping its landscape and supporting its rich biodiversity. ",
        "The topography of Dakshum Wildlife Sanctuary is characterized by a diverse mosaic of habitats, ranging from riverine vegetation along the banks of the Rajparian Nallah to dense coniferous forests that blanket the steep slopes. Higher altitudes give way to sub-alpine pastures and interspersed scrubs, while rocky terrains and hilltops also support unique plant communities. This variety in altitude and terrain contributes significantly to the sanctuary's biological richness.",
        "The floral diversity within the sanctuary is remarkable. The riverine areas are adorned with broad-leaved species such as Aesculus indica (Indian horse chestnut), Juglans regia (walnut), Quercus incana (blue jack oak), Rhus succedanea (wax tree), and various species of Morus (mulberry). The shrub layer in these zones includes species like Parrotiopsis jacquemontiana (witch-hazel shrub), Rosa species (roses), Viburnum species, and Berberis species (barberries).",
        "The coniferous forests, a defining feature of Dakshum, are dominated by majestic trees like Pinus griffithii (Kail pine), Picea smithiana (spruce), and Abies pindrow (fir). Interspersed among these evergreens are broad-leaved trees such as Aesculus indica and Quercus incana. At higher elevations, particularly in the sub-alpine regions, Betula utilis (birch) becomes prominent, often mixed with unidentified grasses. The alpine pastures and scrubs also feature species like Rhododendron, Primula, Anemone, and Juniperus. Even the rocky faces support specialized vegetation, including coarse grasses and Juniperus species adapted to the harsh conditions.",
      ],
    },
    {
      destination_type: "Kashmir",
      img: Sinthan_Top,
      title: "Sinthan Top ",
      discription: [
        "Nestled in the breathtakingly beautiful region of Kashmir, Sinthan Top is one of the most mesmerizing high-altitude mountain passes in India. Located at an elevation of approximately 3,800 meters (12,500 feet) above sea level, it serves as a vital link between the Kashmir Valley and the Kishtwar district of Jammu. Known for its rugged terrain, snow-capped peaks, and panoramic vistas, Sinthan Top is a paradise for adventure seekers, nature lovers, and photographers.",
        "Sinthan Top lies on the Sinthan-Kishtwar Road, which connects Anantnag in Kashmir to Kishtwar in Jammu. This route is an alternative to the traditional Jawahar Tunnel route and provides a more scenic, albeit challenging, passage. The road remains open only during the summer months (June to October) due to heavy snowfall in winter, making it inaccessible for the rest of the year.",
        "The pass holds strategic importance for the local population, facilitating trade and transportation between the two regions. Additionally, it serves as a crucial route for the Indian Army, given its proximity to sensitive border areas.",
        "One of the most striking features of Sinthan Top is its untouched natural beauty. The journey to the top is an adventure in itself, with winding roads cutting through lush green meadows, dense pine forests, and cascading waterfalls. As travelers ascend, the landscape transforms from verdant valleys to stark, snow-covered slopes.",
        "Sinthan Top is gradually gaining popularity among bikers, trekkers, and road-trippers. The challenging terrain, with steep inclines and sharp turns, makes it a thrilling destination for motorcycle enthusiasts. The road is not for the faint-hearted, as it lacks guardrails in many sections, but the adrenaline rush and the breathtaking views make it worth the effort.",
      ],
    },
    {
      destination_type: "Kashmir",
      img: "https://www.travelleadsholidays.com/cloud.gigfolioo.com/s3/Travel%20Leads%20Holidays/DESTINATIONSMODEL/ffx6wdtkzl482re27.jpg",
      title: "Shalimar Garden – Photographer’s Paradise",
      discription: [
        "Shalimar Garden, also known as Shalimar Bagh, is one of the most exquisite Mughal gardens in the world. Built during the reign of Emperor Jahangir in 1619 AD, it is located in Lahore, Pakistan, and stands as a testament to the grandeur of Mughal architecture and landscaping. The garden was designed to embody the concept of paradise on Earth, combining natural beauty with meticulous symmetry, flowing water, and lush greenery. Recognized as a UNESCO World Heritage Site, Shalimar Garden remains a major tourist attraction and a symbol of Lahore's rich cultural heritage.",
        "Shalimar Garden was commissioned by Emperor Jahangir for his wife, Empress Nur Jahan, and completed in 1641 under the supervision of Khalilullah Khan, a noble in Jahangir's court. The garden's name, 'Shalimar', is believed to have been derived from the Sanskrit words 'Shayla' (meaning 'abode') and 'Mar' (meaning 'love'), translating to 'Abode of Love'.",
        "The garden was intended as a royal retreat where the Mughal emperors could relax and entertain guests. Later, Emperor Shah Jahan expanded the garden, adding more terraces and intricate water features. Over the centuries, the garden suffered neglect during the decline of the Mughal Empire but was later restored by the British and the Pakistani government.",
      ],
    },
    {
      destination_type: "Ladakh",
      img: "https://www.travelleadsholidays.com/cloud.gigfolioo.com/s3/Travel%20Leads%20Holidays/DESTINATIONSMODEL/ffx6wdtkzl48325gs.jpg",
      title: "Pangong Tso Lake",
      discription: [
        "Nestled in the Himalayas at an altitude of about 4,350 meters (14,270 feet), Pangong Tso Lake is one of the most breathtaking and unique lakes in the world. Stretching across the border between India and China, this stunning high-altitude lake is renowned for its ever-changing shades of blue, serene surroundings, and rugged mountainous backdrop. Spanning approximately 134 km (83 miles) in length, with about one-third of the lake lying in India (Ladakh) and the remaining two-thirds in Tibet (China), Pangong Tso is a natural wonder that captivates travelers, photographers, and nature lovers alike.",
        "Pangong Tso, whose name translates to 'high grassland lake' in Tibetan, is a endorheic lake, meaning it has no outlet, and its waters do not flow into any river or sea. Instead, the lake loses water only through evaporation, contributing to its salinity. Despite being situated in a freezing cold desert region, Pangong Tso remains liquid for most of the year, though it freezes completely in winter, creating a surreal icy landscape.",
        "The lake is situated in the Indo-Chinese border region, making it a sensitive geopolitical area. The Line of Actual Control (LAC), which serves as the de facto border between India and China, passes through the lake, leading to occasional military tensions. Despite this, the lake remains a major tourist attraction in Ladakh, drawing visitors from across the globe.",
        "What makes Pangong Tso truly magical is its shimmering blue waters, which change colors throughout the day—from deep azure in the morning to turquoise and emerald green by afternoon, and golden hues at sunset. The lake’s crystal-clear waters reflect the surrounding barren mountains, creating a mirror-like effect that is nothing short of mesmerizing.",
        "Pangong Tso gained international fame after being featured in the Bollywood blockbuster '3 Idiots' (2009), where the lake’s breathtaking beauty was showcased in the film’s climax. Since then, tourism in the region has surged, with travelers flocking to experience its serene and otherworldly landscape.",
        "Pangong Tso is not just a scenic wonder but also an ecologically sensitive zone. It is part of the Ramsar Convention on Wetlands, recognizing its importance as a habitat for migratory birds. However, the lake’s fragile ecosystem faces threats from tourism, littering, and military activities.",
      ],
    },
    {
      destination_type: "Ladakh",
      img: "https://www.travelleadsholidays.com/cloud.gigfolioo.com/s3/Travel%20Leads%20Holidays/DESTINATIONSMODEL/ffx6wdtkzl4830zlj.jpg",
      title: "Zanskar Valley",
      discription: [
        "Nestled in the remote corners of the Indian Himalayas, the Zanskar Valley is one of the most breathtaking and least explored regions in Ladakh. Known for its rugged landscapes, pristine rivers, ancient monasteries, and unique culture, Zanskar offers an unparalleled experience for adventurers, trekkers, and spiritual seekers alike.",
        "Zanskar Valley is located in the Kargil district of Ladakh, at an altitude ranging between 3,500 to 7,000 meters above sea level. The valley is surrounded by towering snow-clad peaks, deep gorges, and the mighty Zanskar River, which freezes in winter to form the famous Chadar Trek—a thrilling ice trek over the frozen river. The region remains cut off from the rest of the world for nearly eight months due to heavy snowfall, making it one of the most isolated places in India.",
        "Zanskar Valley is more than just a travel destination—it’s an experience that stays with you forever. Whether you seek adventure, spiritual solace, or a glimpse into an untouched culture, Zanskar offers it all. Its raw beauty, combined with the resilience of its people, makes it one of the last true wildernesses on Earth. For those willing to venture off the beaten path, Zanskar is a dream waiting to be discovered.",
      ],
    },
    {
      destination_type: "Ladakh",
      img: kaksang_la_Pass,
      title: "Kaksang La Pass",
      discription: [
        "Nestled in the majestic Himalayas, Kaksang La Pass is one of the many high-altitude mountain passes that serve as crucial routes for trekkers, pilgrims, and adventurers exploring the remote regions of the Tibetan Plateau and surrounding areas. While not as widely known as some of the more famous passes like Khardung La or Rohtang La, Kaksang La holds its own significance due to its challenging terrain, breathtaking views, and cultural importance.",
        "Kaksang La Pass is situated at an elevation of approximately 5,250 meters (17,224 feet) above sea level, placing it among the higher mountain passes in the region. The exact location varies slightly depending on sources, but it is generally found in the Himalayan or Trans-Himalayan range, often serving as a crossing point between valleys or connecting different parts of the Tibetan Plateau.",
        "The pass is characterized by steep ascents, rocky trails, and unpredictable weather conditions, making it accessible only during certain months of the year. Winters bring heavy snowfall, blocking the route, while summers offer a narrow window for crossing before monsoon rains make the trails slippery and dangerous.",
        "Mountain passes like Kaksang La have been used for centuries by traders, nomadic herders, and pilgrims. In ancient times, these routes were part of the Salt Trade routes, where caravans transported salt, wool, and other goods between Tibet and neighboring regions. Additionally, Buddhist pilgrims often traverse such high-altitude passes while journeying to sacred monasteries and lakes in the Himalayas.",
        "For local communities, Kaksang La is more than just a geographical feature—it is a part of their cultural and spiritual landscape. Many Himalayan passes are adorned with prayer flags and cairns (stone mounds), symbolizing prayers for safe passage and paying homage to the mountain deities.",
      ],
    },
    {
      destination_type: "Ladakh",
      img: Umling_La_Pass,
      title: "Umling La Pass",
      discription: [
        "Nestled in the remote and rugged terrains of Ladakh, Umling La Pass stands as a testament to human engineering and perseverance. At an astonishing altitude of 19,024 feet (5,800 meters) above sea level, it is recognized as the world’s highest motorable pass, surpassing even the famous Khardung La (17,582 feet). This high-altitude marvel, constructed by India’s Border Roads Organisation (BRO), is not just an engineering feat but also a strategic and adventurous route that offers breathtaking views of the Himalayas.",
        "Umling La is located in the Ladakh region of Jammu and Kashmir, connecting the Chisumle and Demchok villages near the Line of Actual Control (LAC) with China. The pass lies in an extremely remote and challenging terrain, making its construction a monumental achievement. The road was built under Project Himank, a division of the BRO, known for constructing some of the most difficult roads in the world.",
        "The strategic importance of Umling La cannot be overstated. It enhances connectivity for the Indian Army and provides better access to border areas, ensuring swift movement of troops and supplies. Additionally, it strengthens India’s presence in the sensitive region near the China border.",
        "Umling La Pass is more than just a road—it is a symbol of human determination, strategic defense, and the spirit of adventure. Whether for military purposes or extreme tourism, this pass stands as one of the most remarkable achievements in high-altitude road construction. For those daring enough to traverse its heights, Umling La offers an unforgettable journey into the clouds, where the sky meets the earth in the majestic landscapes of Ladakh.",
        "Visiting Umling La is not just about reaching a destination; it’s about conquering one of the most extreme roads on the planet.",
      ],
    },
    {
      destination_type: "Ladakh",
      img: Lamayuru_Monastery,
      title: "Lamayuru Monastery",
      discription: [
        "Nestled amidst the rugged and breathtaking landscapes of Ladakh, Lamayuru Monastery stands as one of the most ancient and revered Buddhist sites in the region. Perched at an altitude of about 3,510 meters (11,516 feet) above sea level, this monastery is not only a significant religious center but also a place of surreal beauty, often referred to as the 'Moonland of Ladakh' due to its unique, lunar-like terrain.",
        "Lamayuru Monastery, also known as Yuru Gompa, is believed to date back to the 10th century, making it one of the oldest monasteries in Ladakh. According to legend, the site was once a lake, which dried up after a Buddhist saint, Naropa, meditated here. Another story connects it to Mahasiddha Naropa, who is said to have caused a part of the mountain to collapse, revealing a natural cave where he established a meditation center.",
        "The monastery is associated with the Drikung Kagyu sect of Tibetan Buddhism, though it originally belonged to the Kadampa school. Over the centuries, it has served as an important center for Buddhist learning and meditation, attracting monks and pilgrims from across the Himalayas.",
        "The monastery complex is a stunning example of traditional Tibetan Buddhist architecture. It consists of multiple shrines, prayer halls, and living quarters for monks, all built into the rocky cliffs. The main prayer hall, or Dukhang, houses beautiful murals, thangkas (religious paintings), and statues of Buddha, Guru Padmasambhava, and other deities.",
        "One of the most striking features of Lamayuru is its whitewashed buildings, which contrast dramatically with the surrounding barren, moon-like landscape. The monastery also has an impressive collection of ancient Buddhist scriptures and manuscripts, preserved over centuries.",
        "Lamayuru Monastery is famous for its annual Yuru Kabgyat Festival, a vibrant two-day event featuring masked dances (Cham), rituals, and prayers. The festival, usually held in June or July, attracts both locals and tourists who come to witness the colorful performances that depict Buddhist teachings and legends. The dances are performed by monks wearing elaborate costumes and masks, symbolizing the triumph of good over evil.",
        "The area surrounding Lamayuru is renowned for its otherworldly, eroded hills, resembling the surface of the moon. This geological wonder, formed over millions of years due to wind and water erosion, adds to the monastery’s mystical charm. Many travelers stop here to admire the surreal scenery and take photographs of the dramatic landscape.",
      ],
    },
    {
      destination_type: "Kashmir",
      img: doodhpathri,
      title: "Doodhpathri",
      discription: [
        "Nestled in the Budgam district of Jammu and Kashmir, Doodhpathri (meaning 'Valley of Milk') is a breathtakingly beautiful meadow that remains one of the region's best-kept secrets. With its lush green landscapes, glistening streams, and snow-capped mountains in the distance, Doodhpathri is often compared to a paradise on earth. Unlike the more crowded tourist destinations like Gulmarg and Pahalgam, Doodhpathri offers a serene and untouched natural beauty, making it a perfect getaway for nature lovers and adventure seekers.",
        "The name Doodhpathri has an interesting legend behind it. It is said that the famous Sufi saint Sheikh Nooruddin Noorani once passed through this valley while searching for water. Unable to find any, he prayed, and miraculously, milk started flowing from the meadows. Hence, the place came to be known as Doodhpathri ('Doodh' meaning milk and 'Pathri' meaning valley). Another theory suggests that the name comes from the milky-white appearance of the water flowing through the streams, which is caused by the rich mineral content.",
        "Doodhpathri is situated at an altitude of around 8,957 feet (2,730 meters) above sea level. The valley is covered with vast stretches of green meadows, dotted with vibrant wildflowers during spring and summer. The Tangsar and Shaliganga rivers flow through the region, adding to its charm.",
        "One of the most captivating features of Doodhpathri is its undulating grasslands, which resemble the famous meadows of New Zealand and Switzerland. The snow-covered peaks of the Pir Panjal range provide a stunning backdrop, making it a photographer’s delight.",
        "Doodhpathri is a paradise for trekkers. The Tosa Maidan trek, which starts from Doodhpathri, is a popular route that takes adventurers through dense forests, alpine meadows, and high-altitude passes.",
        "Visitors can explore the meadows on horseback, a common mode of transport in the region. Local guides offer horse rides to key viewpoints, allowing tourists to soak in the breathtaking scenery.",
        "The vast open meadows are perfect for picnics and camping. Many tourists bring along tents and spend nights under the starry sky, surrounded by nature’s tranquility.",
      ],
    },
  ],
  inclusions: [
    "Accommodation in selected hotels/houseboats.",
    "Daily breakfast and dinner.",
    "All transfers and sightseeing by private vehicle.",
    "Shikara ride on Dal Lake.",
    "Gondola ride in Gulmarg.",
    "Entrance fees to Mughal Gardens, Shankaracharya Temple, and other sites mentioned in the itinerary.",
    "Experienced local guide for sightseeing tours.",
  ],
  exclusions: [
    "Airfare or train tickets to and from Srinagar.",
    "Personal expenses such as laundry, phone calls, and tips.",
    "Any additional activities or excursions not mentioned in the itinerary.",
    "Travel insurance.",
    "Any meals not specified in the inclusions.",
    "Entry fees to additional tourist spots and monuments not included in the package.",
    "Optional activities like pony rides, skiing, or fishing.",
  ],
  experience: {
    label:
      "With this meticulously crafted package that ensures comfort, adventure, and an unforgettable journey through one of the most beautiful places on earth.",
    options: [
      "Prices are subject to change based on availability and season",
      "The itinerary is flexible and can be customized as per the client’s preferences",
      "It's recommended to carry warm clothing, especially for Gulmarg",
    ],
  },
};
