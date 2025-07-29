// Auto-generated portfolio data - Upload this file to your website
// Generated on: 2025-07-29T23:29:10.530Z

window.PORTFOLIO_DATA = {
  "personal": {
    "fullName": "",
    "title": "",
    "tagline": "",
    "profileImage": ""
  },
  "hero": {
    "name": "",
    "title": "",
    "tagline": "",
    "subtitle": "",
    "buttonText": "Learn More About Me",
    "buttonUrl": "#about"
  },
  "about": {
    "description": "",
    "profileImage": ""
  },
  "education": [],
  "skills": [
    {
      "id": 1753831615564,
      "name": "grgrwwrrwwgrgrwgrwgrrg",
      "category": "",
      "proficiency": ""
    },
    {
      "id": 1753831680808,
      "name": "grrggrrggr",
      "category": "",
      "proficiency": ""
    },
    {
      "id": 1753831750529,
      "name": "rgrgwrrwrwg",
      "category": "",
      "proficiency": ""
    }
  ],
  "projects": [],
  "contact": {
    "email": "",
    "phone": "",
    "linkedin": "",
    "github": "",
    "twitter": "",
    "website": ""
  },
  "publications": [],
  "podcasts": [],
  "videos": [],
  "awards": [],
  "settings": {
    "siteTitle": "Student Portfolio",
    "colorScheme": "blue",
    "metaDescription": ""
  }
};

// Auto-load this data when the page loads
if (typeof loadAllPortfolioData === 'function') {
    document.addEventListener('DOMContentLoaded', function() {
        // Use static data if no localStorage data exists
        const existingData = localStorage.getItem('portfolioData');
        if (!existingData || existingData === '{}') {
            localStorage.setItem('portfolioData', JSON.stringify(window.PORTFOLIO_DATA));
        }
        // Always reload with current data
        loadAllPortfolioData();
    });
}