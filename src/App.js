import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items,
            isShowForm: false,
            strSearch:'',
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.CloseForm = this.CloseForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleToggleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    };
    CloseForm()
    {
        this.setState({
            isShowForm: false
        });
    }
    handleSearch(value){
        this.setState({
            strSearch: value
        });
    }
    render() {
        let itemsOrigin = this.state.items;
        let items = [];
        let isShowForm = this.state.isShowForm;
        let elmForm = null;
        let search = this.state.strSearch;

        itemsOrigin.forEach((item) => {
            if (item.name.toLowerCase().indexOf(search) !== -1) {
                items.push(item);
            }
        });

        if(isShowForm) {
            elmForm = <Form onClickCancel={this.CloseForm}/>;
        }
        return (
            <div className="row">
                {/* TITLE : START */}
                <Title/>
                {/* TITLE : END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control
                    onClickSearchGo={this.handleSearch}
                    strSearch={this.props.strSearch}
                    onClickAdd={this.handleToggleForm}
                    isShowForm={isShowForm}
                />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                {elmForm}
                {/* FORM : END */}
                {/* LIST : START */}
                <List items={items}/>
            </div>
        );
    }
}

export default App;
