import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import InputComponent from './InputComponent';
import classNames from 'classnames';

const styles = createStyles((theme) => ({
  input: {
    display: 'flex',
    paddingTop: theme.spacing.unit * 1.25,
    paddingRight: 0.25,
    paddingBottom: theme.spacing.unit * 1.25,
    paddingLeft: 1.75,
    height: 'auto',
    minHeight: 36
  },
  dense: {
    
    paddingTop: theme.spacing.unit * 0.5,
    paddingRight: 0.25,
    paddingBottom: theme.spacing.unit * 0.5,
    paddingLeft: 1.75,
  }
}));

const ControlBase = ({ children, classes, innerProps, innerRef, selectProps: { TextFieldProps } }) => {
  return (
    <TextField
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          className: classNames(classes.input, {[classes.dense]: TextFieldProps.margin === 'dense'}),
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
};

const Control = withStyles(styles)(ControlBase)

Control.propTypes = {
  children: PropTypes.node.isRequired,
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  selectProps: PropTypes.shape({
    TextFieldProps: PropTypes.shape({
      margin: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Control;
