const nicknameMap = {
    "Karpetie": "Caterpie",
    "Gelaton": "Jolteon",
    "Pantoja": "Ponyta",
    "Goblet": "Golbat",
    "Clarify": "Clefairy",
    "Treinatar": "Tyranitar",
    "Flappervis": "Magikarp",
    "Meauto": "Mewtwo",
    "Meeauto": "Meowth",
    "Suusenijn": "Suicune",
    "Vulplem": "Vileplume",
    "Centrie": "Sentret",
    "Merrock": "Murkrow",
    "Mydrowsees": "Misdreavus",
    "Ms. Draufhaus": "Misdreavus",
    "Rendon": "Rhydon",
    "Skijter": "Scyther",
    "Pinnekol": "Pineco",
    "Billieboem": "Swampert",
    "Knoflookhoofd": "Meditite",
    "Chansey": "Mankey",
    "Tropolus": "Tropius",
    "Snibbut": "Snubbull",
    "Miewel": "Mawile",
    "Drieloef": "Drifloon",
    "Freezebreeze": "Feebas",
    "Empoi": "Aipom",
    "Petoncha": "Poochyena",
    "Komman": "Combee",
    "Mieno": "Minun",
    "Nidokan": "Nincada",
    "Nina Kanda": "Nincada",
    "Yolovis": "Finneon",
    "Krenatina": "Cresselia",
    "Karvenijn": "Carnivine",
    "Oeswaldius": "Oshawott",
    "Glojurk": "Golurk",
    "Magnetic": "Manectric",
    "Ludakris": "Lucario",
    "Rijolie": "Riolu",
    "Claimer": "Clamperl",
    "Duwik": "Dewgong",
    "Gardeman": "Gallade",
    "Goleonne": "Gallade",
    "Tsjeerieboe": "Cherubi",
    "Tsjuberry": "Cherubi",
    "Rennesollesius": "Reuniclus",
    "Condoonpokemon": "Reuniclus",
    "Malliewal": "Mawile",
    "Deurspees": "Dunsparce",
    "Fennion": "Phanpy",
    "Glimwow": "Glameow",
    "Gingler": "Gligar",
    "Panini": "Happiny",
    "Blazin": "Blitzle",
    "Salsa": "Salamence",
    "Glee-skin": "Glaceon",
    "Glaziken": "Glaceon",
    "Pelletiel": "Petilil",
    "Rikuwaka": "Darumaka",
    "Makohito": "Darumaka",
    "Macaroni": "Darumaka",
    "Drilbil": "Beedrill",
    "Roundou": "Houndoom",
    "Togepik": "Torchic",
    "Wieffel": "Weavile",
    "Kannavaro": "Carvanha",
    "Comedy": "Cottonee",
    "Alakabam": "Kadabra",
    "Elektratip": "Elekid",
    "Lolita": "Litleo",
    "Karim": "Kyurem",
    "Tsjakketsjika": "Chinchou",
    "Noo beet": "Noibat",
    "Kaboetsjoe": "Cubchoo",
    "Drownie": "Grumpig",
    "Tortwig": "Torchic",
    "Erasing": "Ursaring",
    "Banana berry": "Bunnelby",
    "Axew": "Uxie",
    "Fluxie": "Azelf",
    "Peeroedjie": "Pachirisu",
    "Loepion": "Lopunny",
    "Metametric": "Manectric",
    "Tagiatilla": "Tangela",
    "Emparidos": "Ampharos",
    "Klieko": "Klefki",
    "Gehaktballenrups": "Falinks",
    "Ponchata": "Ponyta",
    "Skittyskattyskotty": "Glameow",
    "Martini": "Mantine",
    "Arkeneus": "Arceus",
    "Kounton": "Cottonee",
    "Wumblebee": "Weepinbell",
    "Mekento": "Maractus",
    "Karkeput": "Camerupt",
    "Parretje pichu": "Pachirisu",
    "Flattu": "Floette",
    "Tipsilon": "Typhlosion",
    "Salmonetta": "Zamazenta",
    "Faloreon": "Furfrou",
    "Grongulair": "Croagunk",
    "Acrom": "Arbok",
    "Sparigato": "Sprigatito",
    "Crymeta": "Cryogonal",
    "Carry-Ann": "Kecleon",
    "Kieriem": "Kyurem",
    "Doega Diggle": "Shroodle",
    "Valentine": "Vanillite",
    "Crocodile": "Cryogonal",
    "Al Dente": "Dedenne",
    "Carnivor": "Cinderace",
    "Trinklet":"Tinkatink",
    "Fennie":"Phanpy",
    "Skonnieskonnieskoelie":"Spritzee",
    "Zygerion":"Zacian",
    "Kimbaktoe":"Kingambit",
    "Basilicum":"Basculin",
    "Diesteenhoeheetdieookalweer":"Stonjourner",
    "Tsjabot":"Chatot",
    "Sketijl":"Sceptile",
    "Espeon":"Umbreon",
    "Chlamydion":"Kecleon",
    "Toetsoe":"Toedscool",
    "Kill Yo":"Keldeo",
};

