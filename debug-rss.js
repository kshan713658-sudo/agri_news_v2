const Parser = require('rss-parser');
const parser = new Parser();

async function checkRSS() {
  const RSS_URL = 'http://www.newsfarm.co.kr/rss/allArticle.xml';
  console.log('Fetching:', RSS_URL);
  try {
    const feed = await parser.parseURL(RSS_URL);
    console.log('Feed Title:', feed.title);
    const firstItem = feed.items[0];
    console.log('First Item Raw Keys:', Object.keys(firstItem));
    console.log('First Item Link:', firstItem.link);
    console.log('First Item GUID:', firstItem.guid);
    console.log('First Item Title:', firstItem.title);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

checkRSS();
