function getFormatedParams(searchParams) {
     let query = '';
    Object.entries(searchParams).map((params)=>{
        const [key, value] = params;
        if (value) query += `${key}=${value}&`;
    })
    return query;
}

export default getFormatedParams;