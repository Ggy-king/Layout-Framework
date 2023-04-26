import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Card, List, Avatar, Drawer, Tag } from 'antd';
import { PieChartOutlined, EllipsisOutlined } from '@ant-design/icons';
import axios from 'axios';
import * as Echarts from 'echarts'
import _ from 'lodash'

const { Meta } = Card;

export default function Home() {
  const [viewList, setViewList] = useState([])
  const [starList, setStarList] = useState([])
  const [allList, setAllList] = useState([])
  const [open, setOpen] = useState(false)
  const [openMore, setOpenMore] = useState(false)
  const [pieChart, setPieChart] = useState(null)
  const barRef = useRef()
  const pieRef = useRef()

  useEffect(() => {
    axios.get("/news?publishState=2&_expend=category&_sort=view&_order=desc&_limit=6").then(res => {
      setViewList(res.data)

    })
  }, [])

  useEffect(() => {
    axios.get("/news?publishState=2&_expend=category&_sort=star&_order=desc&_limit=6").then(res => {
      setStarList(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get("/news?publishState=2&_expand=category").then(res => {

      renderBarView(_.groupBy(res.data, item => item.category.title))
      setAllList(res.data)
    })

    return () => {
      window.onresize = null
    }

  }, [])

  const renderBarView = (obj) => {
    var myChart = Echarts.init(barRef.current);

    var option = {
      title: {
        text: '环球财经新闻分类统计'
      },
      tooltip: {},
      legend: {
        data: ['数量']
      },
      xAxis: {
        data: Object.keys(obj)
      },
      yAxis: {
        minInterval: 1
      },
      series: [
        {
          name: '数量',
          type: 'bar',
          data: Object.values(obj).map(item => item.length)
        }
      ]
    };
    myChart.setOption(option)

    window.onresize = () => {
      myChart.resize()
    }
  }

  const renderPieView = () => {
    // 数据处理
    var currentList = allList.filter(item => item.author === username)
    var groupObj = _.groupBy(currentList, item => item.category.title)
    var list = []
    for (var i in groupObj) {
      list.push({
        name: i,
        value: groupObj[i].length
      })

    }

    var myChart;
    if (!pieChart) {
      myChart = Echarts.init(pieRef.current)
      setPieChart(myChart)
    } else {
      myChart = pieChart
    }
    var option;

    option = {
      title: {
        text: '您的新闻分类图示',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '发布数量',
          type: 'pie',
          radius: '50%',
          data: list,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    option && myChart.setOption(option);
  }

  const { username, region, role: { roleName } } = JSON.parse(localStorage.getItem("token"))

  return (

    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title={<span style={{ fontWeight: "bold" }}>顶尖时事新闻常览</span>} bordered={true}>
            <List
              size="small"
              dataSource={viewList}
              renderItem={(item) => <List.Item><a href={`#/news-manage/preview/${item.id}`}>{item.title}</a></List.Item>}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<span style={{ fontWeight: "bold" }}>环球新闻大咖最爱</span>} bordered={true}>
            <List
              size="small"
              dataSource={starList}
              renderItem={(item) => <List.Item><a href={`#/news-manage/preview/${item.id}`}>{item.title}</a></List.Item>}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="indexD.gif"
                style={{ width: "100%", height: "100%" }}
              />
            }
            actions={[
              <PieChartOutlined key="setting" onClick={() => {
                async function setOpenA() {
                  setOpen(true)
                }
                async function setOpenB() {
                  await setOpenA()
                  renderPieView()
                }
                setOpenB()

              }} />,
              <EllipsisOutlined key="more" onClick={() => {
                setOpenMore(true)
                // more()
              }} />
            ]}
          >
            <Meta
              avatar={<Avatar src="user.jfif" />}
              title={username}
              description={
                <div>
                  <b>{region ? region : "全球"}</b>
                  <span style={{ paddingLeft: "20px" }}>{roleName}</span>
                </div>
              }
            />
          </Card>
        </Col>
      </Row>

      <Drawer
        width="500px"
        title="我的新闻分类展示"
        placement="right"
        onClose={() => { setOpen(false) }}
        open={open}>

        <div ref={pieRef} style={{
          width: "100%",
          height: "400px",
          marginTop: "30px"
        }}></div>
      </Drawer>

      <Drawer
        height="400px"
        title="高广源的个人简介"
        placement="bottom"
        onClose={() => { setOpenMore(false) }}
        open={openMore}>

        <div>
          <div>
            <Tag color='#cd201f'
             style={{ fontSize: "14px", fontWeight: "700",color:"#fff" }}>下面是图片，不可点击</Tag>
          </div>
          <img alt='我的个人简介' src='more.png' style={{ width: "80%", height: "90%" }} />
        </div>
      </Drawer>

      <div ref={barRef} style={{
        width: "100%",
        height: "400px",
        marginTop: "60px"
      }}></div>
    </div>

  )
}
