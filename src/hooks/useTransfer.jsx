import { useState, useContext, useEffect } from "react";
import { transfer } from "../service/transferService";
import AuthContext from "../contexts/AuthContext";
import useError from "./useError";


const useTransfer = () => {

    const { user } = useContext(AuthContext);
    const { errorInput, setErrorInput } = useError();


    const [transferInfo, setTransfer] = useState({
        senderAccount: "",
        receiverEmail: "",
        receiverAccount: "",
        amount: 0
    })

    const handleChange = (e) => {
        setTransfer({
            ...transferInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleError = (type) => {

        switch(type){
            case "amountzero":
                setErrorInput({
                    display: true,
                    message: "The amount must be above zero."
                })
                break;
            case "sameAccount":
                setErrorInput({
                display: true,
                message: "The sender and the receiver account are the same."
                })
                break;
             case "accountNonExist":
                 setErrorInput({
                 display: true,
                 message: "There is an error in the receiver information. Please review the information and try again."
                 })
                 break;
        }
    }

    const handleTransfer = async (e) => {
        e.preventDefault()

        if(transferInfo.amount <= 0){
            return handleError("amountZero")
        }else if(transferInfo.receiverAccount == transferInfo.senderAccount){
            return handleError("sameAccount")
        }

        try{
            await transfer(user, transferInfo)
            setErrorInput({display: false})
        }catch(err){
            return handleError("accountNonExist")
            
        }
     
    }

    useEffect(() => {

        console.log("USE EFFECT ")
        // Check if there are initial values in the form (from a previous navigation)
        const form = document.getElementById("transferForm");
        if (form) {
            const formData = new FormData(form);
            const initialTransferInfo = {};
            formData.forEach((value, name) => {
                initialTransferInfo[name] = value;
            });
            setTransfer((prevTransferInfo) => ({
                ...prevTransferInfo,
                ...initialTransferInfo,
            }));
        }
    }, []);

    return { handleChange, handleTransfer, errorInput, setErrorInput }

}

export default useTransfer;