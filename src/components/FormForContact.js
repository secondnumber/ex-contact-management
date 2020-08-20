import React, {Fragment, useEffect, useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import PropTypes from "prop-types";

const FormForContacts = ({onFinish, onFinishFailed}) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const initialValues = {firstName: '', lastName: '', phoneNumber: null};

  return (
      <Form
          layout='vertical'
          form={form}
          name="basic"
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
      >
          <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
          >
              <Input />
          </Form.Item>

          <Form.Item
              label="Phone number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
              <Input type="tel" />
          </Form.Item>

          <Form.Item shouldUpdate>
              {() => (
                  <Fragment>
                      <Button
                          style={{marginRight: 20}}
                          type="primary"
                          htmlType="submit"
                          disabled={
                              !form.isFieldsTouched(true) ||
                              form.getFieldsError().filter(({ errors }) => errors.length).length
                          }
                      >
                          Add
                      </Button>
                      <Button type="secondary" htmlType="button"
                              onClick={() => form.resetFields()}>
                          Reset
                      </Button>
                  </Fragment>
              )}
          </Form.Item>

      </Form>
  );
};

FormForContacts.propTypes = {
    onFinish: PropTypes.func.isRequired,
    onFinishFailed: PropTypes.func.isRequired,
};

export default FormForContacts;