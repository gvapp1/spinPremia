import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export const items = [
    {
        index: '1',
        desc: 'Te damos la bienvenida al programa que sí te premia',
    },
    {
        index: '2',
        desc: 'Gana puntos en todas tus compras y usalos como dinero',

    },
    {
        index: '3',
        desc: 'Te esperan recomenpensas, experiencias y beneficios exclusivos',
    }
];

export const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isCarousel = useRef<Carousel<any>>(null);
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
    return (
        <>
            <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000} // Tiempo de espera antes de iniciar el autoplay
                autoplayInterval={3000} // Intervalo entre cada item
                ref={isCarousel}
                onSnapToItem={(page) => setActiveIndex(page)}
                data={items}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            marginHorizontal: 40,
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>
                            {item.index}-{item.desc}
                        </Text>
                    </View>
                )}
                sliderWidth={400}
                itemWidth={350}
            />

            <Pagination
                activeDotIndex={activeIndex}
                carouselRef={isCarousel.current!}
                tappableDots={true}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                dotsLength={items.length}
                dotStyle={{
                    width: 30,
                    borderRadius: 18,
                    backgroundColor: "#0074FF",
                }}
                inactiveDotStyle={{
                    backgroundColor: "grey",
                }}
            />
        </>
    )
}