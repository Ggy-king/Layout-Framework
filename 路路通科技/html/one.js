var myChart = echarts.init(document.getElementById('box2'))
const colors = ['#5470C6', '#91CC75', '#EE6666'];
option = {
    color: colors,
    title: {
        text: '郑州不同地点实时水位'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '12%',
        bottom: '10%'
    },
    legend: {
        data: ['渗水量', '降水量']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            // prettier-ignore
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '渗水量/小时',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '降雨量/小时',
            position: 'right',
            alignTicks: true,
            // offset: 80,
            axisLine: {
                show: true,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },

    ],
    series: [
        {
            name: '渗水量',
            type: 'bar',
            data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
        },
        {
            name: '降水量',
            type: 'bar',
            yAxisIndex: 1,
            data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
        },

    ]
};
myChart.setOption(option);


var a1 = document.getElementById('a1')
var a2 = document.getElementById('a2')
var a3 = document.getElementById('a3')
a1.classList.add('current')
a1.addEventListener('click', function () {
    a1.classList.add('current')
    a2.classList.remove('current')
    a3.classList.remove('current')
})
a2.addEventListener('click', function () {
    a2.classList.add('current')
    a1.classList.remove('current')
    a3.classList.remove('current')
})
a3.addEventListener('click', function () {
    a3.classList.add('current')
    a2.classList.remove('current')
    a1.classList.remove('current')
})
