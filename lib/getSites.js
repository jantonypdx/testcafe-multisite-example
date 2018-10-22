/**
 * Utility function that returns an array of site definitions
 * to be tested.
 */

const fs = require("fs");
const yargs = require("yargs");
const globby = require("globby");

/**
 * Based on "site" command line argument, return an
 * array of sites that matches the user's requests
 * against sites found in the 'sites' subdirectory.
 */
function getSites() {
  // see if a "site" command-line arg passed in.
  // if not, default to an 'en_US' site
  const argv = yargs.options({
    site: {
      default: "**/*en_US*",
      type: "array"
    }
  }).argv;

  // create empty sites array that we will fill in
  let sites = [];

  // search in the 'sites' subdirectory
  // and return absolute paths back
  const options = {
    cwd: "sites",
    absolute: true
  };

  // use globby module to get all file names
  const files = globby.sync(argv.site, options);

  // load each file and add it to the sites array
  files.forEach(file => {
    const siteDefinition = JSON.parse(fs.readFileSync(file, "utf8"));
    sites.push(siteDefinition);
  });

  // finally, return the populated sites array
  return sites;
}

export { getSites };
