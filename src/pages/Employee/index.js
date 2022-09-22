import React, { Component} from 'react';

class Employee extends Component {
    constructor(props){
        super(props);
        this.state = {
            employee:[]
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let url = `/${id}`;
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({employee: json});
           
        })
    }

    render() {
        return (
            <div>
            
            </div>
        );
    }
}

export default Employee;