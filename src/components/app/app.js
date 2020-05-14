import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'This is soo good', important: false, like: false, id: 2},
                {label: 'I need a break!', important: false, like: false, id: 3},
                {label: 'I need a break!', important: false, like: false, id: 4}
            ]
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);

        this.maxId = 5;
    }

deleteItem(id){
   this.setState(({data}) => {
       const index = data.findIndex(elem => elem.id === id);
       const newArr = [...data.slice(0, index), ...data.slice(index+1)];

       return {
           data: newArr
       }
   });
}

addItem(body ){
    const newItem = {
        label: body,
        important: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    })
}

onToggleImportant(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
 
        const old = data[index];
        const newItem = {...old, important: !old.important}
 
        const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];
        return {
            data: newArr
        }
    })
}

onToggleLiked(id) {
   this.setState(({data}) => {
       const index = data.findIndex(elem => elem.id === id);

       const old = data[index];
       const newItem = {...old, like: !old.like}

       const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)];
       return {
           data: newArr
       }
   })
}

render(){
    const liked = this.state.data.filter(item => item.like).length;
    const allPosts = this.state.data.length;



    return(
        <div className="app">
              <AppHeader
              liked={liked}
              allPosts={allPosts}/>
            <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
            </div>
            <PostList 
            posts={this.state.data}
            onDelete={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}/>
            <PostAddForm
            onAdd={this.addItem}/>
        </div>
      
    )
}

    
}

