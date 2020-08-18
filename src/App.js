import React, {Fragment, useState} from 'react';
import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import './App.less';
import AddDrawer from "./components/AddDrawer";

const App = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [values, setValues] = useState({});
    const [errorInfo, setErrorInfo] = useState({});

    const handleAddFormOnFinish = (values) => {
        setValues(values);
        console.log(values);
    };
    const handleAddFormOnFinishFailed = (errorInfo) => {
        setErrorInfo(errorInfo);
        console.log(errorInfo);
    };

    return (
        <Fragment>
            <Button
                type="primary"
                icon={<PlusCircleFilled/>}
                data-testid="add-contact-button"
                onClick={() => setShowDrawer(true)}
            >
                Add
            </Button>
            <AddDrawer
                show={showDrawer}
                handleOnClose={() => setShowDrawer(false)}
                handleAddFormOnFinish={handleAddFormOnFinish}
                handleAddFormOnFinishFailed={handleAddFormOnFinishFailed}
            />
        </Fragment>
    )
};

export default App;