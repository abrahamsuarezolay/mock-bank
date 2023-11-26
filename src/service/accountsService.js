import { collection, doc, setDoc, getDocs, onSnapshot, getDoc } from 'firebase/firestore';
import { db, auth } from '../API';
import { accountNumberGenerator } from '../util/numberGenerator';

const usersColl = collection(db, "users")

//Service to add a bank account to an existing user
export const addAccount = async (userEmail, accountName) => {
  const userDocRef = doc(usersColl, userEmail);
  const accountsColl = collection(userDocRef, "accounts");

  const accountNumber = accountNumberGenerator()

  await setDoc(doc(accountsColl, accountNumber), {
    accountNumber: accountNumber,
    accountName: accountName,
    balance: 0
  });
}


export const getAllAccountsData = async (userEmail) => {

  let accounts = [];

  const userDocRef = doc(usersColl, userEmail);
  const accountsCollection = collection(userDocRef, "accounts");

  const accountsDocs = await getDocs(accountsCollection);
  accountsDocs.forEach((doc) => {
    accounts.push(doc.data());
  })

  const unsubscribe = onSnapshot(accountsCollection, (snapshot) => {

    console.log("Update")

    accounts = []
    snapshot.forEach((doc) => {
      accounts.push(doc.data());
    });
  })  

}