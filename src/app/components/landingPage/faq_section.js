"use client"
import { useState } from "react";

const FAQSection = () => {
  const [selectedIndex, setselectedIndex] = useState(null);
    return ( <div>
        <div className="text-center mb-10 ">
            <h1 className="font-medium w-12/12 text-4xl  me-auto">
             Frequent asked questions
                  </h1>
                  <p className="pe-5 text-lg mt-4 w-6/12 mx-auto">
                    If question is not listed below, feel free to chat with our customer service
                  </p>
                  <div className="w-8/12 mx-auto mt-10">
                  {
                    [
                      {
                          "title": "Can I customize the system to fit my church's specific needs?",
                          "description": "Absolutely! Our church management system is designed with flexibility in mind. You can customize various aspects such as member categories, event types, communication channels, and more to align with the unique requirements of your church."
                      },
                      {
                          "title": "Is technical support available if I encounter any issues?",
                          "description": "Yes, we provide comprehensive technical support to ensure a smooth experience for our users. Our dedicated support team is available to assist you with any questions, concerns, or technical difficulties you may encounter while using our system."
                      },
                      {
                          "title": "How secure is my church's data on your system?",
                          "description": "We understand the importance of keeping your church's data secure and confidential. Our system employs robust security measures, including encryption protocols and regular data backups, to safeguard your information against unauthorized access, loss, or theft."
                      },
                      {
                          "title": "Can multiple administrators access the system simultaneously?",
                          "description": "Yes, our system supports multiple user accounts with varying levels of access permissions. This means that different administrators can work collaboratively and access the system simultaneously, facilitating efficient church management."
                      },
                      {
                        "title": "Can I import existing data from my church's current system into yours?",
                        "description": "Yes, our system provides options for importing data from various formats such as CSV files or through integration with other compatible systems. This facilitates a smooth transition and ensures that you can continue seamlessly with your church management processes."
                    },
                    {
                        "title": "Is there a limit to the number of members or attendees I can manage with your system?",
                        "description": "No, our system is scalable and can accommodate churches of all sizes. Whether you have a small congregation or a large ministry, our system can efficiently handle member and attendee management without any restrictions on the number of entries."
                    },
                    {
                        "title": "Are there training resources available to help me and my team get started with your system?",
                        "description": "Yes, we provide comprehensive training resources including video tutorials, user guides, and live webinars to help you and your team familiarize yourselves with our system's features and functionalities. Our goal is to ensure that you can maximize the benefits of using our system."
                    },
                    {
                        "title": "Can I access the system from multiple devices and locations?",
                        "description": "Absolutely! Our system is cloud-based, which means you can access it from any internet-connected device, whether it's a desktop computer, laptop, tablet, or smartphone. This allows for convenient access to your church management tools anytime, anywhere."
                    },
                    {
                        "title": "Does your system offer reporting and analytics capabilities?",
                        "description": "Yes, our system includes robust reporting and analytics features that provide valuable insights into various aspects of your church's operations. From attendance trends to financial analysis, you can generate detailed reports to inform decision-making and optimize your ministry strategies."
                    }
                  ]
                  .map((item,index)=>{
                      return <div key={index} onClick={()=>{
                        if(index==selectedIndex){
                          setselectedIndex(null)
                        }else{
                          setselectedIndex(index)
                        }
                      }} className="flex mb-2 px-4 justify-between cursor-pointer py-3 border border-slate-300 rounded">
                       <div className="flex flex-col items-start justify-start">
                       <h1 className="font-medium text-xl text-start">{item.title}</h1>
                        {selectedIndex==index&&<p className="text-lg text-start mt-2">
                          {item.description}
                          </p>}
                       </div>


                         {
                          selectedIndex == index?<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                          </svg>
                      } 

                      </div>
                    })
                  }
                  </div>
                  
            </div>
    </div> );
}
 
export default FAQSection;