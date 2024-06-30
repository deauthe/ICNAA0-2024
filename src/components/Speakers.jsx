const keyNoteSpeakers = [
	{
		name: "Ravi prakash",
		subheading: "Texas A&M University-Kingsville, U.S.A.",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
	{
		name: "Dr. S. Ponnusamy",
		subheading: "IIT Madras, Chennai, India",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
];
const plenarySpeakers = [
	{
		name: "Dr. Erdal Karapinar",
		subheading: "Cankaya University, Turkey",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
	{
		name: "Dr. D. Bahuguna",
		subheading: "IIT Kanpur, India",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
	{
		name: "Dr. V. Vetrivel",
		subheading: "IIT Madras, Chennai, India",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
	{
		name: "Dr. D. Chalishajar",
		subheading: "Virginia Military Institute, USA",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
	{
		name: "Dr. Yasunori Kimura",
		subheading: "Toho University, Japan",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
	{
		name: "Dr. E. Malkowsky",
		subheading: "University of Giessen, Germany",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
];

const invitedSpeakers = [
	{
		name: "Dr. Q. H. Ansari",
		subheading: "AMU Aligarh, India",
		image: "https://avatars.githubusercontent.com/u/1?v=4",
	},
	{
		name: "Dr. Calogero Vetro",
		subheading: "Università degli Studi di Palermo, Italy",
		image: "https://avatars.githubusercontent.com/u/2?v=4",
	},
	{
		name: "Dr. Kenan Tas",
		subheading: "Usak University, Turkey (Confirmation awaited)",
		image: "https://avatars.githubusercontent.com/u/3?v=4",
	},
	{
		name: "Dr. Pratima Panigrahi",
		subheading: "IIT Kharagpur, India",
		image: "https://avatars.githubusercontent.com/u/4?v=4",
	},
	{
		name: "Dr. Ram Jiwari",
		subheading: "IIT Roorkee, India",
		image: "https://avatars.githubusercontent.com/u/5?v=4",
	},
	{
		name: "Dr. Samarjit Kar",
		subheading: "NIT Durgapur, India",
		image: "https://avatars.githubusercontent.com/u/6?v=4",
	},
	{
		name: "Dr. S.K. Gupta",
		subheading: "IIT Roorkee, India",
		image: "https://avatars.githubusercontent.com/u/7?v=4",
	},
	{
		name: "Dr. Anurag Shukla",
		subheading: "REC Kannauj, India",
		image: "https://avatars.githubusercontent.com/u/8?v=4",
	},
	{
		name: "Dr. L.K. Dey",
		subheading: "NIT Durgapur, India",
		image: "https://avatars.githubusercontent.com/u/9?v=4",
	},
	{
		name: "Dr. R.V. Vardhan",
		subheading: "Pondicherry University, India",
		image: "https://avatars.githubusercontent.com/u/10?v=4",
	},
	{
		name: "Dr. Andrei Tetenov",
		subheading: "Novosibirsk University, Russia",
		image: "https://avatars.githubusercontent.com/u/11?v=4",
	},
	{
		name: "Dr. Rajendra Pant",
		subheading: "University of Johannesburg, South Africa",
		image: "https://avatars.githubusercontent.com/u/12?v=4",
	},
	{
		name: "Dr. Tanmoy Som",
		subheading: "IIT-BHU, India",
		image: "https://avatars.githubusercontent.com/u/13?v=4",
	},
	{
		name: "Dr. D.R. Sahu",
		subheading: "BHU, India",
		image: "https://avatars.githubusercontent.com/u/14?v=4",
	},
	{
		name: "Dr. Dhananjay Gopal",
		subheading: "GGV, India",
		image: "https://avatars.githubusercontent.com/u/15?v=4",
	},
	{
		name: "Dr. B.S. Choudhury",
		subheading: "IIEST, Shibpur, India",
		image: "https://avatars.githubusercontent.com/u/16?v=4",
	},
	{
		name: "Dr. Geetanjali Panda",
		subheading: "IIT Kharagpur, India",
		image: "https://avatars.githubusercontent.com/u/17?v=4",
	},
	{
		name: "Dr. Rajendra K Ray",
		subheading: "IIT Mandi, India",
		image: "https://avatars.githubusercontent.com/u/18?v=4",
	},
	{
		name: "Dr. Vijay Gupta",
		subheading: "NSUT, India",
		image: "https://avatars.githubusercontent.com/u/19?v=4",
	},
	{
		name: "Dr. Pankaj Jain",
		subheading: "SAU, India",
		image: "https://avatars.githubusercontent.com/u/20?v=4",
	},
	{
		name: "Dr. Pratibhamoy Das",
		subheading: "IIT Patna, India",
		image: "https://avatars.githubusercontent.com/u/60120639?v=4",
	},
];

export default function Speakers() {
	return (
		<div
			id="speakers"
			className={
				"py-16 mx-auto items-center flex w-full  flex-col  gap-0 bg-transparent relative overflow-hidden h-full p-4"
			}
		>
			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase">
				key note Speakers
			</div>
			<div className="grid gap-2 md:gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 ">
				{keyNoteSpeakers.map((item) => {
					return (
						<div key={item.name}>
							<SpeakerCard {...item} />
						</div>
					);
				})}
			</div>
			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase">
				plenary Speakers
			</div>
			<div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
				{plenarySpeakers.map((item) => {
					return (
						<div key={item.name}>
							<SpeakerCard {...item} />
						</div>
					);
				})}
			</div>
			<div className="divider opacity-60 lg:text-3xl md:text-2xl text-xl font-bold uppercase ">
				invited Speakers
			</div>
			<div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
				{invitedSpeakers.map((item) => {
					return (
						<div key={item.name}>
							<SpeakerCard {...item} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

const SpeakerCard = ({ name, subheading, image }) => {
	return (
		<div className="card card-compact bg-base-200 shadow-lg h-80 hover:bg-primary/80 hover:text-primary-content transition-all duration-200 cursor-pointer hover:scale-105 ">
			<figure>
				<img src={image} alt="" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				{subheading && <h3 className="card-text">{subheading}</h3>}
			</div>
		</div>
	);
};
