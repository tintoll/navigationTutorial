import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';


import tabScreen1 from './tabScreen1';
import tabScreen2 from './tabScreen2';
import tabScreen3 from './tabScreen3';
import tabScreen4 from './tabScreen4';
/*
export default class AppNavigator extends React.Component {
  render() {
    return (
      <View>
        <Text>pro</Text>
      </View>
    );
  }
}
*/
// 아래와 같이 TabNavigator를 생성한 객체를 넘겨준다.
export default  AppNavigator = TabNavigator({
  Screen1 : {
    screen : tabScreen1,    
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab1</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),
		}
  },
  Screen2 : {
    screen : tabScreen2,    
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab2</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),
		}
  },
  Screen3 : {
    screen : tabScreen3,    
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab3</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),
		}
  },
  Screen4 : {
    screen : tabScreen4,    
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab4</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),
		}
  },
}, 
  {
  	initialRouteName: 'Screen1', // 최초 스크린 이름
		tabBarPosition: 'bottom',   // 탭바 위치 
		tabBarOptions: {				
			activeTintColor: '#4890d2', 	// 활성화 색상
			inactiveTintColor: '#8a8c99',  // 비활성화 색상    
			style: {
				borderTopColor: '#e2e6ec',
				borderTopWidth: 1,
        backgroundColor: '#f6f6f6',                
			},      
			showIcon: true
		},
		lazy: true
	}
);


const styles = StyleSheet.create({
	wrapper: {
		flex: 1,		
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTextWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 20
	},
	tabText: {
		fontSize: 12
	}
})