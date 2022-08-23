import ApexCharts from "react-apexcharts";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
`;
export const PieChart = () => {
  return (
    <ApexCharts
      type="donut"
      series={[44, 55, 41, 17]}
      chartOptions={{
        labels: ["Apple", "Mango", "Orange", "Watermelon"],
      }}
      options={{
        plotOptions: {
          pie: {
            size: "20%",
          },
        },
        chart: {
          type: "donut",
          width: "200px",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      }}
    />
  );
};
