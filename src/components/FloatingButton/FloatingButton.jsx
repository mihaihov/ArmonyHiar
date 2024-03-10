import React from 'react'

const FloatingButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a href="https://mero.ro/p/armony?absp=company_details_deeplink&campaignId=&campaignSource=" target="_blank" rel="noopener noreferrer"
                className="bg-[#8fa99e] text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-yellow-600 transition duration-300 ease-in-out shadow-lg">
                <span className="text-lg mr-2">📆</span>
                Fa o rezervare
            </a>
        </div>
    )
}

export default FloatingButton