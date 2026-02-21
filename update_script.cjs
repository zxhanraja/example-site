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
        const marbleData = await fetchJSON('https://unsplash.com/napi/search/photos?query=beautiful%20marble%20texture&per_page=15');
        const marbleUrls = marbleData.results.map(r => r.urls.raw + '&auto=format&fit=crop&q=70&w=800');

        let collections = fs.readFileSync('components/Collections.tsx', 'utf8');
        let cIndex = 0;
        collections = collections.replace(/image: \"https:\/\/(images|plus)\.unsplash\.com\/[^\"]+\"/g, (match) => {
            const url = marbleUrls[cIndex % marbleUrls.length];
            cIndex++;
            return `image: "${url}"`;
        });
        fs.writeFileSync('components/Collections.tsx', collections);

        let detailed = fs.readFileSync('components/DetailedContent.tsx', 'utf8');

        // Update Showroom wording
        detailed = detailed.replace(/Visit our flagship London and Milan locations/g, 'Visit our flagship Rajasthan and West Bengal locations');
        fs.writeFileSync('components/DetailedContent.tsx', detailed);

        console.log('Successfully updated Collections images and Showroom text.');
    } catch (err) {
        console.error('Failed API:', err);
    }
}
run();
