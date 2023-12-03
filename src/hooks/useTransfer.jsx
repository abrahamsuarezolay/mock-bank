import { useState, useContext, useEffect } from "react";
import { transfer } from "../service/transferService";
import AuthContext from "../contexts/AuthContext";


const useTransfer = () => {

    const { user } = useContext(AuthContext);

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

    const handleTransfer = async (e) => {
        e.preventDefault()
        transfer(user, transferInfo)
        //WE GOT THE RECEIVER DATA.
        
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

    return { handleChange, handleTransfer }

}

export default useTransfer;