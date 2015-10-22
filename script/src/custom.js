//customize value link
var DisplayContainer3 = React.createClass({
    update: function(modifiedValue) {
        this.setState({value: modifiedValue})
    },
    getInitialState: function() {
        return {
            value: 'My Value 3'
        };
    },
    render: function() {
        var customValueLink = {
            value: this.state.value,
            requestChange: this.update
        };
        return (
            <div>
                <h4>{this.state.value}</h4>
                <InputBox3 customValueLink11={customValueLink} />
            </div>
        );
    }
});

var InputBox3 = React.createClass({
    render: function() {
        return (
            <input type="text" valueLink={this.props.customValueLink11} />
        );
    }
});


ReactDOM.render(<DisplayContainer3 />, document.getElementById("container3"));