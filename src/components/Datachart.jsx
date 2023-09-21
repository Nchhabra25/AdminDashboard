import React from 'react'
import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
const Datachart = () => {
    const option = {
        
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'Expenses',
            type:'line',
            stack: 'Total',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'Orders',
            type:'line',
            stack: 'Total',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'Profit',
            type:'line',
            stack: 'Total',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
          }
        ]
      };
    
      return <ReactECharts
        option={option}
        style={{ height: 400 }}
      />;
    
}

export default Datachart
