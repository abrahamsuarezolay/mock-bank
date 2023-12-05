import { useState, useContext, useEffect } from "react";

const useError = () => {

    const [errorInput, setErrorInput] = useState({
        display: false,
        message: ""
    });

    return { errorInput, setErrorInput}

}

export default useError;