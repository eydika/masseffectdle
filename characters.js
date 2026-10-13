const characters = [
    { 
        name: "Kaidan Alenko", 
        gender: "Male", 
        race: "Human",
        affiliation: "Alliance, Spectres", 
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Ashley Williams", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance, Spectres", 
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Garrus Vakarian", 
        gender: "Male", 
        race: "Turian",
        affiliation: "C-Sec, Alliance, Independent, Turian Hierarchy", 
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Liara T'Soni", 
        gender: "Female", 
        race: "Asari",
        affiliation: "Independent, Shadow Broker", 
        year: 2007,
        appearances: 7,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Tali'Zorah", 
        gender: "Female", 
        race: "Quarian",
        affiliation: "Migrant Fleet", 
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Urdnot Wrex", 
        gender: "Male", 
        race: "Krogan",
        affiliation: "Shadow Broker, Clan Urdnot", 
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Richard L. Jenkins", 
        gender: "Male", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Benezia", 
        gender: "Female", 
        race: "Asari",
        affiliation: "Saren Arterius, Reapers", 
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Saren Arterius",
        gender: "Male",
        race: "Turian",
        affiliation: "Spectres, Reapers",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect: Revelation"
    },
    {
        name: "Ka'harial Balak",
        gender: "Male",
        race: "Batarian",
        affiliation: "Batarian Forces",
        year: 2008,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Vidinos",
        gender: "Male",
        race: "Turian",
        affiliation: "Turian Hierarchy",
        year: 2009,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Alestia Iallis",
        gender: "Female",
        race: "Asari",
        affiliation: "Matriarch Benezia, Saren Arterius, Reapers",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Charn",
        gender: "Male",
        race: "Batarian",
        affiliation: "Batarian Forces",
        year: 2008,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Lord Darius",
        gender: "Male",
        race: "Human",
        affiliation: "Independent",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Droyas",
        gender: "Male",
        race: "Krogan",
        affiliation: "Saren Arterius",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Elanos Haliat",
        gender: "Male",
        race: "Turian",
        affiliation: "Independent",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Ethan Jeong",
        gender: "Male",
        race: "Human",
        affiliation: "ExoGeni",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Fist",
        gender: "Male",
        race: "Human",
        affiliation: "Independent",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Rana Thanoptis",
        gender: "Female",
        race: "Asari",
        affiliation: "Civilian",
        year: 2007,
        appearances: 2, 
        debutTitle: "Mass Effect"
    },
    {
        name: "Saleon",
        gender: "Male",
        race: "Salarian",
        affiliation: "Independent",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Shiala",
        gender: "Female",
        race: "Asari",
        affiliation: "Matriarch Benezia, Saren Arterius, Reapers, Civilian",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Ventralis",
        gender: "Male",
        race: "Human",
        affiliation: "Matriarch Benezia",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Charles Pressly",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Greg Adams",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Jeff 'Joker' Moreau",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance, Cerberus",
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    {
        name: "Karin Chakwas",
        gender: "Female",
        race: "Human",
        affiliation: "Alliance, Cerberus",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Charles Saracino",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Chloe Michel",
        gender: "Female",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    {
        name: "Conrad Verner",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "David Anderson",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance, Citadel Council",
        year: 2007,
        appearances: 10,
        debutTitle: "Mass Effect: Revelation"
    },
    {
        name: "Din Korlack",
        gender: "Male",
        race: "Volus",
        affiliation: "Civilian",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Donnel Udina",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian, Citadel Council, Cerberus",
        year: 2007,
        appearances: 5,
        debutTitle: "Mass Effect"
    },
    {
        name: "Emily Wong",
        gender: "Female",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Fai Dan",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Gianna Parasini",
        gender: "Female",
        race: "Human",
        affiliation: "Noveria Internal Affairs",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Hannah Shepard",
        gender: "Female",
        race: "Human",
        affiliation: "Alliance",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Harkin",
        gender: "Male",
        race: "Human",
        affiliation: "C-Sec, Blue Suns",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Helena Blake",
        gender: "Female",
        race: "Human",
        affiliation: "Independent",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Kahoku",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Khalisah al-Jilani",
        gender: "Female",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect"
    },
    {
        name: "Kirrahe",
        gender: "Male",
        race: "Salarian",
        affiliation: "Special Tasks Group",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Nassana Dantius",
        gender: "Female",
        race: "Asari",
        affiliation: "Civilian, Eclipse",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Nihlus Kryik",
        gender: "Male",
        race: "Turian",
        affiliation: "Spectres",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Sha'ira",
        aliases: ["The Consort", "Consort Sha'ira"],
        gender: "Female",
        race: "Asari",
        affiliation: "Civilian",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Steven Hackett",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance",
        year: 2007,
        appearances: 5,
        debutTitle: "Mass Effect"
    },
    {
        name: "Tadius Ahern",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance",
        year: 2009,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Toombs",
        gender: "Male",
        race: "Human",
        affiliation: "Alliance, Independent",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Jahleed",
        gender: "Male",
        race: "Volus",
        affiliation: "Civilian",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Chorban",
        gender: "Male",
        race: "Salarian",
        affiliation: "Civilian",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    {
        name: "Manuel",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Warren",
        gender: "Female",
        race: "Human",
        affiliation: "Civilian",
        year: 2007,
        appearances: 1,
        debutTitle: "Mass Effect"
    },
    {
        name: "Han Olar",
        gender: "Male",
        race: "Volus",
        affiliation: "Civilian",
        year: 2007,
        appearances: 2,
        debutTitle: "Mass Effect"
    },
    { 
        name: "Miranda Lawson", 
        gender: "Female", 
        race: "Human",
        affiliation: "Cerberus, Independent", 
        year: 2009,
        appearances: 5,
        debutTitle: "Mass Effect Galaxy"
    },
    {
        name: "Grunt",
        gender: "Male",
        race: "Krogan",
        affiliation: "Clan Urdnot, Aralakh Company",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Jack",
        gender: "Female",
        race: "Human",
        affiliation: "Independent, Alliance",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Jacob Taylor",
        gender: "Male",
        race: "Human",
        affiliation: "Cerberus, Independent",
        year: 2009,
        appearances: 4,
        debutTitle: "Mass Effect Galaxy"
    },
    {
        name: "Kasumi Goto",
        gender: "Female",
        race: "Human",
        affiliation: "Independent",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Mordin Solus",
        gender: "Male",
        race: "Salarian",
        affiliation: "Special Tasks Group, Independent",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Samara",
        gender: "Female",
        race: "Asari",
        affiliation: "Justicars",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Thane Krios",
        gender: "Male",
        race: "Drell",
        affiliation: "Independent",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Zaeed Massani",
        gender: "Male",
        race: "Human",
        affiliation: "Blue Suns, Independent",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Legion",
        gender: "None",
        race: "Geth",
        affiliation: "Geth",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Wilson",
        gender: "Male",
        race: "Human",
        affiliation: "Cerberus",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Morinth",
        gender: "Female",
        race: "Asari",
        affiliation: "Independent",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
        {
        name: "Amanda Kenson",
        gender: "Female",
        race: "Human",
        affiliation: "Reapers",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
        {
        name: "Aresh Aghdashloo",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian, Blood Pack",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
        {
        name: "Kureck",
        gender: "Male",
        race: "Krogan",
        affiliation: "Blood Pack",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
            {
        name: "Garm",
        gender: "Male",
        race: "Krogan",
        affiliation: "Blood Pack",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Weyrlock Guld",
        gender: "Male",
        race: "Krogan",
        affiliation: "Blood Pack",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Jedore",
        gender: "Female",
        race: "Human",
        affiliation: "Blue Suns",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Jentha",
        gender: "Female",
        race: "Human",
        affiliation: "Blue Suns",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Kuril",
        gender: "Male",
        race: "Turian",
        affiliation: "Blue Suns",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Tarak",
        gender: "Male",
        race: "Batarian",
        affiliation: "Blue Suns",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Vido Santiago",
        gender: "Male",
        race: "Human",
        affiliation: "Blue Suns",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Elnora",
        gender: "Female",
        race: "Asari",
        affiliation: "Eclipse",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Enyala",
        gender: "Female",
        race: "Asari",
        affiliation: "Eclipse",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Jaroth",
        gender: "Male",
        race: "Salarian",
        affiliation: "Eclipse",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Wasea",
        gender: "Female",
        race: "Asari",
        affiliation: "Eclipse",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Gatatog Uvenk",
        gender: "Male",
        race: "Krogan",
        affiliation: "Clan Urdnot",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Urdnot Wreav",
        gender: "Male",
        race: "Krogan",
        affiliation: "Clan Urdnot",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Tela Vasir",
        gender: "Female",
        race: "Asari",
        affiliation: "Spectres, Shadow Broker",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Donovan Hock",
        gender: "Male",
        race: "Human",
        affiliation: "Independent, Eclipse",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Jondum Bau",
        gender: "Male",
        race: "Salarian",
        affiliation: "Spectres, Special Tasks Group",
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    {
        name: "EDI",
        gender: "None",
        race: "Artificial Intelligence",
        affiliation: "Cerberus, Alliance",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Gabriella 'Gabby' Daniels",
        gender: "Female",
        race: "Human",
        affiliation: "Cerberus, Alliance",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Kelly Chambers",
        gender: "Female",
        race: "Human",
        affiliation: "Cerberus, Civilian",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Kenneth 'Ken' Donnelly",
        gender: "Male",
        race: "Human",
        affiliation: "Cerberus, Alliance",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Rupert Gardner",
        gender: "Male",
        race: "Human",
        affiliation: "Cerberus",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Aethyta",
        gender: "Female",
        race: "Asari",
        affiliation: "Civilian",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Anaya",
        gender: "Female",
        race: "Asari",
        affiliation: "Illium Law Enforcement",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Armando-Owen Bailey",
        gender: "Male",
        race: "Human",
        affiliation: "C-Sec",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Gavin Archer",
        gender: "Male",
        race: "Human",
        affiliation: "Cerberus",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Illusive Man",
        aliases: ["The Illusive Man", "Jack Harper"],
        gender: "Male",
        race: "Human",
        affiliation: "Cerberus",
        year: 2008,
        appearances: 10,
        debutTitle: "Mass Effect: Ascension"
    },
    {
        name: "Joram Talid",
        gender: "Male",
        race: "Turian",
        affiliation: "Civilian",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Kolyat Krios",
        gender: "Male",
        race: "Drell",
        affiliation: "Civilian",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Feron",
        gender: "Male",
        race: "Drell",
        affiliation: "Shadow Broker, Alliance",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect: Redemption"
    },
    {
        name: "Lantar Sidonis",
        gender: "Male",
        race: "Turian",
        affiliation: "Independent",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Niftu Cal",
        gender: "Male",
        race: "Volus",
        affiliation: "Civilian",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Pitne For",
        gender: "Male",
        race: "Volus",
        affiliation: "Civilian",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Charr",
        gender: "Male",
        race: "Krogan",
        affiliation: "Civilian",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Jonn Whitson",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Kal'Reegar",
        gender: "Male",
        race: "Quarian",
        affiliation: "Migrant Fleet",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Maelon Heplorn",
        gender: "Male",
        race: "Salarian",
        affiliation: "Special Tasks Group, Independent",
        year: 2010,
        appearances: 3,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Niket",
        gender: "Male",
        race: "Human",
        affiliation: "Civilian",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Okeer",
        gender: "Male",
        race: "Krogan",
        affiliation: "Blue Suns",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Prazza",
        gender: "Male",
        race: "Quarian",
        affiliation: "Migrant Fleet",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Daro'Xen vas Moreh",
        gender: "Female",
        race: "Quarian",
        affiliation: "Migrant Fleet",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Han'Gerrel vas Neema",
        gender: "Male",
        race: "Quarian",
        affiliation: "Migrant Fleet",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Rael'Zorah",
        gender: "Male",
        race: "Quarian",
        affiliation: "Migrant Fleet",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Shala'Raan vas Tonbay",
        gender: "Female",
        race: "Quarian",
        affiliation: "Migrant Fleet",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Zaal'Koris vas Qwib-Qwib",
        gender: "Male",
        race: "Quarian",
        affiliation: "Migrant Fleet",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Ronald Taylor",
        gender: "Male",
        race: "Human",
        affiliation: "Independent",
        year: 2010,
        appearances: 1,
        debutTitle: "Mass Effect 2"
    },
    { 
        name: "Reyes Vidal", 
        gender: "Male", 
        race: "Human",
        affiliation: "Collective", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Pelessaria 'Peebee' B'Sayle", 
        gender: "Female", 
        race: "Asari",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Liam Kosta", 
        gender: "Male", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Cora Harper", 
        gender: "Female", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 2,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Nakmor Drack", 
        gender: "Male", 
        race: "Krogan",
        affiliation: "Independent, Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Vetra Nyx", 
        gender: "Female", 
        race: "Turian",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Alec Ryder", 
        gender: "Male", 
        race: "Human",
        affiliation: "Andromeda Initiative, Pathfinders", 
        year: 2017,
        appearances: 3,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "SAM", 
        gender: "None", 
        race: "Artificial Intelligence",
        affiliation: "Andromeda Initiative, Pathfinders", 
        year: 2017,
        appearances: 2,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Kallo Jath", 
        gender: "Male", 
        race: "Salarian",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Lexi T'Perro", 
        gender: "Female", 
        race: "Asari",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Gil Brodie", 
        gender: "Male", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Suvi Anwar", 
        gender: "Female", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Sidera Nyx", 
        gender: "Female", 
        race: "Turian",
        affiliation: "Civilian", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Jien Garson", 
        gender: "Female", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 4,
        debutTitle: "Mass Effect Andromeda: Nexus Uprising"
    },
    { 
        name: "Foster Addison", 
        gender: "Female", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 2,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Nakmor Kesh", 
        gender: "Female", 
        race: "Krogan",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 2,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Jarun Tann", 
        gender: "Male", 
        race: "Salarian",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 2,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Harry Carlyle", 
        gender: "Male", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Sloane Kelly", 
        gender: "Female", 
        race: "Human",
        affiliation: "Outcasts", 
        year: 2017,
        appearances: 2,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Treeya Nuwani", 
        gender: "Female", 
        race: "Asari",
        affiliation: "Civilian", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect: Paragon Lost"
    },
    { 
        name: "Samantha Traynor", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Jaal Ama Darav", 
        gender: "Male", 
        race: "Angaran",
        affiliation: "Angaran Resistance", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Aria T'Loak",
        gender: "Female",
        race: "Asari",
        affiliation: "Independent",
        year: 2010,
        appearances: 8,
        debutTitle: "Mass Effect: Redemption"
    },
    { 
        name: "James Vega", 
        gender: "Male", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2011,
        appearances: 4,
        debutTitle: "Mass Effect: Conviction"
    },
    { 
        name: "Javik", 
        gender: "Male", 
        race: "Prothean",
        affiliation: "Independent", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Maya Brooks", 
        gender: "Female", 
        race: "Human",
        affiliation: "Cerberus, Independent", 
        year: 2012,
        appearances: 2,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Nyreen Kandros", 
        gender: "Female", 
        race: "Turian",
        affiliation: "Talons", 
        year: 2012,
        appearances: 2,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Kai Leng", 
        gender: "Male", 
        race: "Human",
        affiliation: "Cerberus", 
        year: 2010,
        appearances: 4,
        debutTitle: "Mass Effect: Retribution"
    },
    { 
        name: "Henry Lawson", 
        gender: "Male", 
        race: "Human",
        affiliation: "Civilian", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Oriana Lawson", 
        gender: "Female", 
        race: "Human",
        affiliation: "Civilian", 
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    { 
        name: "Oleg Petrovsky", 
        gender: "Male", 
        race: "Human",
        affiliation: "Cerberus", 
        year: 2011,
        appearances: 2,
        debutTitle: "Mass Effect: Invasion"
    },
    { 
        name: "Bethany Westmoreland", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Sarah Campbell", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Diana Allers", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Steve Cortez", 
        gender: "Male", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Adrien Victus", 
        gender: "Male", 
        race: "Turian",
        affiliation: "Turian Hierarchy", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Ann Bryson", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Coats", 
        gender: "Male", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "David Archer", 
        gender: "Male", 
        race: "Human",
        affiliation: "Civilian", 
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    { 
        name: "Garret Bryson", 
        gender: "Male", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Kahlee Sanders", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2007,
        appearances: 5,
        debutTitle: "Mass Effect: Revelation"
    },
    { 
        name: "Lee Riley", 
        gender: "Female", 
        race: "Human",
        affiliation: "Alliance", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Linron", 
        aliases: ["Dalatrass Linron"],
        gender: "Female", 
        race: "Salarian",
        affiliation: "Salarian Union", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Padok Wiks", 
        gender: "Male", 
        race: "Salarian",
        affiliation: "Special Tasks Group", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Tarquin Victus", 
        gender: "Male", 
        race: "Turian",
        affiliation: "Turian Hierarchy", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Ahz", 
        gender: "Male", 
        race: "Salarian",
        affiliation: "Aria T'Loak", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Bray", 
        gender: "Male", 
        race: "Batarian",
        affiliation: "Aria T'Loak", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Jorgal Thurak", 
        gender: "Male", 
        race: "Krogan",
        affiliation: "Blood Pack", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Urdnot Dagg", 
        gender: "Male", 
        race: "Krogan",
        affiliation: "Clan Urdnot", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Tiran Kandros", 
        gender: "Male", 
        race: "Turian",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 3,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Urdnot Bakara", 
        aliases: ["Eve"],
        gender: "Female", 
        race: "Krogan",
        affiliation: "Clan Urdnot", 
        year: 2012,
        appearances: 1,
        debutTitle: "Mass Effect 3"
    },
    { 
        name: "Evfra de Tershaav", 
        gender: "Male", 
        race: "Angaran",
        affiliation: "Angaran Resistance", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "Kalinda T'Reve", 
        gender: "Female", 
        race: "Asari",
        affiliation: "Andromeda Initiative, Outlaws", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    { 
        name: "August Bradley", 
        gender: "Male", 
        race: "Human",
        affiliation: "Andromeda Initiative", 
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Shepard",
        aliases: ["Commander Shepard", "John Shepard", "Jane Shepard"],
        gender: "Player-selected",
        race: "Human",
        affiliation: "Alliance, Spectres, Cerberus",
        year: 2007,
        appearances: 7,
        debutTitle: "Mass Effect"
    },
    {
        name: "Ryder (Pathfinder)",
        gender: "Player-selected",
        race: "Human",
        affiliation: "Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Ryder",
        gender: "Player-selected",
        race: "Human",
        affiliation: "Andromeda Initiative",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Tevos",
        aliases: ["Councilor Tevos"],
        gender: "Female",
        race: "Asari",
        affiliation: "Citadel Council",
        year: 2007,
        appearances: 4,
        debutTitle: "Mass Effect: Revelation"
    },
    {
        name: "Irissa",
        aliases: ["Councilor Irissa"],
        gender: "Female",
        race: "Asari",
        affiliation: "Citadel Council",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Valern",
        aliases: ["Councilor Valern"],
        gender: "Male",
        race: "Salarian",
        affiliation: "Citadel Council",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Esheel",
        aliases: ["Councilor Esheel", "Dalatrass Esheel"],
        gender: "Female",
        race: "Salarian",
        affiliation: "Citadel Council",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Sparatus",
        aliases: ["Councilor Sparatus"],
        gender: "Male",
        race: "Turian",
        affiliation: "Citadel Council",
        year: 2007,
        appearances: 3,
        debutTitle: "Mass Effect"
    },
    {
        name: "Quentius",
        aliases: ["Councilor Quentius"],
        gender: "Male",
        race: "Turian",
        affiliation: "Citadel Council",
        year: 2010,
        appearances: 2,
        debutTitle: "Mass Effect 2"
    },
    {
        name: "Zevin Raeka",
        aliases: ["Pathfinder Raeka"],
        gender: "Female",
        race: "Salarian",
        affiliation: "Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Lumont Hayjer",
        gender: "Male",
        race: "Salarian",
        affiliation: "Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Ishara",
        aliases: ["Pathfinder Ishara", "Matriarch Ishara"],
        gender: "Female",
        race: "Asari",
        affiliation: "Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Sarissa Theris",
        gender: "Female",
        race: "Asari",
        affiliation: "Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Vederia Damali",
        gender: "Female",
        race: "Asari",
        affiliation: "Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Macen Barro",
        gender: "Male",
        race: "Turian",
        affiliation: "Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    },
    {
        name: "Avitus Rix",
        gender: "Male",
        race: "Turian",
        affiliation: "Spectres, Andromeda Initiative, Pathfinders",
        year: 2017,
        appearances: 1,
        debutTitle: "Mass Effect: Andromeda"
    }
];