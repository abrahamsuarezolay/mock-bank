import { useContext, useEffect, useState } from "react"
import DataContext from "../contexts/DataContext";

const usePieChart = () => { 

    const { accountsData } = useContext(DataContext)
    const [ pieData, setPieData ] = useState([])

    const fillPieData = () =>{

        const a = []

        accountsData.forEach(account => {
            a.push({
                name: account.accountName,
                value: account.balance
            })
            
        });
        setPieData(a);
    }

    useEffect(()=>{
        fillPieData()   
    }, [accountsData])


    return { pieData };

}

export default usePieChart;