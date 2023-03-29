const calculateAvgRating = reviews => {
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);

    // eslint-disable-next-line eqeqeq
    const avgRating = totalRating == 0 
            ? "" 
            // eslint-disable-next-line eqeqeq
            : totalRating == 1 
            ? totalRating 
            : (totalRating / reviews?.length).toFixed(1);

    
    return {
        totalRating,
        avgRating
    }
}

export default calculateAvgRating;