
// const config = {
//   siteUrl: 'http://localhost:3000',
//   generateRobotsTxt: true,
//   changefreq: 'weekly',
//   priority: 0.8,
//   sitemapSize: 5000,

//   additionalPaths: async () => {
//     try {
//       const res = await fetch('https://www.dashboard.vibescom.in/api/casestudy', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'VIBES-API_KEY': 'VIBES-8b4c-6555ab86da08',  
//             },
//             });
    
//       const json = await res.json();

    
//     if (!Array.isArray(json.data)) {
//       console.error('API did not return array:', json);
//       return [];
//     }
//       console.log(json.data);
//       return json.data.map((item: { client_slug: string }) => ({
//       loc: `/case-studies/${item.client_slug}`,
//       changefreq: 'monthly',
//       priority: 0.7,
//       lastmod: new Date().toISOString(),
//     }));
//     } catch (err) {
//       console.error('Error fetching case studies', err);
//       return [];
//     }
//   },

//    additionalPathsblog: async () => {
//     try {
//       const res = await fetch('https://www.dashboard.vibescom.in/api/blogs', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'VIBES-API_KEY': 'VIBES-8b4c-6555ab86da08',  
//             },
//             });
    
//       const json = await res.json();

    
//     if (!Array.isArray(json.data)) {
//       console.error('API did not return array:', json);
//       return [];
//     }
//       console.log(json.data);
//       return json.data.map((item: { blog_slug: string }) => ({
//       loc: `/digital-insights-blogs/${item.blog_slug}`,
//       changefreq: 'monthly',
//       priority: 0.7,
//       lastmod: new Date().toISOString(),
//     }));
//     } catch (err) {
//       console.error('Error fetching case studies', err);
//       return [];
//     }
//   },
// };

// export default config;

const config = {
  siteUrl: 'https://www.vibescom.in/',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,

  additionalPaths: async () => {
    try {
       const manualUrls = [
        {
          loc: '/software-technology-services',
          changefreq: 'yearly',
          priority: 0.6,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/branding-agency',
          changefreq: 'yearly',
          priority: 0.6,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/digital-marketing-services',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
          {
          loc: '/software-technology-services/website-development-company',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/software-technology-services/mobile-app-development-company',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/software-technology-services/ecommerce-development-company',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/software-technology-services/project-management-information-system',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/software-technology-services/project-management-information-system',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
         {
          loc: '/branding-agency/corporate-branding',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
          {
          loc: '/branding-agency/brand-upliftment',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
        {
          loc: '/branding-agency/brand-communication-and-strategy',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
            {
          loc: '/digital-marketing-services/campaign-management',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
         {
          loc: '/digital-marketing-services/performance-marketing-agency',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
          {
          loc: '/digital-marketing-services/social-media-marketing-agency',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
         {
          loc: '/digital-marketing-services/search-optimization-services',
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: new Date().toISOString(),
        },
      ];
      /* ================= CASE STUDIES ================= */
      const caseRes = await fetch('https://www.dashboard.vibescom.in/api/casestudy', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'VIBES-API_KEY': 'VIBES-8b4c-6555ab86da08',
        },
      });

      const caseJson = await caseRes.json();

      const caseStudyPaths = Array.isArray(caseJson.data)
        ? caseJson.data.map((item: { client_slug: string }) => ({
            loc: `/case-studies/${item.client_slug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          }))
        : [];

      /* ================= BLOGS ================= */
      const blogRes = await fetch('https://www.dashboard.vibescom.in/api/blogs?limit=all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'VIBES-API_KEY': 'VIBES-8b4c-6555ab86da08',
        },
      });

      const blogJson = await blogRes.json();
  //  console.log(blogJson.blog_list);
      const blogPaths = Array.isArray(blogJson.blog_list)
        ? blogJson.blog_list.map((item: { blog_slug: string }) => ({
            loc: `/digital-insights-blogs/${item.blog_slug}`,
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          }))
        : [];


          
      /* ================= MERGE & RETURN ================= */
      return [...caseStudyPaths, ...blogPaths, ...manualUrls];

    } catch (error) {
      console.error('Sitemap generation error:', error);
      return [];
    }
  },
};

export default config;