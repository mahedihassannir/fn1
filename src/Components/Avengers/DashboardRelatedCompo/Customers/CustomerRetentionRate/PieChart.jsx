//AVENGERS
//TOMA
//Customer Retention  section

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChart = () => {
  const dollarArray = [
    {
        "id": 1,
        "year": 31,
        "dollarValue": 149
    },
    {
        "id": 2,
        "year": 45,
        "dollarValue": 217
    },
    {
        "id": 3,
        "year": 59,
        "dollarValue": 13
    },
    {
        "id": 4,
        "year": 50,
        "dollarValue": 266
    },
    {
        "id": 5,
        "year": 25,
        "dollarValue": 273
    },
    {
        "id": 6,
        "year": 38,
        "dollarValue": 30
    },
    {
        "id": 7,
        "year": 23,
        "dollarValue": 27
    },
    {
        "id": 8,
        "year": 61,
        "dollarValue": 127
    },
    {
        "id": 9,
        "year": 42,
        "dollarValue": 58
    },
    {
        "id": 10,
        "year": 64,
        "dollarValue": 296
    },
    {
        "id": 11,
        "year": 65,
        "dollarValue": 296
    },
    {
        "id": 12,
        "year": 69,
        "dollarValue": 296
    },
    {
        "id": 13,
        "year": 90,
        "dollarValue": 296
    }
]
  return (
    <div>
         <ResponsiveContainer width="100%" height={300}>
                <BarChart
                   
                    data={dollarArray}
                >
                    <Bar dataKey="dollarValue" stackId="a" fill="#0000FF" />
                    <Bar dataKey="year" stackId="a" fill="#8884d8" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
                </ResponsiveContainer>
    </div>
  );
};

export default PieChart;