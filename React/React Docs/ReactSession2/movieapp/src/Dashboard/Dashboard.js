class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'UserName': 'User1'
        }
        this.changestate = this.changestate.bind(this);
    }

    changeState() {
        this.setState = ({ 'UserName': 'User2' });

    }
    render()
    {
    return (
        <div>
            <h2>
                {this.state.UserName}
                
            </h2>
            <button on click={this.changeState}>Click me</button>
        </div>

    )
}
}