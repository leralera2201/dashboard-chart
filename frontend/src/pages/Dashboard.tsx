import React from 'react'
import {Checkbox, Dropdown, Table} from 'antd';
import { Resizable } from "react-resizable";
import ReactDragListView from "react-drag-listview";
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ResizableTitle = (props) => {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

class Dashboard extends React.Component<{}, {columns: any, activeColumns: any, visible: boolean, pagination: {current: number, pageSize: number}}> {
    private dragProps: { handleSelector: string; ignoreSelector: string; onDragEnd(fromIndex, toIndex): void; nodeSelector: string };
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {
                    title: <span className="dragHandler">Key</span>,
                    dataIndex: "key",
                    render: (text) => <span>{text}</span>,
                    width: 50,
                    sorter: (a, b) => a.key - b.key,
                },
                {
                    title: <span className="dragHandler">Name</span>,
                    dataIndex: "name",
                    width: 300,
                    sorter: (a, b) => a.name > b.name ? 1 : -1,
                },
                {
                    title: <span className="dragHandler">Gender</span>,
                    dataIndex: "gender",
                    width: 200,
                    sorter: (a, b) => a.gender > b.gender ? 1 : -1,
                },
                {
                    title: <span className="dragHandler">Age</span>,
                    dataIndex: "age",
                    width: 200,
                    sorter: (a, b) => a.age - b.age,
                },
                {
                    title: <span className="dragHandler">Address</span>,
                    dataIndex: "address",
                    sorter: (a, b) => a.address > b.address ? 1 : -1,
                }
            ],
            activeColumns: {
                key: true,
                gender: true,
                name: true,
                address: true,
                age: true
            },
            visible: false,
            pagination: {
                current: 1,
                pageSize: 10
            }
        };

        const that = this;
        this.dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const columns = [...that.state.columns];
                const item = columns.splice(fromIndex, 1)[0];
                columns.splice(toIndex, 0, item);
                that.setState({
                    columns
                });
            },
            nodeSelector: "th",
            handleSelector: ".dragHandler",
            ignoreSelector: "react-resizable-handle"
        };
    }

    components = {
        header: {
            cell: ResizableTitle
        }
    };

    data = [
        {
            key: "1",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "2",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "3",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "4",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "5",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "6",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "7",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "8",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "9",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "10",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "11",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "12",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "13",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "14",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "15",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "16",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "17",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "18",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "19",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "20",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "21",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "22",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "23",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "24",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "25",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "1",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "2",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "3",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "4",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "5",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "6",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "7",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "8",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "9",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "10",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "11",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "12",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "13",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "14",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "15",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "16",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "17",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "18",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "19",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "20",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "21",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "22",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "23",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "24",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "25",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        }, {
            key: "1",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "2",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "3",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "4",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "5",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "6",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "7",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "8",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "9",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "10",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "11",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "12",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "13",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "14",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "15",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "16",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "17",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "18",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "19",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "20",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        },
        {
            key: "21",
            name: "Boran",
            gender: "male",
            age: "12",
            address: "New York"
        },
        {
            key: "22",
            name: "JayChou",
            gender: "male",
            age: "38",
            address: "TaiWan"
        },
        {
            key: "23",
            name: "Lee",
            gender: "female",
            age: "22",
            address: "BeiJing"
        },
        {
            key: "24",
            name: "ChouTan",
            gender: "male",
            age: "31",
            address: "HangZhou"
        },
        {
            key: "25",
            name: "AiTing",
            gender: "female",
            age: "22",
            address: "Xi’An"
        }
    ];

    handleResize = (index) => (e, { size }) => {
        this.setState(({ columns }) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width
            };
            return { columns: nextColumns };
        });
    };

    onChange = (e) => {
        this.setState({activeColumns: {...this.state.activeColumns, [e.target.name]: e.target.checked}})
    }

    handleVisibleChange = (flag) => {
        this.setState({visible: flag})
    }
    handleTableChange = (pagination) => {
       this.setState({pagination})
    };

    render() {
        const arrOfActCols: Array<string> = []
        for(let key in this.state.activeColumns){
            arrOfActCols.push(key)
        }
        const menu = (
            <Menu>
                {arrOfActCols.map(el =>
                    <Menu.Item key={el}>
                        <Checkbox onChange={this.onChange} name={el} defaultChecked={this.state.activeColumns[el]}> {el}</Checkbox>

                    </Menu.Item>)}
            </Menu>
        );
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: (column) => ({
                width: column.width,
                onResize: this.handleResize(index)
            })
        }));

        const activeCols = columns.map(col => this.state.activeColumns[col.dataIndex] === true ? col : undefined ).filter(el => el !== undefined)

        return (
            <>
                <Dropdown overlay={menu} onVisibleChange={this.handleVisibleChange}
                          visible={this.state.visible}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                       Choose columns <DownOutlined />
                    </a>
                </Dropdown>
                {activeCols.length > 0 ?

                    <ReactDragListView.DragColumn {...this.dragProps}>
                        <Table
                            bordered
                            components={this.components}
                            columns={activeCols}
                            dataSource={this.data}
                            pagination={this.state.pagination}
                            onChange={this.handleTableChange}
                        />
                    </ReactDragListView.DragColumn>
                    :
                    <div>There are no columns available</div>
                }

            </>
        );
    }
}

export default Dashboard
