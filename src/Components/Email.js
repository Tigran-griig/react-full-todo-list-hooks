import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import FormEmailChange from "./FormEmailChange";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>

                        <Typography variant="h6" className={classes.title}>
                            Write your email so we can answer your questions!

                        </Typography>

                    </Toolbar>
                </AppBar>
                <List>
                <FormEmailChange handleClose={handleClose} />


                </List>
            </Dialog>
        </div>
    );
}
// onClick={handleClose}