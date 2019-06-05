import React, { useState } from 'react';
import ReactDom from 'react-dom';

const Demo = () => {
    const [demo, setDemo] = useState('demoState');

    return <div>qqqqq</div>;
};
const App = () => {
    return <Demo />;
};

ReactDom.render(<App />, document.getElementById('root'));
