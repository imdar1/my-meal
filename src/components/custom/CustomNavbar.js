import React from 'react';
import { NavLink } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/core/styles';

import styled from 'styled-components';

const NavbarContainer = styled.div`
    flex-grow: 1;
`;

const Title = styled(Typography)`
    flex-grow: 1;
    font-family: inherit;
`;

const StyledAppBar = styled(AppBar)`
    background: #fff;
    background-color: coral;
    color: white;
`;

export default function CustomNavbar() {
    const activeStyle = { color: 'crimson', fontWeight: 'bold' };

    return (
        <StylesProvider injectFirst>
            <NavbarContainer>
                <StyledAppBar position="static">
                    <Toolbar>
                        <Title component={NavLink} exact to="/" variant="h6">My Meal</Title>
                        <Button
                            color="inherit"
                            component={NavLink}
                            activeStyle={activeStyle}
                            exact
                            to="/"
                        >
                            Search
                        </Button>
                        <Button
                            color="inherit"
                            component={NavLink}
                            activeStyle={activeStyle}
                            to="/filter"
                        >
                            Filter
                        </Button>
                        <Button
                            color="inherit"
                            component={NavLink}
                            activeStyle={activeStyle}
                            to="/favorites"
                        >
                            Favorites
                        </Button>
                    </Toolbar>
                </StyledAppBar>
            </NavbarContainer>
        </StylesProvider>
    );
}
