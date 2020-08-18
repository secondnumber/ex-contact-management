import React from 'react';
import PropTypes from 'prop-types';
import {Drawer} from 'antd';
import FormForContacts from "./FormForContact";

const AddDrawer = ({show, handleOnClose, handleAddFormOnFinish, handleAddFormOnFinishFailed}) => {
  return (
    <Drawer
        width={412}
        data-testid="add-contact-drawer"
        title="Add Contact"
        visible={show}
        onClose={handleOnClose}
        maskClosable={true}>
        <h1>Content Here</h1>
        <FormForContacts onFinish={handleAddFormOnFinish} onFinishFailed={handleAddFormOnFinishFailed}/>
    </Drawer>
  );
};

AddDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    handleOnClose: PropTypes.func.isRequired,
};

export default AddDrawer;