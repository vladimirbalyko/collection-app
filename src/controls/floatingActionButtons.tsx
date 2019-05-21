import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

const styles = (theme: any) => ({
  fab: {
    margin: theme.spacing.unit,
  }
});

const Context = styled.div`
    text-align: right;
`;

function FloatingActionButtons(props:any) {
  const { classes } = props;
  return (
    <Context>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
      </Fab>
      <Fab aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </Context>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ActionButtons = withStyles(styles)(FloatingActionButtons);

export default ActionButtons;