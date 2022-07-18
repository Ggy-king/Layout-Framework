import React, { Component } from 'react';
import { Card } from 'antd';
import axios from 'axios';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            content: 'content'
        }
    }

    render() {
        return (
            <div className="site-card-border-less-wrapper">
                <Card
                    title={this.state.title}
                    bordered={false}
                    style={{
                        width: '100%',
                    }}
                >

                    <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                </Card>
            </div>
        )
    }

    // 也别获取了这个项目有很大的问题
    // componentDidMount() {
    //     // console.log(this.props);
    //     // axios.get('http://www.dell-lee.com/react/api/detail.json');
    // }
}

export default Detail;