import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'io.arkad',
	projectId: 'arkad',
	databaseId: '6695eb7b0015cb0d455e',
	userCollectionId: '6695ebaa001ba863d5eb',
	cashflowCollectionId: '669882f200367f84ebe3',
	tagsCollectionId: '669887d3003c88afd252',
}

const {
	endpoint,
	platform,
	projectId,
	databaseId,
	userCollectionId,
	cashflowCollectionId
} = appwriteConfig

// Init your React Native SDK
const client = new Client();
const avatars = new Avatars(client);
const databases = new Databases(client)

client
	.setEndpoint(endpoint) // Your Appwrite Endpoint
	.setProject(projectId) // Your project ID
	.setPlatform(platform) // Your application ID or bundle ID.
	;

const account = new Account(client);


export const createUser = async (username: string, email: string, password: string) => {
	try {
		const newAccount = await account.create(ID.unique(), email, password, username)

		if (!newAccount) throw Error

		const avatarUrl = avatars.getInitials(username)

		await signIn(email, password)

		const newUser = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			ID.unique(),
			{
				account_id: newAccount.$id,
				email: email,
				username: username,
				avatar: avatarUrl
			}
		)

		return newUser

	} catch (e: any) {
		throw new Error(e)
	}
}

export async function signIn(email: string, password: string) {
	try {

		const session = await account.createEmailPasswordSession(email, password)

	} catch (e: any) {
		throw new Error(e)
	}
}

export const getCurrentUser = async () => {
	try {
		// Getting an account from appwrite client
		const currentAccount = await account.get();

		if (!currentAccount) throw Error

		// Matching the current user with available user in the database
		const currentUser = await databases.listDocuments(
			databaseId,
			userCollectionId,
			[Query.equal('account_id', currentAccount.$id)]
		)

		if (!currentUser) throw Error

		// Return found user as the current user global state
		return currentUser.documents[0]

	} catch (error) {
		console.log(error)
	}
}

export const getAllCashflows = async () => {
	try {
		const cashflows = await databases.listDocuments(
			databaseId,
			cashflowCollectionId
		)

		console.log(cashflows.documents);

		return cashflows.documents

	} catch (error: any) {
		console.log(error.message)
	}
}

export const createCashflow = async () => {
	// try {
	// 	await databases.createDocument(databaseId, cashflowCollectionId, ID.unique(), {
	// 		subject: "",
	// 		value: 0,
	// 		category: "",
	// 		is_paid: false,
	// 		tags: ,
	// 		user: account
	// 	})
	// } catch (error: any) {
	// 	console.log(error);
	// }
}