import React from 'react'
import { Table} from 'antd'


export default function NewsPublish(props) {


  const columns = [
    {
      title: "新闻标题",
      dataIndex: 'title',
      render: (title,item) => {
        return <a href={`#/news-manage/preview/${item.id}`}>{title}</a>
      }
    }, {
      title: "作者",
      dataIndex: 'author',
      render: (author) => {
        return <div style={{color:'#555',fontWeight:'600'}}>{author}</div>
      }
    }, {
      title: "新闻分类",
      dataIndex: 'category',
      render: (category) => {
        return <div style={{color:'purple'}}>{category.title}</div>
      }
    }, {
      title: "操作",
      render: (item) => {
        return <div>
          {props.button(item.id)}
        </div>
      }
    }
  ];



  return (
    <div>
      <Table dataSource={props.dataSource} columns={columns} pagination={{ pageSize: 6 }} rowKey={item => item.id} />
    </div>
  )
}
