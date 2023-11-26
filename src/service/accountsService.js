import { collection, doc, setDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../API';
import { accountNumberGenerator } from '../util/numberGenerator';

const usersColl = collection(db, "users")

//Service to add a bank account to an existing user
export const addAccount = async (userEmail, accountName) => {

  console.log(userEmail)

  const userDocRef = doc(usersColl, userEmail);
  const accountsColl = collection(userDocRef, "accounts");

  const accountNumber = accountNumberGenerator()

  await setDoc(doc(accountsColl, accountNumber), {
    accountNumber: accountNumber,
    accountName: accountName,
    balance: 0
  });

  console.log("Created account")
}


export const getAllAccountsData = async (userEmail) => {

  let accounts = [];

  const userDocRef = doc(usersColl, userEmail);
  const querySnapshot = await getDocs(collection(userDocRef, "accounts"));
  querySnapshot.forEach((doc) => {
    accounts.push(doc.data());
  });
  return accounts;
}

export const listenerUpdatesAccounts = async (userEmail) => {
  let accounts = [];

  const userDocRef = doc(usersColl, userEmail);

  const unsubscribe = onSnapshot()

  return accounts;
}