const similarOptions = {
    "Karpetie": ["Karrablast", "Venipede", "Trapinch"],
    "Gelaton": ["Jellicent", "Duosion", "Goomy"],
    "Pantoja": ["Panpour", "Pancham", "Pangoro"],
    "Goblet": ["Golem", "Gothita", "Gabite"],
    "Clarify": ["Chansey", "Clefable", "Jigglypuff"],
    "Treinatar": ["Trevenant", "Terrakion", "Tropius"],
    "Flappervis": ["Lumineon", "Flapple", "Goldeen"],
    "Meauto": ["Meowth", "Metapod", "Revavroom"],
    "Meeauto": ["Mewtwo", "Varoom", "Meloetta"],
    "Suusenijn": ["Surskit", "Sylveon", "Sudowoodo"],
    "Vulplem": ["Vulpix", "Volbeat", "Venomoth"],
    "Centrie": ["Spritzee", "Swirlix", "Serperior"],
    "Merrock": ["Marowak", "Meditite", "Magcargo"],
    "Mydrowsees": ["Drowzee", "Munna", "Mawile"],
    "Ms. Draufhaus": ["Mismagius", "Mawile", "Medicham"],
    "Rendon": ["Aggron", "Druddigon", "Registeel"],
    "Skijter": ["Skorupi", "Skitty", "Scrafty"],
    "Pinnekol": ["Piplup", "Pignite", "Pinsir"],
    "Billieboem": ["Bellossom", "Beheeyem", "Bibarel"],
    "Knoflookhoofd": ["Koffing", "Mienfoo", "Golett"],
    "Chansey": ["Blissey", "Machop", "Chansey"],
    "Tropolus": ["Tornadus", "Exeggutor", "Torkoal"],
    "Snibbut": ["Snivy", "Snorlax", "Snorunt"],
    "Miewel": ["Meowth", "Mienfoo", "Meloetta"],
    "Drieloef": ["Drifblim", "Drowzee", "Drapion"],
    "Freezebreeze": ["Froslass", "Frosmoth", "Fletchinder"],
    "Empoi": ["Ambipom", "Emolga", "Electabuzz"],
    "Petoncha": ["Porygon2", "Petilil", "Pancham"],
    "Komman": ["Corphish", "Komala", "Kommo-o"],
    "Mieno": ["Meowth", "Mienfoo", "Mime-Jr"],
    "Nidokan": ["Ninjask", "Nidoqueen", "Nidoking"],
    "Nina Kanda": ["Ninjask", "Nidoran-m", "Nidorina"],
    "Yolovis": ["Magikarp", "Feebas", "Basculin"],
    "Krenatina": ["Kricketune", "Krookodile", "Giratina-Altered"],
    "Karvenijn": ["Karrablast", "Venonat", "Arcanine"],
    "Oeswaldius": ["Octillery", "Tauros", "Omastar"],
    "Glojurk": ["Golett", "Gloom", "Golisopod"],
    "Magnetic": ["Magneton", "Magnemite", "Magmar"],
    "Ludakris": ["Ludicolo", "Lurantis", "Luxray"],
    "Rijolie": ["Rillaboom", "Roserade", "Rapidash"],
    "Claimer": ["Clauncher", "Claydol", "Clefable"],
    "Duwik": ["Dugtrio", "Druddigon", "Duraludon"],
    "Gardeman": ["Gardevoir", "Garbodor", "Garchomp"],
    "Goleonne": ["Golem", "Golbat", "Golurk"],
    "Tsjeerieboe": ["Cherrim", "Chespin", "Tropius"],
    "Tsjuberry": ["Cherrim", "Applin", "Chikorita"],
    "Rennesollesius": ["Registeel", "Regice", "Regigigas"],
    "Condoonpokemon": ["Wiglett", "Drifloon", "Diglett"],
    "Malliewal": ["Magikarp", "Mantine", "Marill"],
    "Deurspees": ["Dusclops", "Dusknoir", "Dugtrio"],
    "Fennion": ["Finneon", "Fennekin", "Flareon"],
    "Glimwow": ["Glimmora", "Gliscor", "Gligar"],
    "Gingler": ["Kingler", "Gengar", "Gible"],
    "Panini": ["Pansage", "Fidough", "Dratini"],
    "Blazin": ["Blaziken", "Blacephalon", "Emboar"],
    "Salsa": ["Salandit", "Sableye", "Salazzle"],
    "Glee-skin": ["Gligar", "Gloom", "Golisopod"],
    "Glaziken": ["Blaziken", "Garchomp", "Greninja"],
    "Pelletiel": ["Lilligant", "Pikipek", "Pancham"],
    "Rikuwaka": ["Rillaboom", "Riolu", "Roggenrola"],
    "Makohito": ["Makuhita", "Machop", "Machoke"],
    "Macaroni": ["Magmar", "Marowak", "Machop"],
    "Drilbil": ["Drilbur", "Drapion", "Durant"],
    "Roundou": ["Houndour", "Roggenrola", "Rhydon"],
    "Togepik": ["Togepi", "Togekiss", "Togetic"],
    "Wieffel": ["Weezing", "Wigglytuff", "Whimsicott"],
    "Kannavaro": ["Camerupt", "Kangaskhan", "Carnivine"],
    "Comedy": ["Combee", "Combusken", "Cobalion"],
    "Alakabam": ["Alakazam", "Abra", "Gallade"],
    "Elektratip": ["Electabuzz", "Electivire", "Electrike"],
    "Lolita": ["Lopunny", "Lilligant", "Gothita"],
    "Karim": ["Krookodile", "Kabutops", "Keldeo"],
    "Tsjakketsjika": ["Chatot", "Chandelure", "Chikorita"],
    "Noo beet": ["Buzzwole", "Grubbin", "Shedinja"],
    "Kaboetsjoe": ["Kabuto", "Kabutops", "Snover"],
    "Drownie": ["Groudon", "Gulpin", "Guzzlord"],
    "Tortwig": ["Turtwig", "Togetic", "Togepi"],
    "Erasing": ["Ursaluna", "Umbreon", "Urshifu-single-strike"],
    "Banana berry": ["Bounsweet", "Banette", "Cherubi"],
    "Axew": ["Axew", "Azumarill", "Azelf"],
    "Fluxie": ["Uxie", "Mesprit", "Luxio"],
    "Peeroedjie": ["Emolga", "Plusle", "Pidgey"],
    "Loepion": ["Lucario", "Leafeon", "Leavanny"],
    "Metametric": ["Metagross", "Metapod", "Metang"],
    "Tagiatilla": ["Tangrowth", "Tatsugiri", "Talonflame"],
    "Emparidos": ["Empoleon", "Eelektross", "Ariados"],
    "Klieko": ["Klink", "Garbodor", "Trubbish"],
    "Gehaktballenrups": ["Caterpie", "Weedle", "Wurmple"],
    "Ponchata": ["Pancham", "Panpour", "Pansear"],
    "Skittyskattyskotty": ["Skitty", "Meowth", "Scatterbug"],
    "Martini": ["Marill", "Dratini", "Marshtomp"],
    "Arkeneus": ["Arcanine", "Arbok", "Probopass"],
    "Kounton": ["Kommo-o", "Combee", "Cobalion"],
    "Wumblebee": ["Wurmple", "Beedrill", "Bunnelby"],
    "Mekento": ["Metang", "Mienfoo", "Meditite"],
    "Karkeput": ["Carkol", "Carracosta", "Carvanha"],
    "Parretje pichu": ["Pichu", "Pikachu", "Morpeko-full-belly"],
    "Flattu": ["Flabebe", "Xatu", "Flapple"],
    "Tipsilon": ["Tepig", "Togedemaru", "Porygon"],
    "Salmonetta": ["Samurott", "Salamence", "Salazzle"],
    "Faloreon": ["Flareon", "Leafeon", "Glaceon"],
    "Grongulair": ["Gengar", "Greninja", "Golurk"],
    "Acrom": ["Aegislash", "Aggron", "Accelgor"],
    "Sparigato": ["Shinx", "Sneasler", "Spritzee"],
    "Crymeta": ["Metagross", "Glalie", "Regice"],
    "Carry-Ann": ["Camerupt", "Carracosta", "Carnivine"],
    "Kieriem": ["Krookodile", "Keldeo", "Kirlia"],
    "Doega Diggle": ["Dugtrio", "Diglett", "Drilbur"],
    "Valentine": ["Enamorus-Incarnate", "Venonat", "Vespiquen"],
    "Crocodile": ["Krokorok", "Croconaw", "Krookodile"],
    "Al Dente": ["Audino", "Dunsparce", "Alcremie"],
    "Carnivor": ["Carnivine", "Camerupt", "Cacturne"],
    "Trinklet":["Tinkaton", "Ducklett", "Chingling"],
    "Fennie":["Fennekin", "Finneon", "Florges"],
    "Skonnieskonnieskoelie":["Skitty", "Scorbunny", "Skiddo"],
    "Zygerion":["Zygarde", "Zekrom", "Hydreigon"],
    "Kimbaktoe":["Throh", "Makuhita", "Conkeldurr"],
    "Basilicum":["Lilligant", "Bellossom", "Bellsprout"],
    "Diesteenhoeheetdieookalweer":["Nosepass", "Graveler", "Roggenrola"],
    "Tsjabot":["Kabuto", "Pawniard", "Golett"],
    "Sketijl":["Scrafty", "Grovyle", "Scyther"],
    "Espeon":["Espeon", "Sylveon", "Glaceon"],
    "Chlamydion":["Sigilyph", "Hydreigon", "Eelektrik"],
    "Toetsoe":["Totodile", "Kubfu", "Mienfoo"],
    "Kill Yo":["Bisharp", "Kommo-o", "Hakamo-o"],
};

