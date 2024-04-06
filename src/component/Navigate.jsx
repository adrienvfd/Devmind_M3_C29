import React from 'react';
import {Drawer, List, ListItem, ListItemText, Divider} from '@material-ui/core';
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Navigate = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Drawer
            anchor="left"
            open={true}
        >
            <List>
                <ListItem button component={Link} to="/home" selected={location.pathname === '/'} onClick={() => navigate('/')}>
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem button component={Link} to="/adrienvfd/repos" selected={location.pathname === '/repos'} onClick={() => navigate('/repos')}>
                    <ListItemText primary="Repositories"/>
                </ListItem>
                <ListItem button component={Link} to="/adrienvfd/repos/:id" selected={location.pathname.startsWith('/repos/')} onClick={() => navigate('/repos/1')}>
                    <ListItemText primary="Repository details"/>
                </ListItem>
            </List>
            <Divider/>
        </Drawer>
    );
};

export default Navigate;
