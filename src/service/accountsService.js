import { collection, doc, setDoc, getDocs, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
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

export const addFunds = async (userEmail, accountNumber, quantity) => {

  const userDocRef = doc(usersColl, userEmail);
  const accountsColl = collection(userDocRef, "accounts");
  const accountRef = doc(accountsColl, accountNumber);
  const accountDoc = await getDoc(accountRef, accountNumber);

  let initialBalance = accountDoc.data().balance;

  await updateDoc(accountRef, {
    balance: initialBalance + parseFloat(quantity)
  });

}

export const withdraw = async (userEmail, accountNumber, quantity) => {

  const userDocRef = doc(usersColl, userEmail);
  const accountsColl = collection(userDocRef, "accounts");
  const accountRef = doc(accountsColl, accountNumber);
  const accountDoc = await getDoc(accountRef, accountNumber);

  let initialBalance = accountDoc.data().balance;

  console.log(initialBalance)

  if (initialBalance < quantity) {
    throw new Error('Insufficient funds in account');
  }

  await updateDoc(accountRef, {
    balance: initialBalance - parseFloat(quantity)
  });
}

export const getTotalSavingsInAllAccounts = (accountsData) => {

  let total = 0;

  accountsData.forEach(account => {
    total += account.balance;
  });

  return total;
}

export const getSavingsInAccount = async (accountRef) => {
  const accountData = await getDoc(accountRef)
  return accountData.data().balance;
  
}

export const findAccountByUserAndId = async (userEmail, accountId) => {

  const userDocRef = doc(usersColl, userEmail);
  const accountsColl = collection(userDocRef, "accounts");
  const accountRef = doc(accountsColl, accountId);
  const accountDoc = await getDoc(accountRef, accountId);

  return accountRef;
};