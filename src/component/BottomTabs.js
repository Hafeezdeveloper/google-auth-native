import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import user from '../../assets/message.png';
import userActive from '../../assets/111.png'; // Assuming you have this
import orders from '../../assets/Setting.png';
import ordersActive from '../../assets/211.png'; // Assuming you have this
import home from '../../assets/home.png';
import homeActive from '../../assets/311.png'; // Assuming you have this
import bottom1 from '../../assets/31.png';
import bottom2 from '../../assets/11.png';
import bottom3 from '../../assets/21.png';
// import bottom1Active from '../../assets/bottom1Active.png'; // Assuming you have this

const BottomTabs = ({ activeTab, onChangeTab }) => {
    const isFocused = useIsFocused();
    const route = useRoute();
    const navigation = useNavigation();

    const [tabs, setTabs] = useState([
        { 
            icon: home, 
            activeIcon: homeActive,
            activeBg: bottom1, 
            // activeBg: bottom1Active,
            label: 'Home', 
            screen: 'Home', 
        },
        { 
            icon: user, 
            activeIcon: userActive,
            activeBg: bottom2, 
            // activeBg: bottom1Active,
            label: 'Exam', 
            screen: 'Exam' 
        },
        { 
            icon: orders, 
            activeIcon: ordersActive,
            activeBg: bottom3, 
            // activeBg: bottom1Active,
            label: 'Profile', 
            screen: 'Profile' 
        },
    ]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', () => {
            const currentRouteName = route.name;
            const activeTabIndex = tabs.findIndex((tab) => tab.screen === currentRouteName);
            onChangeTab(activeTabIndex);
        });
        return unsubscribe;
    }, [navigation, route]);

    const handleTabPress = (index) => {
        const selectedTab = tabs[index];
        onChangeTab(index);
        navigation.navigate(selectedTab.screen);
    };

    return (
        <ImageBackground source={tabs[activeTab]?.activeBg}>  
            <View style={styles.container}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleTabPress(index)}
                        style={[
                            styles.tab,
                            activeTab === index && styles.activeTab,
                        ]}
                    >
                        <Image
                                style={[
                                    styles.icon,
                                    activeTab === index ? 
                                        (index === 0 ? {top: -15, left: 5, width: 20} : 
                                        (index === 1 ? {top: -15, left: 8, width: 20} : 
                                        {top: -15, left: -5, width: 20})) 
                                    : {}
                                ]}
                            source={activeTab === index ? tab.activeIcon : tab.icon}
                        />
                        {/* {activeTab === index && <Image style={styles.bottomBar} source={tab.bg} />} */}
                    </TouchableOpacity>
                ))}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        // backgroundColor: '#0D0B26',
        paddingHorizontal: 16,
        minWidth: 270,
        bottom: -2,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    tab: {
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    label: {
        marginTop: 4,
        fontSize: 12,
    },
    activeTab: {
        paddingHorizontal: 15,
        color: 'white',
        borderRadius: 6,
    },
    icon: {
        width: 20,
        height: 40,
        // marginRight:5,
        resizeMode: 'contain',
        marginBottom: 8
    },
    bottomBar: {
        width: '100%', // or adjust as needed
        height: 5,     // or adjust as needed
        resizeMode: 'stretch',
    },
    getHelpTab: {
        backgroundColor: '#E85555',
        borderRadius: 15,
        paddingTop: 10,
        bottom: 12,
        paddingBottom: 8
    }
});

export default BottomTabs;
