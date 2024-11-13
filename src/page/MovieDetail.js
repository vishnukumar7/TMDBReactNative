import React, { useCallback, useEffect, useState } from 'react';
import {  API_TOKEN, MOVIE_DETAILS_API, POSTER_URL } from '../core/ConfigApi';
import { Image, View } from 'react-native';
import { styles } from '../component/styles';

const MovieDetail = ({navigation, route}) => {

    const { movieId } = route.params || '';
    const [movieDetail, setMovieDetail] = useState({});

    const callApi = useCallback(async () =>  {
        if(movieId !== ''){
            fetch(MOVIE_DETAILS_API + `/${movieId}`,{
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            })
            .then((response) => response.json())
            .then((result) => {
                setMovieDetail(result.results || []);
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, [movieId]);

    useEffect(() => {
        callApi();
    }, [callApi]);

    return (
        <View style={styles.dashboardContainer}>
            <Image source={{ uri: POSTER_URL +  movieDetail.poster_path }} style={styles.imageBanner} />
        </View>
    );
};

export default MovieDetail;
