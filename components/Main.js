import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';
import {fetchDishes, toggleModal} from "../store/action";
import MenuItem from "./MenuItem";
import ModalW from "./ModalW";


class Main extends React.Component {

    state = {
        total: null,
    };

    componentDidMount() {
        this.props.fetchDishes();
    }

    _onPressButton = (item) => {
    };

    render() {
        this.props.menu ? console.log('Main js 45', Object.values(this.props.menu)) : null;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.logo_text}>Turtle Pizza</Text>
                </View>
                <View style={styles.separator}/>

                <View style={styles.dishes_list}>
                    {this.props.menu ? <FlatList
                        data={Object.keys(this.props.menu)}
                        renderItem={(item) => {
                            console.log('Line 27 Main js=========================== ' + item.item);
                            return <MenuItem item={item} key={item.item}/>
                        }}
                        keyExtractor={item => item.item}/> : null}
                </View>

                <View style={styles.separator}/>
                <View styles={styles.bottom}>
                    <Text style={styles.logo_text}>Order total : {}</Text>
                    <Button title="check out" onPress={this.props.modalVisible}>Checkout</Button>
                </View>
                {this.props.showModal ? <ModalW/> : null}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30,
        padding: 20,
    },
    dishes_list: {
        flexDirection: 'column',
        height: 520,
    },
    logo_text: {
        fontSize: 25,
    },
    separator: {
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    bottom: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

const mapStateToProps = state => {
    console.log('Main js state state state state state state state ', state);
    return {
        menu: state.menu,
        showModal: state.modalVisible,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        modalVisible: () => dispatch(toggleModal()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);