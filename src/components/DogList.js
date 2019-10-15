import React from 'react'
import {connect} from 'react-redux'
import { CircleSpinner } from "react-spinners-kit";

import { getData } from '../actions'

import Dog from './DogCard'


const DogList = props => {
    console.log('DOGprops', props)
    return (
        <>
            <h1>Cute Dog API</h1>
            <p>WARNING GENERATES 1000 CUTE PUPPIES! Can you resist?</p>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <CircleSpinner
                    size={30}
                    color="#686769"
                />
                ):(
                    'Get photos'
                )}
            </button>
            {props.dogs &&
            props.dogs.map((id) => {
                return (
                <div>
                    <img src={id}/>
                </div>
                )
            })}
        </>
    )
}
const mapStateToProps = state => {
    console.log('stateHERE', state.dogs)
    return {
        isLoading: state.isLoading,
        dogs: state.dogs
    }
}
export default connect(mapStateToProps, { getData })(DogList)