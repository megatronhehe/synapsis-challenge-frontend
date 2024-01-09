import UserItem from "@/components/UserItem";
import { UserType } from "@/types/UserType";

async function getUsers() {
	const response = await fetch(`https://gorest.co.in/public/v2/users`, {
		// not in env on purpose
		headers: {
			Authorization: `Bearer 93403ef75511fa7689d5dc3fc06012bf80cb97debeae9aac03209def5065533b`,
		},
	});

	const data = await response.json();
	return data;
}

export default async function users() {
	const users = await getUsers();

	// fake data
	// const users = [
	// 	{
	// 		id: 5902267,
	// 		name: "jambul123",
	// 		email: "jambul123@jambul.lipat",
	// 		gender: "male",
	// 		status: "inactive",
	// 	},
	// 	{
	// 		id: 5902253,
	// 		name: "test123321",
	// 		email: "test123321@davis.example",
	// 		gender: "male",
	// 		status: "inactive",
	// 	},
	// 	{
	// 		id: 5899551,
	// 		name: "Ajeet Kapoor",
	// 		email: "ajeet_kapoor@hartmann.example",
	// 		gender: "male",
	// 		status: "active",
	// 	},
	// 	{
	// 		id: 5899550,
	// 		name: "Aishani Patel",
	// 		email: "aishani_patel@witting.example",
	// 		gender: "male",
	// 		status: "inactive",
	// 	},
	// 	{
	// 		id: 5899548,
	// 		name: "Sushil Achari",
	// 		email: "achari_sushil@mclaughlin-dibbert.test",
	// 		gender: "female",
	// 		status: "inactive",
	// 	},
	// 	{
	// 		id: 5899547,
	// 		name: "Poornima Dubashi",
	// 		email: "poornima_dubashi@hoeger-rolfson.test",
	// 		gender: "female",
	// 		status: "active",
	// 	},
	// 	{
	// 		id: 5899545,
	// 		name: "Satish Gill",
	// 		email: "gill_satish@ferry.test",
	// 		gender: "female",
	// 		status: "active",
	// 	},
	// 	{
	// 		id: 5899544,
	// 		name: "Gov. Bhudeva Marar",
	// 		email: "marar_bhudeva_gov@boyer.example",
	// 		gender: "female",
	// 		status: "active",
	// 	},
	// 	{
	// 		id: 5899543,
	// 		name: "Ghanashyam Menon MD",
	// 		email: "ghanashyam_md_menon@ratke.example",
	// 		gender: "female",
	// 		status: "active",
	// 	},
	// 	{
	// 		id: 5899542,
	// 		name: "Rageswari Sharma IV",
	// 		email: "sharma_iv_rageswari@bosco.example",
	// 		gender: "male",
	// 		status: "inactive",
	// 	},
	// ];

	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4">
				<h1 className="text-xl text-center mb-4">Users Page</h1>
				<ul className="flex flex-col gap-2">
					{users.map((user: UserType) => (
						<UserItem key={user.id} user={user} />
					))}
				</ul>
			</div>
		</main>
	);
}
