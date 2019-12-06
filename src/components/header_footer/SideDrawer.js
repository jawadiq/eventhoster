import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import FlareSharpIcon from '@material-ui/icons/FlareSharp';
import TimelapseSharpIcon from '@material-ui/icons/TimelapseSharp';





const SideDrawer = (props) => {
    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('featured')}>
                 <TimelapseSharpIcon/>&nbsp;&nbsp;
                Event starts in          
                        </ListItem>

                <ListItem button onClick={()=> scrollToElement('venuenfo')}>
                   <InfoSharpIcon/> &nbsp;&nbsp;&nbsp;Venue Info
                   
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                  <FlareSharpIcon/> &nbsp;&nbsp; Highlights
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('pricing')}>
                <AttachMoneyIcon/> &nbsp;&nbsp;   Pricing
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                 <LocationOnIcon/> &nbsp;&nbsp;  Location
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;