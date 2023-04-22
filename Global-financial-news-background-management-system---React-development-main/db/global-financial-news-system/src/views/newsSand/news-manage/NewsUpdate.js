import React, { useEffect, useState, useRef } from 'react'
import { Button, PageHeader, Steps, Form, Input, Select, message, notification } from 'antd'
import axios from 'axios'

import style from './News.module.css'
import NewsEditor from '../../../components/news-manage/NewsEditor'

const { Option } = Select
const { Step } = Steps

export default function NewsUpdate(props) {
  const [current, setCurrent] = useState(0)
  const [categoryList, setCategoryList] = useState([])
  const [fromInfo, setFromInfo] = useState({})
  const [content, setContent] = useState("")
    
  const handleNext = () => {
    if (current === 0) {
      NewsForm.current.validateFields().then(res => {
        setFromInfo(res)
        setCurrent(current + 1)
      }).catch(error => {
        console.log(error)
      })
    } else {
      if (content === "" || content.trim() === "<p></p>") {
        message.error("新闻内容不能为空")
      } else {
        setCurrent(current + 1)
      }
    }
  }
  const handlePrevious = () => {
    setCurrent(current - 1)
  }

  const onFinish = () => {

  }

  const onFinishFailed = () => {

  }

  useEffect(() => {
    axios.get('/categories').then(res => {
      setCategoryList(res.data)
    })

  }, [])

  useEffect(() => {
    axios.get(`news/${props.match.params.id}?_expand=category&_expand=role`).then(
        res => {
            let {title,categoryId,content} = res.data
            NewsForm.current.setFieldsValue({
                title,
                categoryId
            })

            setContent(content)
        }
    )
}, [props.match.params.id])


  const handleSave = (auditState) => {
    axios.patch(`/news/${props.match.params.id}`, {
      ...fromInfo,
      "content": content,
      "auditState": auditState,

    }).then(res => {
      props.history.push(auditState === 0 ? '/news-manage/draft' : '/audit-manage/list')

      notification.info({
        message: "通知",
        description: `您可以到${auditState === 0 ? '草稿箱' : '审核列表'}中查看您已经${auditState === 0 ? '保存' : '提交'}的新闻`,
        placement: 'bottomRight'
      })
    })
  }

const NewsForm = useRef(null)


  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="更新新闻"
        onBack={() => {props.history.goBack()}}
        subTitle="This is a subtitle"
      />
      <Steps current={current}>
        <Step title="基本信息添加与确定" description="新闻标题、新闻分类等" />
        <Step title="新闻内容编写与修改" description="新闻的主体内容" />
        <Step title="提交新闻并等待审核" description="保存到草稿箱或者是提交审核并等待" />
      </Steps>

      <div style={{ marginTop: "50px" }}>
        <div className={current === 0 ? '' : style.active}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            ref={NewsForm}
          >
            <Form.Item
              label="新闻标题"
              name="title"
              rules={[{ required: true, message: '新闻标题是必填项' }]}
              
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="新闻分类"
              name="categoryId"
              rules={[{ required: true, message: '新闻分类是必选项' }]}
            >
              <Select>
                {
                  categoryList.map(item =>
                    <Option value={item.id} key={item.id}>{item.title}
                    </Option>)
                }
              </Select>
            </Form.Item>
          </Form>
        </div>

        <div className={current === 1 ? '' : style.active}>
          <NewsEditor getContent={(value) => {
            setContent(value)
          }} content={content}></NewsEditor>
        </div>

        <div className={current === 2 ? '' : style.active}></div>
      </div>



      <div style={{ marginTop: "40px" }}>
        {
          current === 2 && <span>
            <Button type="primary" onClick={() => handleSave(0)} style={{margin:"10px"}}>保存到草稿箱</Button>
            <Button danger onClick={() => handleSave(1)} style={{margin:"10px"}}>提交审核</Button>

          </span>
        }

        {
          current < 2 && <Button type="primary" onClick={() => handleNext()} style={{margin:"10px"}}>下一步</Button>
        }
        {
          current > 0 && <Button onClick={() => handlePrevious()} style={{margin:"10px"}} >上一步</Button>
        }
      </div>
    </div>
  )
}
