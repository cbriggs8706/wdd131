// data.js

export const funFacts = [
	"I'm one of the organizers of the annual Burley Family History Expo.",
	"I'm building an app that helps people explore nickname variations in genealogy.",
	'I teach three languages: English, Spanish and Biblical Hebrew.',
]

export const hobbies = [
	// Creative Hobbies
	{ name: 'Family History', mood: 'creative' },
	{ name: 'Designing Games', mood: 'creative' },
	{ name: 'Building Web Apps', mood: 'creative' },
	{ name: 'Photography', mood: 'creative' },
	{ name: 'Creative Writing', mood: 'creative' },
	{ name: 'Cooking New Recipes', mood: 'creative' },
	{ name: 'DIY Projects', mood: 'creative' },
	{ name: 'Calligraphy', mood: 'creative' },
	{ name: 'Graphic Design', mood: 'creative' },
	{ name: 'Scrapbooking', mood: 'creative' },
	{ name: 'Podcasting', mood: 'creative' },
	{ name: 'Video Editing', mood: 'creative' },

	// Relaxing Hobbies
	{ name: 'Reading Historical Newspapers', mood: 'relaxing' },
	{ name: 'Storytelling', mood: 'relaxing' },
	{ name: 'Meditation', mood: 'relaxing' },
	{ name: 'Listening to Podcasts', mood: 'relaxing' },
	{ name: 'Watching Documentaries', mood: 'relaxing' },
	{ name: 'Stargazing', mood: 'relaxing' },
	{ name: 'Journaling', mood: 'relaxing' },
	{ name: 'Playing Music', mood: 'relaxing' },
	{ name: 'Listening to Audiobooks', mood: 'relaxing' },
	{ name: 'Puzzles', mood: 'relaxing' },

	// Prepper/Active Skills
	{ name: 'Homesteading', mood: 'prepper' },
	{ name: 'Making Sourdough', mood: 'prepper' },
	{ name: 'Making Vinegar', mood: 'prepper' },
	{ name: 'Caring for Livestock', mood: 'prepper' },
	{ name: 'Mittleider Gardening', mood: 'prepper' },

	// Learning Hobbies
	{ name: 'Teaching English', mood: 'learning' },
	{ name: 'Hosting Classes', mood: 'learning' },
	{ name: 'Attending Conferences', mood: 'learning' },
	{ name: 'Studying the Scriptures', mood: 'learning' },
	{ name: 'Studying Etymology', mood: 'learning' },
]

export const quizQuestions = [
	{
		question: 'What brings you the most satisfaction?',
		options: [
			{ text: 'Solving a tricky logic bug', type: 'backend' },
			{ text: 'Crafting a beautiful, intuitive layout', type: 'frontend' },
			{ text: 'Planning and launching a complete project', type: 'fullstack' },
		],
	},
	{
		question: 'Choose an activity you’d enjoy:',
		options: [
			{ text: 'Organizing data into meaningful patterns', type: 'backend' },
			{ text: 'Sketching out user experiences', type: 'frontend' },
			{ text: 'Facilitating a collaborative workshop', type: 'fullstack' },
		],
	},
	{
		question: 'What’s your teaching style?',
		options: [
			{ text: 'Explain clearly and step-by-step', type: 'backend' },
			{ text: 'Make it visual and hands-on', type: 'frontend' },
			{ text: 'Guide with open-ended questions', type: 'fullstack' },
		],
	},
]

