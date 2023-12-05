import { collection, doc, setDoc, getDocs, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import { findAccountByUserAndId } from './accountsService';
import { db, auth } from '../API';

const usersColl = collection(db, "users")

export const updateReceiverBalance = async (accountRef, amount) => {

    try {
        const accountDoc = await getDoc(accountRef);
        const currentBalance = accountDoc.data().balance;

        await updateDoc(accountRef, {
            balance: currentBalance + parseFloat(amount)
        });

    } catch (err) {
        throw err;
    }

}

export const updateSenderBalance = async (accountRef, amount) => {

    try {
        const accountDoc = await getDoc(accountRef);
        const currentBalance = accountDoc.data().balance;

        await updateDoc(accountRef, {
            balance: currentBalance - parseFloat(amount)
        });
    } catch (err) {
        console.log(err)
        throw err;
    }

}

export const transfer = async (user, transfer) => {

    try {
        const receiverAccountRef = await findAccountByUserAndId(transfer.receiverEmail, transfer.receiverAccount);
        const senderAccountRef = await findAccountByUserAndId(user.email, transfer.senderAccount);

        await updateReceiverBalance(receiverAccountRef, transfer.amount);
        await updateSenderBalance(senderAccountRef, transfer.amount)

    } catch (err) {
        throw err;
    }
}