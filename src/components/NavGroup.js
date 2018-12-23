import React, {Component} from 'react';
import './NavGroup.css';
class NavGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            key: 1
        };
    }


    render(){
        return(
           <div className="Navigation">
                <div className="NavGroup">
                    <div className="circle"></div>
                    <div className="circle2"></div>
                    <div className="NavWrapper">
                        <div className="Nav-parent">
                        
                            <div className="NavItem1">
                                Home
                            </div>
                            <div className="NavItem2">
                                About
                            </div>
                            <div className="NavItem3">
                                Projects
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NavGroup">
                    <div className="circle"></div>
                    <div className="NavWrapper">
                        <div className="Nav-parent">
                        
                            <div className="NavItem1">
                                Home
                            </div>
                            <div className="NavItem2">
                                About
                            </div>
                            <div className="NavItem3">
                                Projects
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NavGroup">
                    <div className="circle"></div>
                    <div className="NavWrapper">
                        <div className="Nav-parent">
                        
                            <div className="NavItem1">
                                Home
                            </div>
                            <div className="NavItem2">
                                About
                            </div>
                            <div className="NavItem3">
                                Projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NavGroup;