import React from 'react';
import { GridLoader } from 'react-spinners'
import {Box} from 'gestalt';

const Loader = ({ show }) => (
    show && <Box
        position="flex"
        dangerouslySetInlineStyle={{
            __style: {
                bottom: 300,
                left: '50%',
                transform: "translatex(50%)"
            }
        }}
    >
        <GridLoader color="darkorange" size={25} margin="3px" />
    </Box>
)

export default Loader;