// function getFormatedParams(searchParams) {
//      let query = '';
//     Object.entries(searchParams).map((params)=>{
//         const [key, value] = params;
//         if (value) query += `${key}=${value}&`;
//     })
//     return query;
// }

// export default getFormatedParams;

function getFormatedParams(searchParams = {}) {
  // Ensure it's a plain object
  if (!searchParams || typeof searchParams !== 'object') return '';

  let query = '';
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
    }
  });

  return query.slice(0, -1); // Remove the trailing "&"
}

export default getFormatedParams;
