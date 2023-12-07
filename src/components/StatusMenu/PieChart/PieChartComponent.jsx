import React, { PureComponent } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, LabelList, Label} from 'recharts';
import { useContext } from "react"
import DataContext from "../../../contexts/DataContext"
import usePieChart from '../../../hooks/usePieChart';


const PieChartComponent = () => {

  const { pieData } = usePieChart();

  

  return (
    <>
    {pieData.length == 0 ? (
      <>
      <h6>Accounts status</h6>
      <p>It seems you don't have any accounts yet. Why don't you try to go to the Accounts Menu and create a new one?</p>
      </>
    ) : (
      <>
    <h6>Accounts status</h6>
      <ResponsiveContainer width='100%' height="100%">
      <BarChart data={pieData} barGap={0}>
        <XAxis dataKey="name" stroke="white" />
        <YAxis fill='#ffffff' stroke="white"/>
        <Tooltip cursor={{ stroke: 'white', strokeWidth: 1, fill: "none" }} stroke="none"/>
        <Bar dataKey="value" fill="#1F6E8C" stroke='white' activeBar={{ stroke: 'white', strokeWidth: 2}} barSize={80}>
         <LabelList dataKey="value" position="top" fill='white'/>
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    </>
    )}
    </>
  )
}

export default PieChartComponent