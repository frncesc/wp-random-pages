import React from 'react';
import validator from 'validator';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Waiting from './Waiting';
import Categories from './Categories';
import Posts from './Posts';

function Settings(props) {

  const { conf, setConf, checkSite } = props;

  const handleChange = ev => setConf({ ...conf, [ev.target.id]: ev.target.value })

  return (
    <Paper className="main">
      <TextField
        id="wpSite"
        label="WordPress site URL"
        value={conf.wpSite}
        onChange={handleChange}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={checkSite}
        disabled={!validator.isURL(conf.wpSite)}
      >
        Connecta
      </Button>
      {conf.loading && <Waiting />}
      {conf.err && <p>ERROR: {conf.err}</p>}
      {conf.categories && <Categories {...{ conf, setConf }} />}
      {conf.posts && <Posts {...{ conf, setConf }} />}
      {conf.pages && (
        <div>
          <h2>Pages</h2>
          <ul>
            {conf.pages.map((page, i) => (page.type === 'page' && page.status === 'publish' &&
              <li key={i}>
                <a href={page.link}>
                  <span dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
                </a>
              </li>))}
          </ul>
        </div>
      )}
    </Paper>
  );

}

export default Settings;

