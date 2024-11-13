import React, { useEffect, useState } from 'react';
import { ScrollView, View,Text, FlatList, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../component/styles';
import { API_TOKEN, POPULAR_MOVIE_API, POSTER_URL, TOP_RATED_MOVIE_API, TRENDING_MOVIE_PER_DAY_API, TRENDING_MOVIE_PER_WEEK_API } from '../core/ConfigApi';
import { Card } from 'react-native-paper';

const Dashboard = ({navigation}) => {
    const [popular, setPopular] = useState([]);
    const [topRated , setTopRated] = useState([]);
    const [trendingDay ,setTrendingDay] = useState([]);
    const [trendingWeek ,setTrendingWeek] = useState([]);

    const callApi = async () => {
        fetch(POPULAR_MOVIE_API,{
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`,
            },
        })
        .then((response) => response.json())
        .then((result) => {
            setPopular(result.results || []);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            fetch(TOP_RATED_MOVIE_API,{
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            })
            .then((response) => response.json())
            .then((result) => {
                setTopRated(result.results || []);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                fetch(TRENDING_MOVIE_PER_DAY_API,{
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${API_TOKEN}`,
                    },
                })
                .then((response) => response.json())
                .then((result) => {
                    setTrendingDay(result.results || []);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    fetch(TRENDING_MOVIE_PER_WEEK_API,{
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${API_TOKEN}`,
                        },
                    })
                    .then((response) => response.json())
                    .then((result) => {
                        setTrendingWeek(result.results || []);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => {});
                });
            });
        });
    };

    useEffect(() => {
       callApi();
    },[]);

    useEffect(() => {
        console.log(popular);
    },[popular]);

  return (
    <SafeAreaView>
        <View>
            <StatusBar barStyle="dark-content" backgroundColor="#000" />
        <ScrollView>
            <View style={styles.dashboardContainer}>
                {
                    popular ?
                    <>
                    <Text style={styles.textLabelHeader}>Popular Movies</Text>
                    <FlatList data={popular} keyExtractor={(item) => item.id.toString()} renderItem={({item,index}) => (
                       <Card style={styles.card} key={index} onPress={() => navigation.navigate('MovieDetail', { movieId: item.id.toString() })}>
                         <View style={styles.centerLay}>
                            <Image source={{uri : POSTER_URL + item.poster_path}} style={styles.image}  />
                            <Text style={[styles.textLabel,styles.topHeightSpacer]}>{item.original_title}</Text>
                        </View>
                       </Card>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />
                    </>
                     : null
                }
                {
                    topRated ?
                    <>
                    <Text style={styles.textLabelHeader}>Top Rated Movies</Text>
                    <FlatList data={topRated} keyExtractor={(item) => item.id.toString()} renderItem={({item,index}) => (
                       <Card style={styles.card} key={index}>
                         <View style={styles.centerLay}>
                            <Image source={{uri : POSTER_URL + item.poster_path}} style={styles.image}  />
                            <Text style={[styles.textLabel,styles.topHeightSpacer]}>{item.original_title}</Text>
                        </View>
                       </Card>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />
                    </>
                     : null
                }
                {
                    trendingDay ?
                    <>
                    <Text style={styles.textLabelHeader}>Trending Day Movies</Text>
                    <FlatList data={trendingDay} keyExtractor={(item) => item.id.toString()} renderItem={({item,index}) => (
                       <Card style={styles.card} key={index}>
                         <View style={styles.centerLay}>
                            <Image source={{uri : POSTER_URL + item.poster_path}} style={styles.image}  />
                            <Text style={[styles.textLabel,styles.topHeightSpacer]}>{item.original_title}</Text>
                        </View>
                       </Card>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />
                    </>
                     : null
                }
                {
                    trendingWeek ?
                    <>
                    <Text style={styles.textLabelHeader}>Trending Week Movies</Text>
                    <FlatList data={trendingWeek} keyExtractor={(item) => item.id.toString()} renderItem={({item,index}) => (
                       <Card style={styles.card} key={index}>
                         <View style={styles.centerLay}>
                            <Image source={{uri : POSTER_URL + item.poster_path}} style={styles.image}  />
                            <Text style={[styles.textLabel,styles.topHeightSpacer]}>{item.original_title}</Text>
                        </View>
                       </Card>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />
                    </>
                     : null
                }
            </View>
        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default Dashboard;
