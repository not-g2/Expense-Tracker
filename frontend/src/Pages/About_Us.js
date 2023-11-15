import React from 'react'
import MainHeader from '../Components/MainHeader'
import { motion } from 'framer-motion'

const About_Us = () => {
  return (
    <motion.div className='aboutUsPage' animate={{width:"100%"}} initial={{width:0}} exit={{x:window.innerWidth,transition:{duration:1}}}>
      <MainHeader />
    <div container="About_Uscont" className='About_Uscont'>
       <div container="Heading_About_Us" className='Heading_About_Us'>
        <h1>About Us</h1>

        </div> 
        <div container="Content_About_Us">
            <h2>
Introducing Cosmic Ledger: Your Personal Financial Guardian</h2>
            <p>In the realm of personal finance, Cosmic Ledger emerges as your trusted companion, meticulously tracking your financial transactions and guiding you through the complexities of your financial cosmos. Inspired by the Egyptian god Thoth, the deity of knowledge, wisdom, and writing, Cosmic Ledger embodies the essence of financial clarity and organization. </p>
            <p>Just as Thoth inscribed every action and decision upon the celestial tablets, Cosmic Ledger meticulously chronicles your financial journey, ensuring that every penny is accounted for and every decision is made with informed precision. Whether you're navigating the intricacies of personal finances or managing the complexities of business ventures, Cosmic Ledger stands as your financial guardian, ensuring that your financial path is illuminated with the brilliance of financial literacy and empowered decision-making.</p>

            <h2>Your Meticulously Organized Financial Journey </h2>
            <p>Imagine your financial transactions as celestial bodies, each charting a unique course through the vast expanse of your financial cosmos. Cosmic Ledger meticulously maps these transactions, creating a comprehensive constellation of your financial activities. With every transaction recorded, Cosmic Ledger provides a clear and organized view of your financial landscape, enabling you to make informed decisions that align with your financial goals.</p>

            <h2>Financial Clarity illuminated by Knowledge</h2>
            <p>Just as Thoth enlightened the gods with his wisdom, Cosmic Ledger empowers you with financial clarity. Through its comprehensive reporting and intuitive interface, Cosmic Ledger transforms your financial data into actionable insights, helping you identify patterns, understand trends, and make informed decisions that align with your financial aspirations.</p>

            <h2>Empowered Decision-Making, Guided by Wisdom</h2>
            <p>Cosmic Ledger is more than just a financial tracker; it's a personal financial advisor, guiding you towards financial well-being. With it's advanced analytics, Cosmic Ledger helps you anticipate future financial needs, plan for upcoming expenses, and make informed investment decisions.</p>


            <h2>Embrace Financial Harmony with Cosmic Ledger</h2>
            <p>In the ever-evolving realm of finance, Cosmic Ledger stands as your unwavering companion, harmonizing your financial transactions and guiding you towards a brighter financial future. Just as Thoth orchestrated the celestial movements, Cosmic Ledger orchestrates your financial journey, ensuring that every decision is made with clarity, wisdom, and empowerment.</p>    

            <a href="">Visit Cosmic Ledger today and embark on your journey of financial enlightenment.</a>

        </div>
    </div>
    </motion.div>
  )
}

export default About_Us