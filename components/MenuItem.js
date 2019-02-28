import React, {Fragment} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {addOrder, fetchDishes} from "../store/action";
import {connect} from "react-redux";

const MenuItem = (props) => {

    return (
        <TouchableOpacity onPress={()=>props.addOrder(props.menu[props.item.item])}>
            <View style={styles.item_div} key={Math.random()}>
                <Image key={Math.random()} source={{uri: props.menu[props.item.item].url}} style={styles.img}
                       alt={props.menu[props.item.item].name}/>
                <View key={props.item.index} style={styles.text_div}>
                    <Text key={Math.random()} style={styles.text}>{props.menu[props.item.item].name}</Text>
                    <Text key={Math.random()} style={styles.text}>{props.menu[props.item.item].cost} сом</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({



    img: {
        height: 170,
        width: 170,
    },
    item_div: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 20,
    },
    text_div: {
        padding: 20,
    },
    text: {
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 20,
        maxWidth: 150,
    },
});

const mapStateToProps = state => {
    console.log('Main js 117 state ', state);
    return {
        menu: state.menu,
    }
};

const mapDispatchToProps = dispatch => {
    console.log('fetchDishes');
    return {
        addOrder: (order) => dispatch(addOrder(order)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);