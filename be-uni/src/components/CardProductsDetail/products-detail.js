
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Typography } from '@mui/material';
import { CardMedia } from "@mui/material";

export default function ProductDetails(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton color="primary" component="label" onClick={handleClickOpen}>
                <InfoOutlinedIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" align='center'>
                    {props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <CardMedia
                            component={"img"}
                            alt={props.title}
                            image={props.image}
                            height={"500px"}
                            width={'500px'}
                            title={props.title}
                            price={props.price}
                            total_stock={props.total_stock}
                            style={{ marginBottom: 20 }}
                        />
                        <Typography style={{ marginBottom: 10 }}>R$: {props.price.toFixed(2)}</Typography>
                        <Typography style={{ marginBottom: 10 }}><strong>Descrição:</strong> {props.description}</Typography>
                        <Typography style={{ marginBottom: 10 }}><strong>Estoque: </strong> {props.total_stock}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}