import React ,{useState} from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from '@material-ui/core/Button';


export const AboutMe = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">About Me</h1>
            <p className="lead">
                My name is Tigran Grigoryan. I am an emerging developer.
                <hr />
                I am a very quick learner and I am open for new opportunities and cooperation.
                <br />
                You can view my CV and my projects here.
            </p>
            <button onClick={handleClickOpen} type="button" className="btn btn-secondary">See my cv</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'1500px'}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <img src={'tigran1.cv.jpg'} />
                        <img src={'tigran2.cv.jpg'} />

                <h1>GitHub Repositories</h1>
                   <hr/>
                   <a href={'https://github.com/Tigran-griig/JavaScript_Todo_List'}>.Js todo list:</a>
                        <br/>
                        <a href={'https://github.com/Tigran-griig/React-TodoList-Class.Component'}>.React todo list with classes:</a>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} type="button" className="btn btn-secondary">Cancel</button>

                </DialogActions>
            </Dialog>
        </div>


    </div>
)
}