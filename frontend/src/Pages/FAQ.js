import React from 'react'
import MainHeader from '../Components/MainHeader'
import { motion } from 'framer-motion'

const FAQ = () => {
  return (
    <motion.div animate={{width:"100%"}} initial={{width:0}} exit={{x:window.innerWidth,transition:{duration:1}}}>
      <div className='Faq'>
      <MainHeader />
        <div className='Faq-text'>
            <ul>
              <li>How do I get started with Cosmic Ledger?</li>
              <p>Creating an account with Cosmic Ledger is simple and straightforward. Simply visit our website and click on the "Sign Up" button. You can create an account using your email address. Once you've created an account, you can start adding your financial accounts and tracking your transactions.</p>

              <li>How do I use Cosmic Ledger to track my spending?</li>
              <p>Cosmic Ledger provides a variety of tools to help you track your spending. You can view your spending by category, merchant, or date. You can also set spending goals and track your progress towards them.</p>

              <li>How can I use Cosmic Ledger to save money?</li>
              <p>Cosmic Ledger can help you identify areas where you can cut back on your spending. You can also use Cosmic Ledger to set savings goals and track your progress towards them.</p>

              <li>How do I contact Cosmic Ledger customer support?</li>
              <p>You can contact Cosmic Ledger customer support by email or live chat. Our customer support team is available Monday through Friday from 9:00 AM to 5:00 PM IST.</p>
            </ul>
            </div>
            </div>
    </motion.div>
  )
}

export default FAQ