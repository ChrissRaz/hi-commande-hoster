import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Image } from "@material-ui/icons";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%',
    },
    image: {
      position: 'relative',
      height: '100%',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {

          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    defaultImage: {
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      fontSize: "150px",
      opacity: 0.1
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
      borderRadius: "12px",

    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      fontWeight: "bold",
      color: theme.palette.primary.dark
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.primary.dark,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

type Props = {
  title?: string,
  backGroundImageUrl?: string | null
}

export default function ImagePickerButton(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonBase
        focusRipple
        key={props.title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
      >

        {(props.backGroundImageUrl && props.backGroundImageUrl != null) ?
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${props.backGroundImageUrl})`,
            }}
          /> : <Image color="secondary" className={classes.defaultImage} />}

        <span className={classes.imageBackdrop} />

        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            className={classes.imageTitle}
          >
            {props.title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>

    </div>
  );
}
