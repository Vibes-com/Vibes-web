// this is a helper file for sitemap


export async function getAllCaseStudySlugs() {
  try {
    const res = await fetch('https://www.dashboard.vibescom.in/api/casestudy');
    const data = await res.json();
    return data.map(item => item.slug);
  } catch (err) {
    console.error('Error fetching case studies', err);
    return [];
  }
}