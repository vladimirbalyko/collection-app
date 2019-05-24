import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import styled from 'styled-components';

const styles = (theme: any) => ({
  fab: {
    margin: theme.spacing.unit,
  }
});

const Context = styled.div`
    text-align: right;
`;

const FloatingActionButtons = (props: any) => {
  const { classes } = props;

  return (
    <Context>
      {
        !props.isEditing &&  
        <Fab color="secondary" aria-label="Edit" className={classes.fab} onClick={() => props.onEditClick()}>
            <Icon>edit_icon</Icon>
        </Fab>
      }
      {
        props.isEditing && 
        <Fab variant="extended" aria-label="Save" className={classes.fab} onClick={() => props.onSaveClick()}>
             <NavigationIcon className={classes.extendedIcon} />
            Save
        </Fab>
      }
      {
        props.isEditing && 
        <Fab variant="extended" aria-label="Cancel" className={classes.fab} onClick={() => props.onCancelClick()}>
          Cancel
        </Fab>
      }
      <Fab aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </Context>
  );
}

const ActionButtons = withStyles(styles)(FloatingActionButtons);

export default ActionButtons;