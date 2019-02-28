import React from 'react';
import {StyleSheet, Text, View, Image, Modal, TouchableHighlight, TextInput} from 'react-native';
import {changeValue, fetchDishes, toggleModal} from "../store/action";
import {connect} from "react-redux";

class ModalW extends React.Component {

    state = {
        name: '',
        address: '',
        phone: '',
    };

    changeName =(text) => {
        console.log('e current Traget ttttttttttttttttttt', text);
        this.setState({name: text});
    };

    changeAddress =(text) => {
        console.log('e current Traget ttttttttttttttttttt', text);
        this.setState({address: text});
    };

    changePhone =(text) => {
        console.log('e current Traget ttttttttttttttttttt', text);
        this.setState({phone: text});
    };

    render() {
        return (
            <View style = {styles.container}>
                <Modal animationType = {"slide"} transparent = {false}
                       visible = {this.props.modalVisible}
                       onRequestClose = {() => { console.log("Modal has been closed.") } }>

                    <TextInput style = {styles.input}
                               placeholder = "Ваше имя"
                               name="name"
                               value={this.state.name}
                               onChangeText = {text=>this.changeName(text)}/>

                    <TextInput style = {styles.input}
                               placeholder = "Ваш адрес"
                               name="address"
                               value={this.state.address}
                               onChangeText = {text=>this.changeAddress(text)}/>

                    <TextInput style = {styles.input}
                               placeholder = "Ваш телефон"
                               name="phone"
                               value={this.state.phone}
                               onChangeText = {text=>this.changePhone(text)}/>


                    <View style = {styles.modal}>

                        <TouchableHighlight onPress = {() => {
                            this.props.toggleModal(!this.props.modalVisible)}}>

                            <Text style = {styles.text}>Close Modal</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>

                <TouchableHighlight onPress = {() => {this.props.toggleModal(true)}}>
                    <Text style = {styles.text}>Open Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }


}

const styles = StyleSheet.create ({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#dfdef7',
        padding: 100,
    },
    text: {
        color: '#000',
        marginTop: 10
    },
    input: {
        marginTop: 25,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        marginHorizontal: 10,
    },
});

const mapStateToProps = state => {

    return {
        modalVisible: state.modalVisible,
        state: state,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal()),
        changeValue: (e) => dispatch(changeValue(e)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalW);