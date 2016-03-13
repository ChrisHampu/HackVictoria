var MainClass = React.createClass({
    render: function () {
        return React.createElement(
            'div',
            null,
            'Test3'
        );
    }
});

ReactDOM.render(React.createElement(MainClass, null), document.getElementById('main'));