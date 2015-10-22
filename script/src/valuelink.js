// use reactLink
var DisplayContainer2 = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {
            value: 'My Value 2'
        };
    },
    render: function() {
        return (
            <div>
                <h4>{this.state.value}</h4>
                <InputBox2 valueLink={this.linkState('value')} />
            </div>
        );
    }
});

var InputBox2 = React.createClass({
    render: function() {
        return (
            <input type="text" valueLink={this.props.valueLink} />
        );
    }
});

ReactDOM.render(<DisplayContainer2 />, document.getElementById("container2"));

