// Auto-generated portfolio data - Auto-saved from admin panel
// Generated on: 2025-07-29T23:17:19.991Z

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
      "id": 1753831036536,
      "name": "jvhvjvhhhjvhhv",
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
            console.log('Loaded portfolio data from auto-saved file');
        }
        // Always reload with current data
        setTimeout(loadAllPortfolioData, 100);
    });
}