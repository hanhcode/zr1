import React, {Component} from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            strSearh : "",
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSearch(){
        this.props.onClickGo(this.state.strSearh);
    }
    handleClear(){
        this.setState({strSearh: ''});
        this.props.onClickGo('');
    }
    handleChange(event) {
        this.setState({strSearh: event.target.value});
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input value={this.state.strSearh} onChange={this.handleChange} type="text" className="form-control" ref="search" placeholder="Search for..."/>
                    <span className="input-group-btn">
                <button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
                <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear!</button>
              </span>
                </div>
            </div>
        );
    }
}


export default Search;
