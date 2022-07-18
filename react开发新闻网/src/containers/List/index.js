import React, { Component } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useParams } from 'react-router-dom';


class PageList extends Component {


    // componentWillReceiveProps(nextProps) {
    //     console.log('text');
    //     // let id = nextProps.match.params.id;

    //     axios.get('https://www.fastmock.site/mock/be8e9126f34fd985aaad5cbe6e046fd6/react/api/getDate?id=' + params.id)
    //     .then((res) => {
    //             this.setState({
    //                 data: res.data.data.data
    //             })
    //         })
    //     }

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

    }

    render() {
        console.log(this.state.data);
        return (
            <List
                style={{ background: 'rgb(100, 100, 130)' }}
                bordered
                dataSource={this.state.data}
                renderItem={(item) => (
                    <List.Item style={{ color: '#ddd' }}>
                        <Link to={'/detail'}>
                            {item}
                        </Link>
                    </List.Item>
                )}
            />
        )
    }

    // 只在挂载时执行 
    componentDidMount() {
        // console.log(this.props);

        let url = 'https://www.fastmock.site/mock/be8e9126f34fd985aaad5cbe6e046fd6/react/api/getDate';
        // 获取父id
        // const id = this.props.match.params.id;

        // console.log(params);
        // // 判断id是否存在 不存在返回默认值
        // if (params.id) {
        //     url = url + '?id=' + params.id;
        // }
        axios.get(url)
            .then((res) => {
                this.setState({
                    data: res.data.data.data
                })
            })
    }
}

export default PageList;

