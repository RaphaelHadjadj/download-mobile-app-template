/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import { generateManifest } from './plugins'


export const onPostBuild = () => {
    console.log(`calling onPostBuild with import !`);
    generateManifest();
}