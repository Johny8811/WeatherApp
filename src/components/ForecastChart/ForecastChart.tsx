import React, { useMemo } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, Legend } from "recharts";

import { useForecastData } from '../../state/forecast/ForecastDataProvider';

import './ForecastChart.css';

export const ForecastChart = () => {
  const { forecastData } = useForecastData();
  const chartData = useMemo(() => {
    return forecastData?.daily.map(({ dt, temp }) => ({
      dt: new Date(Number(`${dt}000`)).toLocaleDateString(),
      max: temp.max,
      min: temp.min,
      day: temp.day,
      night: temp.night
    }))
  }, [forecastData]);

  return (
    <div className="forecastChart">
      {chartData ? (
        <LineChart
          width={600}
          height={400}
          data={chartData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="dt"/>
          <Legend />
          <Tooltip/>
          <CartesianGrid stroke="#f5f5f5"/>
          <Line type="monotone" dataKey="max" stroke="#ff7300" yAxisId={0}/>
          <Line type="monotone" dataKey="min" stroke="#081F79FF" yAxisId={1}/>
        </LineChart>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
