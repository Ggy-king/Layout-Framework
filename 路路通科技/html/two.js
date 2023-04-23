var myChart = echarts.init(document.getElementById('box1'))
// prettier-ignore
let timeData = [
    '2022/10/18 0:00', '2022/10/18 0:10', '2022/10/18 0:20', '2022/10/18 0:30', '2022/10/18 0:40', '2022/10/18 0:50',
    '2022/10/18 1:00', '2022/10/18 1:10', '2022/10/18 1:20', '2022/10/18 1:30', '2022/10/18 1:40', '2022/10/18 1:50',
    '2022/10/18 2:00', '2022/10/18 2:10', '2022/10/18 2:20', '2022/10/18 2:30', '2022/10/18 2:40', '2022/10/18 2:50',
    '2022/10/18 3:00', '2022/10/18 3:10', '2022/10/18 3:20', '2022/10/18 3:30', '2022/10/18 3:40', '2022/10/18 3:50',
    '2022/10/18 4:00', '2022/10/18 4:10', '2022/10/18 4:20', '2022/10/18 4:30', '2022/10/18 4:40', '2022/10/18 4:50',
    '2022/10/18 5:00', '2022/10/18 5:10', '2022/10/18 5:20', '2022/10/18 5:30', '2022/10/18 5:40', '2022/10/18 5:50',
    '2022/10/18 6:00', '2022/10/18 6:10', '2022/10/18 6:20', '2022/10/18 6:30', '2022/10/18 6:40', '2022/10/18 6:50',
    '2022/10/18 7:00', '2022/10/18 7:10', '2022/10/18 7:20', '2022/10/18 7:30', '2022/10/18 7:40', '2022/10/18 7:50',
    '2022/10/18 8:00', '2022/10/18 8:10', '2022/10/18 8:20', '2022/10/18 8:30', '2022/10/18 8:40', '2022/10/18 8:50',
    '2022/10/18 9:00', '2022/10/18 9:10', '2022/10/18 9:20', '2022/10/18 9:30', '2022/10/18 9:40', '2022/10/18 9:50',
    '2022/10/18 10:00', '2022/10/18 10:10', '2022/10/18 10:20', '2022/10/18 10:30', '2022/10/18 10:40', '2022/10/18 10:50',
    '2022/10/18 11:00', '2022/10/18 11:10', '2022/10/18 11:20', '2022/10/18 11:30', '2022/10/18 11:40', '2022/10/18 11:50',
    '2022/10/18 12:00', '2022/10/18 12:10', '2022/10/18 12:20', '2022/10/18 12:30', '2022/10/18 12:40', '2022/10/18 12:50',
    '2022/10/18 13:00', '2022/10/18 13:10', '2022/10/18 13:20', '2022/10/18 13:30', '2022/10/18 13:40', '2022/10/18 13:50',
    '2022/10/18 14:00', '2022/10/18 14:10', '2022/10/18 14:20', '2022/10/18 14:30', '2022/10/18 14:40', '2022/10/18 14:50',
    '2022/10/18 15:00', '2022/10/18 15:10', '2022/10/18 15:20', '2022/10/18 15:30', '2022/10/18 15:40', '2022/10/18 15:50',
    '2022/10/18 16:00', '2022/10/18 16:10', '2022/10/18 16:20', '2022/10/18 16:30', '2022/10/18 16:40', '2022/10/18 16:50',
    '2022/10/18 17:00', '2022/10/18 17:10', '2022/10/18 17:20', '2022/10/18 17:30', '2022/10/18 17:40', '2022/10/18 17:50',
    '2022/10/18 18:00', '2022/10/18 18:10', '2022/10/18 18:20', '2022/10/18 18:30', '2022/10/18 18:40', '2022/10/18 18:50',
    '2022/10/18 19:00', '2022/10/18 19:10', '2022/10/18 19:20', '2022/10/18 19:30', '2022/10/18 19:40', '2022/10/18 19:50',
    '2022/10/18 20:00', '2022/10/18 20:10', '2022/10/18 20:20', '2022/10/18 20:30', '2022/10/18 20:40', '2022/10/18 20:50',
    '2022/10/18 21:00', '2022/10/18 21:10', '2022/10/18 21:20', '2022/10/18 21:30', '2022/10/18 21:40', '2022/10/18 21:50',
    '2022/10/18 22:00', '2022/10/18 22:10', '2022/10/18 22:20', '2022/10/18 22:30', '2022/10/18 22:40', '2022/10/18 22:50',
    '2022/10/18 23:00', '2022/10/18 23:10', '2022/10/18 23:20', '2022/10/18 23:30', '2022/10/18 23:40', '2022/10/18 23:50',
];
timeData = timeData.map(function (str) {
    return str.replace('2022/', '');
});
option = {
    title: {
        text: '郑州紫荆山路商城路水位'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data: ['地上水位', '地下水位'],
    },
    axisPointer: {
        link: [
            {
                xAxisIndex: 'all'
            }
        ]
    },
    dataZoom: [
        {
            show: true,
            realtime: true,
            handleSize: 20,
            height: 20,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            handleSize: 20,
            height: 20,
            start: 10,
            end: 90,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [
        {
            left: '60',
            right: '40',
            height: '26%'
        },
        {
            left: '60',
            right: '40',
            top: '55%',
            height: '36%'
        }
    ],
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: { onZero: true },
            data: timeData
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            axisLine: { onZero: true },
            data: timeData,
            position: 'top'
        }
    ],
    yAxis: [
        {
            name: '地上渗水量(mm)',
            type: 'value',
            max: 120
        },
        {
            gridIndex: 1,
            name: '地下积水量(mm)',
            type: 'value',
            max: 40,
            
            inverse: true
        }
    ],
    series: [
        {
            name: '地上水位',
            type: 'line',
            symbolSize: 8,
            // prettier-ignore
            data: [
                0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0.1, 0.2,
                0.8, 1.1, 3.4, 5.6, 6.5, 8,
                13, 14, 15, 16, 18, 20,
                20, 22, 28, 26, 28, 29,
                31.1, 32, 33, 36, 38, 39,
                40, 41, 42 ,45, 50, 52,
                53, 55, 56, 56, 59, 62,
                64, 67, 75, 82, 88, 94,
                95, 98, 103, 108, 111, 114,
                115, 112, 111, 107, 105, 103,
                103, 102.4, 102.1, 101.5, 101, 100,
                99, 98, 95.6, 95, 94, 94,
                93.6, 92.5, 91, 90.5, 90.2, 89.9,
                88, 86, 85.4, 83.1, 82.1, 82,
                81.4, 80, 81, 82, 83, 84,
                84.6, 85.6, 87, 88.8, 88.9, 89,
                87.7, 85, 84, 83, 82.5, 80,
                77, 70, 65, 66, 69, 55,
                54, 52, 48, 30, 20, 13,
                13, 5, 2.8, 1.4, 0.8, 0,
                0, 0, 0, 0, 0, 0,
            ]
        },
        {
            name: '地下水位',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            // prettier-ignore
            data: [
                20, 19, 18, 17, 16.4, 17,
                16, 20, 21.5, 22, 24, 26,
                28, 30, 28, 25, 32, 36,
                38, 38.4, 39, 39.5, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                40,40, 40, 40, 40, 40,
                38, 30, 28, 26, 25, 24.3,
            ]
        }
    ]
};
myChart.setOption(option);

//



// 