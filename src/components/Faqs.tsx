import { faqData } from '../Data'
import React from 'react'
import Faq from 'react-faq-component'

const styles = {
  rowTitleColor: '#D0D0D0',
  rowContentColor: '#CFCFCF',
  rowTitleTextSize: '24px',
  rowContentTextSize: '16px',
  arrowColor: '#D0D0D0',
  bgColor: '#111111',
}
const config = {
  animate: true,
  expandIcon: '+',
  collapseIcon: '-',
}
const Faqs = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-6">
      <div className="text-3xl p-3 font-secondary text-center  font-semibold my-10 text-base90 md:text-5xl md:my-20 md:text">
        Frequently Asked Questions
      </div>
      <div className="flex flex-col items-center justify-center bg-base">
        <div className="w-11/12 md:w-2/4">
          <Faq data={faqData} styles={styles} config={config} />
        </div>
      </div>
    </div>
  )
}

export default Faqs
