import { collection, doc, setDoc, getDocs, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import { findAccountByUserAndId } from './accountsService';
import { db, auth } from '../API';

const usersColl = collection(db, "users")

export const updateReceiverBalance = async (accountRef, amount) => {

    const accountDoc = await getDoc(accountRef);
    const currentBalance = accountDoc.data().balance;

    await updateDoc(accountRef, {
        balance: currentBalance + parseFloat(amount)
      });

}

export const updateSenderBalance = async (accountRef, amount) => {

    const accountDoc = await getDoc(accountRef);
    const currentBalance = accountDoc.data().balance;

    await updateDoc(accountRef, {
        balance: currentBalance - parseFloat(amount)
      });

}

export const transfer = async (user, transfer) => {

    const receiverAccountRef = await findAccountByUserAndId(transfer.receiverEmail, transfer.receiverAccount);
    const senderAccountRef = await findAccountByUserAndId(user.email, transfer.senderAccount);

    updateReceiverBalance(receiverAccountRef, transfer.amount);
    updateSenderBalance(senderAccountRef, transfer.amount)    
}