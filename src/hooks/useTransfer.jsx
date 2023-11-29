import { useState } from "react";
import { findAccountById } from "../service/accountsService";


const useTransfer = () => {

    const [transfer, setTransfer] = useState({
        senderAccount: "",
        receiverEmail: "",
        receiverAccount: "",
        amount: 0
    })

    const handleChange = (e) => {
        setTransfer({
            ...transfer,
            [e.target.name]: e.target.value
        })
    }

    const handleTransfer = (e) => {
        e.preventDefault()
        const receiverAccountData = findAccountByUserAndId(transfer.receiverEmail, transfer.receiverAccount);

        //WE GOT THE RECEIVER DATA.
        
    }

    return { handleChange, handleTransfer }

}

export default useTransfer;