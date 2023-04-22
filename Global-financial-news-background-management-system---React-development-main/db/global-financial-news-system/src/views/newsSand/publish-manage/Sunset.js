import { Button } from 'antd'
import NewsPublish from '../../../components/publish-manage/NewsPublish'
import usePublish from '../../../components/publish-manage/usePulish'


export default function Sunset() {

  const { dataSource,handleDelete } = usePublish(3)

  return (
    <div>
      <NewsPublish dataSource={dataSource} 
      button={(id)=><Button danger type="primary" onClick={() => handleDelete(id)}>删除</Button>}></NewsPublish>
    </div>
  )
}