let usedNicknames = [];
let currentNickname = "";
let correctIndex = 0;
let score = 0;
const maxQuestions = 10;


const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

function getPokemonImageURL(name) {
    const formatted = name.toLowerCase();
    return `https://img.pokemondb.net/artwork/large/${formatted}.jpg`;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    optionsEl.innerHTML = "";

    if (usedNicknames.length === maxQuestions) {
    questionEl.innerText = "Quiz Complete! 🎉";
    return;
    }

    let remaining = Object.keys(nicknameMap).filter(n => !usedNicknames.includes(n));
    shuffle(remaining);
    currentNickname = remaining[0];
    usedNicknames.push(currentNickname);

    const correctName = nicknameMap[currentNickname];
    const wrongs = similarOptions[currentNickname] || [];
    const options = [correctName, ...wrongs.slice(0, 3)];
    shuffle(options);
    correctIndex = options.indexOf(correctName);

    questionEl.innerText = `What Pokémon does "${currentNickname}" refer to?`;

    options.forEach((name, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `<img src="${getPokemonImageURL(name)}" alt="${name}">`;
    div.onclick = () => handleOptionClick(i);
    optionsEl.appendChild(div);
    });
}

function handleOptionClick(index) {
    const optionElems = document.querySelectorAll(".option");
    if (index === correctIndex) {
    optionElems[index].classList.add("correct");
    score++;
    } else {
    optionElems[index].classList.add("wrong");
    optionElems[correctIndex].classList.add("correct");
    }
    updateScoreDisplay();
    setTimeout(loadQuestion, 1000);
}

function updateScoreDisplay() {
    scoreEl.innerText = `Score: ${score}`;
}


function restartQuiz() {
    usedNicknames = [];
    score = 0;
    updateScoreDisplay();
    loadQuestion();
}


restartBtn.addEventListener("click", restartQuiz);

// Start
restartQuiz();