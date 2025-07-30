// Auto-generated portfolio data - Upload this file to your website
// Generated on: 2025-07-30T00:00:06.657Z

window.PORTFOLIO_DATA = {
  "personal": {
    "fullName": "",
    "title": "",
    "tagline": "",
    "profileImage": ""
  },
  "hero": {
    "name": "Mamello Makhele",
    "title": "",
    "tagline": "",
    "subtitle": "",
    "buttonText": "Learn More About Me",
    "buttonUrl": "#about"
  },
  "about": {
    "description": "Driven by purpose and global recognition, I am a dedicated public health leader and registered nurse-midwife with more than five years of experience transforming maternal and child health (MCH) outcomes in underserved communities. Renowned as a Fulbright Scholar and recipient of the Bill Gates Heroes in the Field Award, I have pioneered impactful programs and forged partnerships with international organizations, governments, and grassroots leaders to advance sexual and reproductive health and rights (SRHR).\n\nCurrently, I am pursuing a PhD in Health Services Research at the University of Nebraska Medical Center—building on a foundation that includes an MPH and other honors. My academic journey empowers me to integrate rigorous research and innovative thinking into real-world solutions for MCH.\n\nMy story is rooted in a passion for advocating for women’s and children’s health, dismantling barriers to quality care, and fostering sustainable, data-driven change. From elevating youth voices on international platforms to spearheading award-winning HIV prevention and empowerment initiatives with the Barali Foundation, my commitment to equity, innovation, and measurable impact in MCH remains unwavering.\n\nI invite you to join me in building healthier futures—where every woman and child has access to dignity and the opportunity to thrive.",
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
    },
    {
      "id": 1753832007591,
      "name": "n n nnn. nn n",
      "category": "",
      "proficiency": ""
    },
    {
      "id": 1753832158601,
      "name": "hvhjhjvhjv",
      "category": "",
      "proficiency": ""
    },
    {
      "id": 1753832449396,
      "name": "cdddc",
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