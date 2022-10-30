var myChart = echarts.init(document.getElementById('box1'))
function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    };
}
let data = [];
let now = new Date(2018, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = -200;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}
option = {
    title: {
        text: '郑州紫荆山路商城路水位'

    },
    grid: {
        left: '10%',
        bottom: '10%'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' : ' +
                params.value[1]
            );
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value} ml'
        }
    },
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: data
        }
    ]
};
setInterval(function () {
    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }
    myChart.setOption({
        series: [
            {
                data: data
            }
        ]
    });
}, 1000);
myChart.setOption(option);