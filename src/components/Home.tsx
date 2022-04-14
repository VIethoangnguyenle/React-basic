import React from 'react'
import { About } from './home/About'
import { Feature } from './home/Feature'
import { Hero } from './home/Hero'
import { Question } from './home/Question'
import { Test } from './home/Test'
import { Work } from './home/Work'

export const Home = () => {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <Feature></Feature>
            <Work></Work>
            <Question></Question>
            <Test></Test>
        </>
    )
}
