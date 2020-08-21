import React, {Fragment, useState} from 'react';
import {Button, Layout, Table, Menu, Space} from 'antd';
import { PlusCircleFilled, DeleteOutlined } from '@ant-design/icons';
import './App.less';
import AddDrawer from "./components/AddDrawer";
import {connect} from "react-redux";
import {addContact, deleteContact} from "./redux/actions";

const App = ({contacts, allContacts, addContact, deleteContact}) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [errorInfo, setErrorInfo] = useState({});
    const [collapsed, setCollapsed] = useState(false);

    const handleAddFormOnFinish = (data) => {
        addContact({
            ...data,
            key: data.phoneNumber
        });
        setShowDrawer(false);
    };
    const handleAddFormOnFinishFailed = (errorInfo) => {
        setErrorInfo(errorInfo);
        console.log(errorInfo);
    };

    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;


    const onCollapse = collapsed => {
            console.log(collapsed);
        setCollapsed({ collapsed });
        };

    const columns = [
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Phone number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => <span><Button onClick={() => {deleteContact(record.key)}} icon={<DeleteOutlined/>}/></span>,
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: '#fff' }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Fragment>
                            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
                                <div></div>
                                <div>
                                <Button
                                    type="primary"
                                    icon={<PlusCircleFilled/>}
                                    data-testid="add-contact-button"
                                    onClick={() => setShowDrawer(true)}
                                >
                                    Add
                                </Button></div>
                            </div>
                            <Layout.Content>
                                <Table dataSource={allContacts} columns={columns} />
                            </Layout.Content>
                            <AddDrawer
                                show={showDrawer}
                                handleOnClose={() => setShowDrawer(false)}
                                handleAddFormOnFinish={handleAddFormOnFinish}
                                handleAddFormOnFinishFailed={handleAddFormOnFinishFailed}
                            />
                        </Fragment>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                </Footer>
            </Layout>
        </Layout>
    )
};

const mapStateToProps = (state) => ({
    contacts: state.contacts,
    allContacts: state.contacts.allContacts
});

export default connect(mapStateToProps, {addContact, deleteContact})(App);