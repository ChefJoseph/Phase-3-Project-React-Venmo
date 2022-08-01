import React, { useState, useEffect }from 'react';
import { useSelector } from 'react-redux';
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { baseUrl } from '../config';
import '../styles/searchbar.css';
// import TransactionSearch from './TransactionSearch.js'

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    }
  },
  palette: {
    text: {
      primary: 'rgb(0,0,0)'
    }
  }
})

const filterOptions = createFilterOptions({
  limit: 4
});

function Search() {
  const userId = useSelector((state) => state.user.id);
  const balance = useSelector((state)=> state.user.balance);
  const [newBalance, setNewBalance] = useState(balance)
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(false)

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    }

    async function test() {
    const response = await fetch(`${baseUrl}/allusers`, requestOptions)
    const newData = await response.json()
    setData(newData.users)
    }
    test()
  },[]);

  function handleSubmit(e) {
    e.preventDefault();
    setForm(true)
  }
    return (
        <>
            <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
            </form>
            <TransactionSearch
              />
            </ThemeProvider>
        </>
    );
}
export default Search;