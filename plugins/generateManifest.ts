// Utils
import ejs from 'ejs'
import fs from 'fs'


export default async () => {
    const identifier = process.env.IDENTIFIER;
    const version = process.env.VERSION;
    const title = process.env.TITLE;
    const host = process.env.HOST;

    const content = await ejs.renderFile(
        './plugins/manifest.plist',
        {
            identifier,
            version,
            title,
            host,
        },
        { async: true }
    );

    if (!fs.existsSync('./files')){
        fs.mkdirSync('./files');
    }

    fs.writeFileSync('./files/manifest.plist', content);

    console.log('Manifest.plist generated.');
}