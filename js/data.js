// data.js

export const funFacts = [
	'I once ran a genealogy-themed escape room — and people loved it!',
	"I'm building an app that helps people explore nickname variations in genealogy.",
	"I've designed interactive ESL lessons inspired by games like Clue and The Price Is Right.",
	'I use JavaScript and Tailwind in real-world projects, including cemetery maps and family reunion games.',
	"I secretly love debugging — it's like solving a mystery.",
]

export const hobbies = [
	{ name: 'Family History', mood: 'creative' },
	{ name: 'Designing Games', mood: 'creative' },
	{ name: 'Reading Historical Newspapers', mood: 'relaxing' },
	{ name: 'Teaching English', mood: 'active' },
	{ name: 'Building Web Apps', mood: 'creative' },
	{ name: 'Storytelling', mood: 'relaxing' },
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
		year: 2014,
		title: 'Discovered Family History',
		description: 'Started exploring my ancestors and got hooked on genealogy.',
		category: 'personal',
	},
	{
		year: 2017,
		title: 'Became an ESL Teacher',
		description: 'Created engaging language lessons for diverse learners.',
		category: 'work',
	},
	{
		year: 2021,
		title: 'Started Web Development Journey',
		description: 'Learned HTML, CSS, and JavaScript to bring ideas to life.',
		category: 'school',
	},
	{
		year: 2023,
		title: 'Launched Genealogy Game Night',
		description:
			'Designed interactive games for family reunions and youth activities.',
		category: 'personal',
	},
	{
		year: 2024,
		title: 'Created Cemetery Mapping Website',
		description: 'Built a real-world web app with Next.js and Tailwind CSS.',
		category: 'work',
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

export const dayOptions = {
	morning: [
		'Write a chapter of a personal history',
		'Code a feature for a genealogy app',
		'Create ESL lesson visuals',
		'Take a quiet morning walk',
	],
	afternoon: [
		'Lead a language game with students',
		'Test a web app with users',
		'Explore old newspapers for stories',
		'Design a new genealogy activity',
	],
	evening: [
		'Read about local history',
		'Sketch a new web layout',
		'Watch a documentary',
		'Plan a podcast episode',
	],
}
