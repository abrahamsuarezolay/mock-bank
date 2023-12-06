import { collection, doc, setDoc, getDocs, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import { findAccountByUserAndId, getSavingsInAccount } from './accountsService';
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

export const verifyEnoughFundsForTransfer = async (accountRef, amount) => {
    const savings = await getSavingsInAccount(accountRef);

    if(savings >= amount){
        return true;
    }else{
        return false;
    }
}

export const transfer = async (user, transfer) => {

    try {
        const senderAccountRef = await findAccountByUserAndId(user.email, transfer.senderAccount);
        const receiverAccountRef = await findAccountByUserAndId(transfer.receiverEmail, transfer.receiverAccount);

        if(await verifyEnoughFundsForTransfer(senderAccountRef, transfer.amount)){
            await updateSenderBalance(senderAccountRef, transfer.amount)
            await updateReceiverBalance(receiverAccountRef, transfer.amount);  
        }else{
            throw new Error('Insufficient funds for the transfer');
        }
    } catch (err) {
        throw err;
    }
}