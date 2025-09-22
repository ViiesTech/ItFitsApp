/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../utils';
import LineBreak from './LineBreak';

const steps = [
    { label: 'Order', date: '09-09-25' },
    { label: 'To Ship', date: '09-09-25' },
    { label: 'Received', date: '09-09-25' },
    { label: 'Rate', date: '09-09-25' },
];

const Stepper = ({currentStep = 1}) => {
    // const currentStep = 2; // "To Ship"

    return (
        <View style={styles.container}>
            {/* Circles + Lines */}
            <View style={[styles.row, { paddingHorizontal: responsiveWidth(5) }]}>
                {steps.map((step, index) => {
                    const isCompleted = index < currentStep;
                    const isActive = index === currentStep;

                    return (
                        <React.Fragment key={index}>
                            {/* Circle */}
                            <View
                                style={[
                                    styles.circle,
                                    isCompleted && styles.circleCompleted,
                                    isActive && styles.circleActive,
                                ]}
                            >
                                {isActive && <View style={styles.innerCircle} />}
                            </View>

                            {/* Line (except last) */}
                            {index < steps.length - 1 && (
                                <View
                                    style={[
                                        styles.line,
                                        index < currentStep ? styles.lineActive : styles.lineInactive,
                                    ]}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </View>

            {/* Labels + Dates */}
            <View style={[styles.row, { width: responsiveWidth(100) }]}>
                {steps.map((step, index) => {
                    const isActive = index === currentStep;
                    return (
                        <View style={styles.labelWrapper} key={index}>
                            <Text
                                style={[
                                    styles.label,
                                    isActive && { fontWeight: 'bold', color: '#000' },
                                ]}
                            >
                                {step.label}
                            </Text>
                            <LineBreak space={1} />
                            <Text style={styles.date}>{step.date}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const CIRCLE_SIZE = 20;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        borderWidth: 2,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    circleCompleted: {
        borderColor: '#ccc',
        backgroundColor: '#ccc',
    },
    circleActive: {
        borderColor: '#000',
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: '#000',
    },
    line: {
        flex: 1,
        height: 2,
        marginHorizontal: 4,
    },
    lineActive: {
        backgroundColor: '#ccc',
    },
    lineInactive: {
        backgroundColor: '#ccc',
    },
    labelWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: responsiveHeight(1.5),
    },
    label: {
        fontSize: responsiveFontSize(1.8),
        color: '#666',
    },
    date: {
        fontSize: responsiveFontSize(1.5),
        color: '#888',
    },
});

export default Stepper;
