/* Script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomised data
   and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';      // library to generate mock
import { schema } from './mockDataSchema';// mock schema
import fs from 'fs';                      // comes with node
import chalk from 'chalk';                // colour console text

const json = JSON.stringify(jsf(schema)); // JSF will look at schema and generate randomised mock data

// write results to auto-generated DB file at location
fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
