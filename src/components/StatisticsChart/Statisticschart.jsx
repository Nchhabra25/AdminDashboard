import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
import React from 'react'

const Statisticschart = () => {
  const options = {
    color: ['var(--orange)'],

    toolbox: {
        feature: {
            saveAsImage: {},
        }
    },

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross"
        },
        backgroundColor: "rgba(0, 0, 0, 0.59)",
        borderWidth: 0,
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
        show: false,
    },

    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }
    ],
    yAxis: [
        {
            type: "value",
            splitLine: {
                show: false,
            }
        }
    ],
    series: [
        {
            type: "line",
            smooth: true,
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "rgb(255, 191, 0)",
                    },
                    {
                        offset: 1,
                        color: "#F450D3"
                    }
                ]),
                width: 4
            },
            areaStyle: {
                opacity: .5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                    {
                        offset: 0,
                        color: "#FE4C00"
                    },
                    {
                        offset: 1,
                        color: "rgba(255,144,70,0.1)"
                    }
                ])
            },
            emphasis: {
                focus: "series",
            },
            showSymbol: false,
            data: [30000, 21000, 28000, 22000, 45000, 29000, 18000]
        }
    ]
}
  return (
    <ReactECharts option={options}/>
  )
}

export default Statisticschart
