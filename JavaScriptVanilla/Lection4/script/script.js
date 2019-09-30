'use strict';

function DomElement(tagName, parentSelector='body'){
    this.tag = document.createElement(tagName);

    if(typeof(parentSelector) === 'string'){
        this.parent = document.querySelector(parentSelector);
    }else{
        this.parent = parentSelector;
    }

    
    this.addContent = function(content){
        this.tag.innerHTML += content;
    }
    
    this.setContent = function(content){
        this.tag.innerHTML = content;
    }

    this.getElement = function(){
        return this.tag;
    }

    this.hide = function(){
        this.tag.remove();
    }
    
    this.show = function(){
        this.parent.appendChild(this.tag);
    }

    this.remove = function(){
        let index = tags.indexOf(this);
        this.hide();
        tags.splice(index, 1);
    }

    this.show();

}


var clients = [
    {name: 'Димка', lastName: 'Николаев', age: '33'},
    {name: 'Димка1', lastName: 'Николаев1', age: '32'},
    {name: 'Димка2', lastName: 'Николаев2', age: '31'},
    {name: 'Димка3', lastName: 'Николаев3', age: '30'},
]


var tags = [];

tags.push(new DomElement('div'));
tags.push(new DomElement('ul', tags[0].getElement()));
clients.forEach(function(client){
    var listElem = new DomElement('li', tags[1].getElement());
    listElem.addContent(client.name);
});