export const timeline = [
	{
		year: 2006,
		title: 'Diploma',
		description: 'Graduated from Raft River High School with honors',
		category: 'school',
	},
	{
		year: 2006,
		title: 'Eagle Scout',
		description:
			'Earned my Eagle Scout after completing my project with the Valley Vu Cemetery',
		category: 'personal',
	},
	{
		year: 2004,
		title: 'Weekly Mailer',
		description:
			'Began internship at local newspaper based on skills with graphic design',
		category: 'work',
	},
	{
		year: 2006,
		title: 'RRHS Yearbook Editor',
		description:
			'Organized a fantastic team to create a unique Looney Tunes based annual',
		category: 'school',
	},
	{
		year: 2001,
		title: 'Class President',
		description:
			'Our sixth grade held elections and I served as Class President for the next 2 years',
		category: 'school',
	},
	{
		year: 2006,
		title: 'CSI',
		description:
			'Based off the AP classes I took in high school, began studies at the College of Southern Idaho',
		category: 'school',
	},
	{
		year: 2007,
		title: 'BYUI',
		description: 'Transfered to Brigham Young University - Idaho',
		category: 'school',
	},
	{
		year: 2008,
		title: 'Mission',
		description:
			'Served a Spanish speaking mission in Torreón and Durango México.',
		category: 'religion',
	},
	{
		year: 2010,
		title: 'BYUI',
		description: 'Resumed studies at Rexburg',
		category: 'school',
	},
	{
		year: 2016,
		title: 'BYU Ed Week',
		description:
			'Attended my first every Education Week which changed my life and set me on a new trajectory',
		category: 'personal',
	},
	{
		year: 2010,
		title: 'Manager',
		description:
			'Overseen the employees and day-to-day of The College Avenue Deli in Rexburg',
		category: 'work',
	},
	{
		year: 2012,
		title: 'Malta',
		description:
			'Moved back to Malta, dropping out of school for a new job opportunity',
		category: 'personal',
	},
	{
		year: 2014,
		title: 'Wildboyz Hot Tubs',
		description:
			'Began managing the store and the accounting of a local store in Burley',
		category: 'work',
	},
	{
		year: 2015,
		title: 'Conversion',
		description:
			'Had a powerful spiritual experience which set me back on the right priorities and I became truely converted',
		category: 'religion',
	},
	{
		year: 2016,
		title: 'Mt Harrison Heritage Foundation',
		description:
			'Began a volunteer position with the local theatre group. Organized their meetings, created a new website, designed playbills for productions',
		category: 'personal',
	},
	{
		year: 2017,
		title: 'Tarzan',
		description: 'Co-directed my first play with Dennis Byington',
		category: 'personal',
	},
	{
		year: 2014,
		title: 'Twin Falls',
		description:
			'Moved to Twin Falls on a whim for six months to persue a crush and a failed entrepreneural opportunity',
		category: 'personal',
	},
	{
		year: 2019,
		title: 'Marriage',
		description: 'Eloped to the Logan Temple with close family in attendance',
		category: 'religion',
	},
	{
		year: 2021,
		title: 'Divorce',
		description: 'Finalized the papers',
		category: 'personal',
	},
	{
		year: 2023,
		title: 'EnglishConnect',
		description:
			'Started teaching local EnglishConnect 1 classes of around 30 students',
		category: 'personal',
		url: 'https://sites.google.com/view/mc-englishconnect',
	},
	{
		year: 2015,
		title: 'Nifty Marketing',
		description: 'Began position as SEO Specialist and PhotoPie designer',
		category: 'work',
	},
	{
		year: 2018,
		title: 'PhotoPie Backdrops',
		description:
			'Following a prompting, turned in my two weeks at Nifty which led to an offer to purchase the Photo Pie company which I would begin to run from home',
		category: 'work',
		url: 'https://photopiebackdrops.com',
	},
	{
		year: 2017,
		title: 'Chickhaven',
		description:
			'Purchased my grandparents house and began renovations to turn it into a homestead',
		category: 'personal',
	},
	{
		year: 2020,
		title: 'Home Pro Exteriors Inc',
		description:
			'Began working with my brother in custom home construction during the pandemic for a little extra money',
		category: 'work',
	},
	{
		year: 2023,
		title: 'High Desert Milk',
		description:
			'Began a new position in IT, designing a new internal application suite and website redesign',
		category: 'work',
		url: 'https://highdesertmilk.com',
	},
	{
		year: 2021,
		title: 'LearningZion',
		description:
			'Recruited friends for a virtual bookclub of various deep religious and lifechanging books',
		category: 'religion',
		// url:'https://learningzion.com'
	},
	{
		year: 2022,
		title: 'Hebrew',
		description:
			'After studying the Lectures on Faith, decided to learn Hebrew and start teaching it',
		category: 'personal',
	},
	{
		year: 2022,
		title: 'BYUI',
		description:
			'Resumed studies through the Pathway program to finally earn my Bachelors degree',
		category: 'school',
	},
	{
		year: 2018,
		title: 'Stake Temple & Family History Consultant',
		description: 'Accepted my first genealogy calling',
		category: 'religion',
	},
	{
		year: 2021,
		title: 'Ward Temple & Family History Leader',
		description: '',
		category: 'religion',
	},
	{
		year: 2018,
		title: 'Declo Stake Family History Expo',
		description:
			'Together with Jamie Palmer, organized my first large genealogy event',
		category: 'religion',
	},
	{
		year: 2023,
		title: 'Burley Family History Expo',
		description:
			'After a haiatus, jumpstarted and expanded the family history expo to encompass the region',
		category: 'personal',
		url: 'https://www.burleyfamilyhistoryexpo.com/',
	},
	{
		year: 2021,
		title: 'The Book of Nelson',
		description:
			'Printed the first copy of the Book of Nelson for personal study',
		category: 'religion',
	},
	{
		year: 2021,
		title: 'Official Proclamations',
		description:
			'Reformatted and homogenized all of the official church proclamations of this dispensation for better ease of studying',
		category: 'religion',
	},
	{
		year: 2022,
		title: 'Isaiah Institute',
		description: 'Began moderating bookclubs for the Isaiah Institute',
		category: 'religion',
		url: 'https://isiahinstitute.com',
	},
	{
		year: 2021,
		title: 'Latter-day Disciples Podcast',
		description: 'Guested on the podcast to talk about the gift of dreams',
		category: 'religion',
		url: 'https://latterdaydisciples.buzzsprout.com/1895162/11361196-ep-39-dreams-as-signs-with-cameron-briggs',
	},
	{
		year: 2021,
		title: 'Annette on Life',
		description:
			'Guested to talk about my conversion story and same-sex attraction',
		category: 'religion',
		url: 'https://youtu.be/k34UblGCRIA',
	},
	{
		year: 2021,
		title: 'Record Linking Lab',
		description:
			'Discovered the BYU Record Linking Lab projects which again changed the trajectory of my life',
		category: 'religion',
		url: 'https://record-linking-lab.byu.edu',
	},
	{
		year: 2022,
		title: 'The Bridge Forum',
		description:
			'Guested on the monthly forum to discuss the genealogy projects I was doing in Malta, Idaho',
		category: 'personal',
	},
	{
		year: 2022,
		title: 'RootsTech',
		description: 'Taught a couple of virtual classes',
		category: 'personal',
	},
	{
		year: 2023,
		title: 'RootsTech',
		description:
			'Presented for the first time in-person with Joe Price and Richard Miller',
		category: 'personal',
	},
	{
		year: 2023,
		title: 'SourceLinker101',
		description:
			"Launched a website compliation of training videos I'd be compiling for my local consultants",
		category: 'personal',
		url: 'https://sourcelinker101.com',
	},
	// 2025 Web Projects
	{
		year: 2025,
		title: 'Mission Statement Page',
		description: 'A clean and focused introduction to my goals and values.',
		category: 'school',
		url: 'mission/index.html',
	},
	{
		year: 2025,
		title: 'Coolpics Gallery',
		description:
			'An interactive image gallery showcasing layout and animation.',
		category: 'school',
		url: 'coolpics/index.html',
	},
	{
		year: 2025,
		title: 'Personal Blog',
		description: 'A sample blog site using semantic HTML and custom styling.',
		category: 'school',
		url: 'blog/index.html',
	},
	{
		year: 2025,
		title: 'Credit Card Form',
		description:
			'A styled form interface for credit card information with validation.',
		category: 'school',
		url: 'creditcard/index.html',
	},
	{
		year: 2025,
		title: 'User Registration Form',
		description: 'A mock registration page with input types and UX features.',
		category: 'school',
		url: 'register/index.html',
	},
	{
		year: 2025,
		title: 'Responsive Recipes Page',
		description: 'A responsive recipe listing page showing layout flexibility.',
		category: 'school',
		url: 'recipes/index.html',
	},
]
