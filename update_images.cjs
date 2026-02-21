const https = require('https');
const fs = require('fs');

async function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });
}

async function run() {
    try {
        const marbleData = await fetchJSON('https://unsplash.com/napi/search/photos?query=luxury%20marble%20texture&per_page=15');
        const marbleUrls = marbleData.results.map(r => r.urls.raw + '&auto=format&fit=crop&q=60&w=800');

        let collections = fs.readFileSync('components/Collections.tsx', 'utf8');
        let cIndex = 0;
        collections = collections.replace(/image: \"https:\/\/images\.unsplash\.com\/photo-[^\"]+\"/g, (match) => {
            const url = marbleUrls[cIndex % marbleUrls.length];
            cIndex++;
            return `image: "${url}"`;
        });
        fs.writeFileSync('components/Collections.tsx', collections);

        const interiorData = await fetchJSON('https://unsplash.com/napi/search/photos?query=luxury%20marble%20interior&per_page=15');
        const interiorUrls = interiorData.results.map(r => r.urls.raw + '&auto=format&fit=crop&q=60&w=800');

        let inspiration = fs.readFileSync('components/Inspiration.tsx', 'utf8');
        let iIndex = 0;
        inspiration = inspiration.replace(/img: \"https:\/\/images\.unsplash\.com\/photo-[^\"]+\"/g, (match) => {
            const url = interiorUrls[iIndex % interiorUrls.length];
            iIndex++;
            return `img: "${url}"`;
        });
        fs.writeFileSync('components/Inspiration.tsx', inspiration);

        console.log('Successfully updated Collections and Inspiration images.');
    } catch (err) {
        console.error(err);
    }
}
run();
