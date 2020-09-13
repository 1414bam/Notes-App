import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export default function AlertCustom(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert style={{ backgroundColor: 'transparent', border: '#205c80 1px solid', display:'flex', alignItems: 'center' }}
                severity='info' >
                {props.children}
            </Alert>
        </div>
    );
}
