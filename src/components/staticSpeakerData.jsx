import { FaResearchgate } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import Vijay from "../assets/speakerImages/Vijay.png";

const keyNoteSpeakers = [
	{
		title: "Dr. Vijay Gupta",
		subheading: "NSUT, India",
		image: { Vijay },
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=yAc18IoAAAAJ&hl=en",
	},
	{
		title: "Dr. Calogero Vetro",
		subheading: "Università degli Studi di Palermo, Italy",
		image: "<Vetro>",
		research_gate_link: "https://www.researchgate.net/profile/Calogero-Vetro",
		ResearcherID_link: "http://www.researcherid.com/rid/O-6396-2015",
	},
	{
		title: "Dr. V. Vetrivel",
		subheading: "IIT Madras, Chennai, India",
		image: "<Vetrivel>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=F0dtvrQAAAAJ&hl=en&oi=ao",
		research_gate_link:
			"https://www.researchgate.net/profile/Vetrivel-Vellaichamy",
	},
	{
		title: "Dr. R. Vishnu Vardhan",
		subheading: "Pondicherry University, India",
		image: "<Vardhan>",
		g_scholar_link:
			"https://scholar.google.ca/citations?user=GXbjjSEAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Vishnu-R-Vardhan",
	},
	{
		title: "Dr. Andrei Tetenov",
		subheading: "Sobolev Institute of Mathematics, Novosibirsk",
		image: "<Tetenov>",
		g_scholar_link:
			"https://scholar.google.ru/citations?user=pEDsV_QAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Andrey-Tetenov",
	},
	{
		title: "Dr. Kenan Tas",
		subheading: "Usak University, Turkey",
		image: "<Tas>",
		g_scholar_link:
			"https://scholar.google.ca/citations?user=f1ncwg8AAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Tas-K",
	},
	{
		title: "Dr. Tanmoy Som",
		subheading: "IIT BHU, India",
		image: "<Som>",
		g_scholar_link:
			"https://scholar.google.ca/citations?user=f1ncwg8AAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Tanmoy-Som-2",
	},
	{
		title: "Dr. Anurag Shukla",
		subheading: "REC Kannauj, India",
		image: "<Shukla>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=bfyU8aEAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Anurag-Shukla-9",
	},
	{
		title: "Dr. D.R. Sahu",
		subheading: "Banaras Hindu University",
		image: "<Sahu>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=XBTmgyEAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/D-R-Sahu",
	},
	{
		title: "Dr. Rajendra K Ray",
		subheading: "IIT Mandi, India",
		image: "<Ray>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=f5Uern0AAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Rajendra-Ray",
	},
	{
		title: "Dr. Ravi P Agarwal",
		subheading: "Texas A&M University-Kingsville, U.S.A.",
		image: "<Agarwal1.jpg>",
		g_scholar_link: "https://link_needed.com",
		research_gate_link: "https://www.researchgate.net/profile/Ravi-Agarwal",
	},
	{
		title: "Dr. Q. H. Ansari",
		subheading: "AMU Aligarh, India",
		image: "<Ansari.jpg>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=VkMedPgAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Qamrul-Ansari",
	},
	{
		title: "Dr. D. Bahuguna",
		subheading: "IIT Kanpur, India",
		image: "<Bahuguna.png>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=zzWd-FMAAAAJ&hl=en&oi=sra",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. D. Chalishajar",
		subheading: "Virginia Military Institute, USA",
		image: "<Chalishajar.jpg>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=P66Re0YAAAAJ&hl=en",
		research_gate_link:
			"https://www.researchgate.net/profile/Dimplekumar-Chalishajar-2",
	},
	{
		title: "Dr. L. K. Dey",
		subheading: "NIT Durgapur, India",
		image: "<Dey.jpg>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=hSRVoPYAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Lakshmi-Dey",
	},
	{
		title: "Dr. Dhananjay Gopal",
		subheading: "GGV, India",
		image: "<Gopal.jpeg>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=HG67QvAAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Dhananjay-Gopal",
	},
	{
		title: "Dr. S. K. Gupta",
		subheading: "IIT Roorkee, India",
		image: "<Gupta.jpg>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=GS7LEuIAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Shiv-Gupta-22",
	},
	{
		title: "Dr. Pankaj Jain",
		subheading: "SAU, India",
		image: "<Jain.jpg>",
		g_scholar_link: "https://link_needed.com",
		research_gate_link: "https://www.researchgate.net/profile/Pankaj-Jain-6",
	},
	{
		title: "Dr. Ram Jiwari",
		subheading: "IIT Roorkee, India",
		image: "<Jiwari.jpg>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=lSX3PyIAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Dr-Ram-Jiwari",
	},
	{
		title: "Dr. Samarjit Kar",
		subheading: "NIT Durgapur, India",
		image: "<Kar.jpg>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=PgGRcpgAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Samarjit-Kar",
	},
	{
		title: "Dr. Erdal Karapinar",
		subheading: "Cankaya University Turkey",
		image: "<Karapinar.jpeg>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=PRXAyLcAAAAJ&hl=en",
		research_gate_link: "https://www.researchgate.net/profile/Erdal-Karapinar",
	},
	{
		title: "Dr. Yasunori Kimura",
		subheading: "Toho University, Japan",
		image: "<Kimura.jpg>",
		g_scholar_link: "https://link_needed.com",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. Geetanjali Panda",
		subheading: "IIT Kharagpur, India",
		image: "<Panda.png>",
		g_scholar_link: "https://link_needed.com",
		research_gate_link: "https://www.researchgate.net/profile/Geetanjali-Panda",
	},
	{
		title: "Dr. Pratima Panigrahi",
		subheading: "KIIT Bhubaneswar, India",
		image: "<Panigrahi.jpg>",
		g_scholar_link: "https://link_needed.com",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. P. P. Patra",
		subheading: "Jadavpur University, India",
		image: "<Patra.jpg>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=nWEqHiYAAAAJ&hl=en",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. V. Parvathaneni",
		subheading: "VIT, India",
		image: "<Parvathaneni.jpg>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=G_pV-GgAAAAJ&hl=en",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. R. Raut",
		subheading: "IIT Bhilai, India",
		image: "<Raut.jpg>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=5ARhpaQAAAAJ&hl=en",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. R. Saravanan",
		subheading: "IIT BHU, India",
		image: "<Saravanan.png>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=_jN5HTUAAAAJ&hl=en",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. A. K. Srivastava",
		subheading: "IIT BHU, India",
		image: "<Srivastava.jpg>",
		g_scholar_link:
			"https://scholar.google.com/citations?user=-vPUjloAAAAJ&hl=en",
		research_gate_link: "https://link_needed.com",
	},
	{
		title: "Dr. X. Zhang",
		subheading: "Southeast University, China",
		image: "<Zhang.jpg>",
		g_scholar_link:
			"https://scholar.google.co.in/citations?user=W6MP0osAAAAJ&hl=en",
		research_gate_link: "https://link_needed.com",
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
export const SpeakerCard = ({ name, subheading, image }) => {
	console.log("image:", image);
	return (
		<div className="card card-compact bg-base-200 shadow-lg h-80 hover:bg-primary/80 hover:text-primary-content transition-all duration-200  ">
			<figure>
				<img src={image} alt="" />
			</figure>
			<div className="absolute right-1 top-1 flex  flex-row-reverse gap-1">
				<a
					href="/"
					className=" hover:scale-125 btn btn-primary rounded-xl shadow-md bg-opacity-90"
				>
					<FaGoogleScholar size={22} />
				</a>
				<a
					href="/"
					className="hover:scale-125 btn btn-primary rounded-xl shadow-md bg-opacity-90"
				>
					<FaResearchgate size={22} />
				</a>
			</div>

			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				{subheading && <h3 className="card-text">{subheading}</h3>}
			</div>
		</div>
	);
};
export const PlenarySpeakerCards = plenarySpeakers.map((item) => {
	return (
		<div key={item.name}>
			<SpeakerCard {...item} />
		</div>
	);
});

export const InvitedSpeakerCards = invitedSpeakers.map((item) => {
	return (
		<div key={item.name}>
			<SpeakerCard {...item} />
		</div>
	);
});

export const KeyNoteSpeakerCards = keyNoteSpeakers.map((item) => {
	return (
		<div key={item.name}>
			<SpeakerCard {...item} />
		</div>
	);
});
