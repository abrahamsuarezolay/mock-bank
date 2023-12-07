import React, { PureComponent } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from 'recharts';
import { useContext } from "react"
import DataContext from "../../../contexts/DataContext"
import usePieChart from '../../../hooks/usePieChart';


const PieChartComponent = () => {

  const { pieData } = usePieChart();

  console.log(pieData)

  return (
    <>
      <ResponsiveContainer width='100%' height="100%">
      <BarChart data={pieData} barGap={0} width={100} height={200}>
        <XAxis dataKey="name" />
        <YAxis fill='#ffffff'/>
        <Tooltip cursor={{ stroke: 'white', strokeWidth: 1 }}/>
        <Bar dataKey="value" fill="#1F6E8C" activeBar={{ stroke: 'white', strokeWidth: 1.5 }} barSize={80}/>
      </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default PieChartComponent