import React, {Component} from 'react';
import {Tabs,Tab, NavDropdown,MenuItem,Nav,NavItem} from 'react-bootstrap';
import './ControlledTabs.css';
class ControlledTabs extends Component{
    constructor(props){
        super(props);
        this.state={
            key: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    //set key for active tab
    handleSelect(key){
        this.props.handleHomeSelect(key);
        this.setState({key});
    }

    render(){
    
        return(
            <div>
                <div className="Name">Zane</div>
            <Nav
                className="tab"
                bsStyle="tabs"
                activeKey={this.state.key}
                
                onSelect={this.handleSelect}
                id="controlled-tab"
            >
               
                <NavItem  className="tab-item" eventKey={1} title="Projects">
                   Home
                </NavItem>
                    
                <NavDropdown  className="tab-item" title="About">
                    <MenuItem> Link 1</MenuItem>
                    <MenuItem> Link 2</MenuItem>
                    <MenuItem> Link 3</MenuItem>
                </NavDropdown>
                <NavDropdown  className="tab-item" title="Projects">
                    <MenuItem> Link 1</MenuItem>
                    <MenuItem> Link 2</MenuItem>
                    <MenuItem> Link 3</MenuItem>
                </NavDropdown>
                
            </Nav>
            </div>
        );
    }
}

export default ControlledTabs;