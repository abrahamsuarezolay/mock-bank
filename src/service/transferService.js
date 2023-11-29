import { collection, doc, setDoc, getDocs, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../API';

const usersColl = collection(db, "users")

export const transfer = (user, transferInfo) => {
    
}