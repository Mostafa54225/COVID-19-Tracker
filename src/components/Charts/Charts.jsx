import React from 'react';
import { Line, Bar } from 'react-chartjs-2'
import styles from './chart.module.css'

const Charts = ({ confirmed, recovered }) => {
  
  if(confirmed && recovered) {
    console.log([confirmed.value])
  }
  const lineChart = ( 
    (confirmed && recovered) ? (
    <Line 
      data={{
        labels: '',
        datasets: [{
          data: [0, confirmed.value],
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true
        }, {
          data: [0, recovered.value],
          label: 'Recovered',
          borderColor: 'green',
          backgroundColor: 'rgba(0,255,0,.5)',
          fill: true
        }]
      }}
    /> ): null
  )
  
  return (
    <div className={styles.container}>
      {lineChart}  
    </div>
  )
}

export default Charts;