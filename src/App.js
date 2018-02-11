import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';
import {filter, includes, orderBy as funcOrderBy} from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: items,
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'asc',
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.CloseForm = this.CloseForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    handleToggleForm() {
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    };

    CloseForm() {
        this.setState({
            isShowForm: false
        });
    }

    handleSearch(value) {
        this.setState({
            strSearch: value
        });
    }

    handleSort(orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }

    render() {
        let itemsOrigin = [...this.state.items];// Muc dich itemsOrigin chi copy chu' khong thay doi vung nho this.state.items
        let items = [];
        let elmForm = null;
        let {orderBy, orderDir, isShowForm, strSearch} = this.state;
        //Search
        items = filter(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), strSearch.toLowerCase());
        });
        //Sort
        console.log(orderBy + " - " + orderDir);
        items = funcOrderBy(items, [orderBy], [orderDir]);
        //
        if (isShowForm) {
            elmForm = <Form onClickCancel={this.CloseForm}/>;
        }
        return (
            <div className="row">
                {/* TITLE : START */}
                <Title/>
                {/* TITLE : END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control
                    orderBy={orderBy}
                    orderDir={orderDir}
                    onClickSort={this.handleSort}
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
