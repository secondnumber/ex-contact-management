import React from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './App.less';

const App = () => (
    <div className="App">
      <Button
          type="primary"
          icon={<SearchOutlined/>}
          data-testid="add-contact-button"
      >
          Button
      </Button>
    </div>
);

export default App;