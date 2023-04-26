import React, { useEffect, useState } from 'react'
import { Descriptions, PageHeader } from 'antd';
import axios from 'axios';
import moment from 'moment';

export default function NewsPreview(props) {
    const [newsInfo, setNewsInfo] = useState(null)
    const colorList = ["#5b8ff1","orange","green","red"]

    useEffect(() => {
        axios.get(`news/${props.match.params.id}?_expand=category&_expand=role`).then(
            res => { setNewsInfo(res.data) }
        )
    }, [props.match.params.id])

    const auditList = ["未审核","审核中","已通过","未通过"]
    const publishList = ["未发布","待发布","已上线","已下线"]
    return (
        <div>
            {
                newsInfo && <div>
                    <PageHeader
                        onBack={() => window.history.back()}
                        title={newsInfo.title}
                        subTitle={newsInfo.category.title}
                        style={{border:"1px solid #f3f3f3"}}
                    >
                        <Descriptions size="small" column={3}>
                            <Descriptions.Item label="创建者"><span style={{color:'black',fontWeight:'bold'}}>{newsInfo.author}</span></Descriptions.Item>
                            <Descriptions.Item label="创建时间">{moment(newsInfo.createTime).format("YYYY/MM/DD HH:mm:ss")}</Descriptions.Item>
                            <Descriptions.Item label="发布时间">{newsInfo.publishTime?moment(newsInfo.createTime).format("YYYY/MM/DD HH:mm:ss"):"-"}</Descriptions.Item>
                            <Descriptions.Item label="区域">全球</Descriptions.Item>
                            <Descriptions.Item label="审核状态"><span style={{color:colorList[newsInfo.auditState]}}>{auditList[newsInfo.auditState]}</span></Descriptions.Item>
                            <Descriptions.Item label="发布状态"><span style={{color:colorList[newsInfo.publishState]}}>{publishList[newsInfo.publishState]}</span></Descriptions.Item>
                            <Descriptions.Item label="访问数量">{newsInfo.view}</Descriptions.Item>
                            <Descriptions.Item label="点赞数量">{newsInfo.star}</Descriptions.Item>
                            <Descriptions.Item label="评论数量">0</Descriptions.Item>
                        </Descriptions>
                    </PageHeader>

                    <div dangerouslySetInnerHTML={
                        {__html:newsInfo.content}
                    }style={{
                        marginTop:"10px",
                        padding:"0 24px",
                        border: "1px solid #c6c6c6",
                        backgroundColor:"#fafafa",
                        minHeight:"240px"
                    }}>
                    </div>
                </div>
            }
        </div>
    )
}
