import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable';


function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({ open, handleClose, id, name, status, species, type, gender, origin, location,character,  image, episode, url, created }) {

    const handleInfo = (character) =>{
        return (
            <DialogContentText>
                <Typography gutterBottom >
                    {`ID: ${character.id }` }
                </Typography>
                <Typography gutterBottom >
                    {`Especie: ${character.species}` }
                </Typography>
                <Typography gutterBottom >
                    {`Status: ${character.status}` }
                </Typography>
                <Typography gutterBottom >
                    {`Tipo: ${character.type}`}
                </Typography>
                <Typography gutterBottom >
                    {`Genero: ${character.gender}`}
                </Typography>
                <Typography gutterBottom >
                    {`Origen: ${character.origin.name}`}
                </Typography>
                <Typography gutterBottom >
                    {`Ubicación: ${character.location.name}`}
                </Typography>
                
                <Typography gutterBottom >
                    {`Creado: ${character.created}`}
                </Typography>
                <Typography gutterBottom >
                    {`Url del Personaje: ${character.url}`}
                </Typography>
            </DialogContentText>
        ) 
    }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {name}
        </DialogTitle>

        <DialogContent style={{alignItems:'center'}} >
            <div style={{alignItems:'center'}}>
                <img src={image} alt="character"  style={{height:350, width: 390, margin: 30}} />
            </div>               
          {handleInfo(character)}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}