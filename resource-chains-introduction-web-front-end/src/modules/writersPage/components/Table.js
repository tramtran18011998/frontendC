import React, { Component, useState } from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import CreateIcon from "@material-ui/icons/Create"
import { minus } from 'react-icons-kit/fa/minus'
import { ic_check } from 'react-icons-kit/md/ic_check'
import { Icon } from 'react-icons-kit'
import TextField from '@material-ui/core/TextField';
import * as api from "../../../api"


export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [nameSearch, setNameSearch] = React.useState("")

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      console.log(props.rows)
      const newSelecteds = props.rows.map((n, index) => index);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }


  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleDetailPage(data, id) {
    props.uploadData(data, id)
  }
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  const isSelected = index => {
    return selected.indexOf(index) !== -1
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);
  //   console.log(props)
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length}
              nameSearch={nameSearch} 
              setNameSearch={setNameSearch} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.rows.length} 
            />
            <TableBody>
              {stableSearch(stableSort(props.rows, getSorting(order, orderBy)),nameSearch)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(index);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  // console.log(row) 
                  if (row.name === "admin")
                    return
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" id={labelId} align="center">
                        {row.status ?
                          <div style={{ background: "#4bc051", width: "28px", height: "28px", borderRadius: "50%", position: "relative", color: "white", marginTop: "5px",left:"60%" }}>
                            <Icon size={20} icon={ic_check} style={{ marginLeft: "2px", marginTop: "1px" }} />
                          </div> :
                          <div style={{ background: "#ff4c4c", width: "28px", height: "28px", borderRadius: "50%", position: "relative", color: "white", marginTop: "5px",left:"60%"  }}>
                            <Icon size={20} icon={minus} style={{ marginLeft: "2px", marginTop: "5px" }} />
                          </div>}
                      </TableCell>
                      <TableCell align="right"><img style={{ borderRadius: "50%", width: "50px" }} src={api.callAPI()+"upload/" + row.avatar} /></TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.phoneNumber}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell padding="checkbox" alig="center" style={{paddingRight:"20px"}}>
                        <IconButton onClick={e => handleDetailPage(row, row.id)} size="medium" aria-label="delete">
                          <CreateIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={9} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>)
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSearch(arr, name){
  const searchThis = [...arr]
  return name === "" ? searchThis : searchThis.filter(e=> e.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'status', numeric: false, disablePadding: false, label: 'status' },
  { id: 'avatar', numeric: false, disablePadding: false, label: 'avatar' },
  { id: 'name', numeric: true, disablePadding: false, label: 'name' },
  { id: 'phoneNumber', numeric: true, disablePadding: false, label: 'phone' },
  { id: 'email', numeric: true, disablePadding: false, label: 'email' },
];
function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => {
          return (
            <TableCell
              key={row.id}
              align={row.numeric ? 'right' : 'right'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
                {orderBy === row.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          )
        }
        )}
        <TableCell padding="checkbox" align="center" style={{paddingRight:"20px"}}>
          Edit
          </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  function handleChangeSearchName(e){
    props.setNameSearch(e.target.value)
  }

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title} style={{width:"100%"}}>
         
          <div className="row">
            <div className="col-0 col-lg-1"></div>
            <Typography className="col-4 col-lg-2 mt-3" variant="h6" id="tableTitle">
              List writer
            </Typography>
            <TextField
              id="standard-name"
              label="Search Name Writer"
              margin="normal"
              className="col-7 col-lg-6"
              style={{marginTop:"0px"}}
              onChange={e=>handleChangeSearchName(e)}
            />
          </div>
          
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));