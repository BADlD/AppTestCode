/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import MainButtonsTable from './MainButtonsTable';


type Props = {};
export default class App extends Component<Props> {
    state = {loading: true, drizzleState: null};

    componentDidMount() {
        const {drizzle} = this.props;

        this.unsubscribe = drizzle.store.subscribe(() => {
            const drizzleState = drizzle.store.getState();

            if (drizzleState.drizzleStatus.initialized) {
                this.setState({loading: false, drizzleState});
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.appName}>BADID</Text>
                </View>
                <View style={styles.buttons}>
                    <MainButtonsTable/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    appName: {
        fontSize: 45,
    },
    buttons: {
        flex: 3.3,
        // padding: 16,
        paddingTop: 30,
        justifyContent: 'space-between',
        padding: 5,
    },
});
