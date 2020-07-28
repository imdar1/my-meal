import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { StylesProvider } from '@material-ui/core/styles';

import styled from 'styled-components';


const StyledCircularProgress = styled(CircularProgress)`
    color: coral;
`;

export default function CustomCircularProgress() {
    return (
        <StylesProvider injectFirst>
            <StyledCircularProgress />
        </StylesProvider>
    )
}
