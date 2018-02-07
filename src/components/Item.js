import React, {Component} from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        // const item = this.props.item; //Cach viet duoi tuong duong cach viet nay
        const {item} = this.props;
        const {index} = this.props;
        return (
            <tr>
                <td className="text-center">{index+1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
    showElementLevel(level){
        switch (level) {
            case 1:
                return <span className="label label-info">Medium</span>; // return nen khong can break
            case 2:
                return <span className="label label-danger">High</span>;
            default:
                return <span className="label label-default">Small</span>
        }
    }
}

export default Item;
