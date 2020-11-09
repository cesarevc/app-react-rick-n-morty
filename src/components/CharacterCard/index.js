import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import DialogContentText from '@material-ui/core/DialogContentText';

import DraggableDialog from '../Dialog'

const useStyles = makeStyles({
  card: {
    maxWidth: 285,
    margin: 20
  },
  media: {
    height: 270
  }
});

export default function CharacterCard({id, name, character, status, species, type, gender, origin, location, image, episode, url, created}) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <Card className={classes.card} onClick={handleClickOpen}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={id}
          />
          <CardContent style={{backgroundColor: "#ececed"}}>
            <Typography gutterBottom variant="h5" component="h2" >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <DraggableDialog open={open} handleClose={handleClose} name={name} image={image} character={character} />
    </div>
  );
}
