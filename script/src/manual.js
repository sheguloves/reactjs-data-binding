// manual handle state change
var DisplayContainer1 = React.createClass({
    updateValue: function(modifiedValue) {
        this.setState({
            value: modifiedValue
        })
    },
    getInitialState: function() {
        return {
            value: 'My Value 1'
        };
    },
    render: function() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <InputBox1 value={this.state.value} updateValue={this.updateValue}/>
            </div>
        );
    }
});

var InputBox1 = React.createClass({
    update: function() {
        var modifiedValue = this.refs.inputValue.value;
        this.props.updateValue(modifiedValue);
    },
    render: function() {
        return (
            <input type="text" ref="inputValue" value={this.props.value}
                onChange={this.update} />
        );
    }
});

ReactDOM.render(<DisplayContainer1 />, document.getElementById("container1"));