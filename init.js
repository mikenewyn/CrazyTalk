const tables = require("./models/crazytalk");

const stories = [
    "I went out with <name> last night. I was pretty <feeling ends in -ed> to see them for the first time, but when I got to <location> I was <feeling>. They were wearing a <noun> and it looked <adverb> <adjective>. I instantly knew that I needed to <verb>. I <verb ending in -ed> out the <noun> and never looked back. That was <number> years ago, and I never <verb ends in -ed> again.",
    "It was a <adjective> and <adjective> night. <name>, a <occupation> for <location>, was on the case. The suspect, <name>, had just stolen <number> <plural noun> from the local zoo, and escaped in their <mode of transport>. Time was of the essence. If they were to be caught, there was only <number above 1> things that mattered: the chief thing being the size of their <noun>.",
    "I am so <adjective> because today is the coding bootcamps first ever Christmas Party! I parked on the <number>-th floor, but I noticed <name> had to park in/at <location>. Everyone brought <noun> to share. These were some of my <adjective> dishes. <name> brought <plural noun>. I thought they were a little <adjective> and I noticed <name> had <number> helpings. <name> wore a <adjective> sweater and <name> wore an ugly <holiday> sweater. Overall it was a <adjective> day.",
    "I walked into the classroom yesterday and saw <name> taking a huge <noun>. The whole place was <adjective>. I couldn't believe how <adjective> the room was. I quickly covered my <body part> and escaped through the <noun>. I made a vow that day: I would catch whoever did it and <verb> them.",
    "It finally came to us: the ultimate idea for a group project: <noun> <verb ends in -ing> <plural noun>. We would get a <letter> for sure! I immediately set out to <location> to do some research. It was there that I found a <adjective> <noun> on top of the <furniture>. I knew this was it. My key to the perfect <noun>. I had to call my group right away to tell them \"<noun> <noun>!\"",
    "\"<verb> my <body part>, pigs!\" <name> yelled as he ran from the cops. \"You'll never <verb> me!\" S/He <verb ends in -ed> the wall and <verb ends in -ed> right on their <body part>. The cops immediately ran up and <verb ends in -ed> them. \"You have the right to remain <noun>. Anything you say or do can be held against you in the court of <noun>.  Do you understand?\" \"The only thing I understand is <plural noun> <verb ends in -ing>\"",
    "I woke up to news of NASA reporting that they had made first contact with an alien species known as the <color> <plural noun>. They said that they come in <noun>, and that their <number>-th order of business would be to <verb> the <plural noun>. I was <verb ends in -ed>. Their <adjective> <body part> was so different from ours. I secretly hoped that they would actually <verb> all of the <plural noun> instead.",
    "Local hero <name>, also commonly referred to as 'The <adjective> <noun>', saved a busload of <plural occupation> yesterday. S/He is reported to have the power to shoot <plural noun> from their <body part>. Those helped told the hero that they felt <adverb ends in -ly> <feeling> to be saved by someone so <adjective>. This has been <name> reporting on the scene for channel <number>, more at <number> o'clock.",
    "Alyssa's favorite movie star, Tom Cruise, came into class today. He was so <verb ends in -ed> to see us. He walked right up to Alyssa and said \"<noun> <verb> my <noun>,\" all while <verb ends in -ing> his <body part>. With that, he took his leave, <verb ends in -ing> off into the sunset.",
    "I would get that rubber duck no matter what. I <verb ending in -ed> into the <location> and immediately asked the closest person if they had a <noun>. They looked <feeling ending in -ed> upon hearing this, and decided to call the police. When the cops came I had to admit to them, \"I was only <verb ending in -ing> it for the duck, I swear!",
    "Jason kicked down the <noun> to my <location>, machete in hand. I immediately tried to reason with him, saying \"I will <verb> anything if you let me <verb>!\" Jason <verb ending in -ed> up to me and raised his machete. I <verb ending in -ed> out the door and got in my <mode of transport>, never looking back.",
    "Crickey, that's one big <noun>! I been <verb ending in -ing> for a few <length of time – plural> now and I can't believe my <body part>!  An' look at the <body part> on that fella! Bigger than the normal ones out in <location>, most definitely! I'm gonna <verb> it and get it on camera so the whole world can see!",
    "They took me from my <furniture> last night and stuffed me in a <mode of transport>. It was so strange. They put me in a room and shined a light right in my <body part>. They started asking me questions, like \"What is your favorite <actor/actress> movie,\" and \"Do you accept <name> into your <body part>? \"After <length of time-plural> of them <verb ending in -ing> me, I finally made a break for it and managed to <verb> to freedom.",
    "\"Everyone, on your <plural body part>!\" the FBI shouted as they <verb ending in -ed> through the door. \"Keep your <plural body part> where we can see them!\" A man stood up in the back and <verb ending in -ed> out a window. The FBI immediately pursued him. As he ran down an alley, he threw a <noun> in their way, shouting \"I am the <noun> of these streets! I will always-\"  He was cut off as the feds began to <verb> him, before placing him in <plural noun>.",
    "\"I'm so <feeling>, this is my first time,\" he said. She put her <body part> to his lips and whispered, \"It's ok, I'm <feeling> too, I just need you to know that I'm secretly a <noun>.\" He nodded, \"I'm okay with that. I <feeling> you so much I will <verb> you no matter what.\" They kissed, and he looked directly into her eyes and said \"<name> <verb ending in -ed> the <noun>, FYI.\"",
    "\"Ok class, this recipe is very <adjective>,\" <name> said as she opened the fridge. \"All you need is <number> cups of <noun>, <number> teaspoons of <noun>, and of course, the most important one, a full <animal>. After putting them all in a <noun>, <verb> them all together and cook for <number> minutes! Then take it out and <verb>!\"",
    "As I was standing on the pier, I saw a <number> foot <noun> slowly rise from the ocean. I couldn't believe my <plural body part>! It was so <adjective>! I <adverb> <verb ending in -ed> my phone and called <name>. \"Are you <verb ending in -ing> this?! We have to <verb>!\" And so we did."
];

//tables.stories.destroy({});
tables.stories.bulkCreate([
    { story: stories[0] },
    { story: stories[1] },
    { story: stories[2] },
    { story: stories[3] },
    { story: stories[4] },
    { story: stories[5] },
    { story: stories[6] },
    { story: stories[7] },
    { story: stories[8] },
    { story: stories[9] },
    { story: stories[10] },
    { story: stories[11] },
    { story: stories[12] },
    { story: stories[13] },
    { story: stories[14] },
    { story: stories[15] },
    { story: stories[16] }
]);