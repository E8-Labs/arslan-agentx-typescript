import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface PhoneNumber {
  phoneNumber: string;
  // Add other properties if they exist in selectedNumber
}

interface PurchasedNumber {
  locality?: string;
  region?: string;
  // Add other properties if they exist in the purchased number data
}

interface PurchaseNumberSuccessProps {
  handleContinue: () => void;
  selectedNumber: PhoneNumber;
}

const PurchaseNumberSuccess: React.FC<PurchaseNumberSuccessProps> = ({ handleContinue, selectedNumber }) => {
    const [purchaseNumber, setPurchaseNumber] = useState<PurchasedNumber | null>(null);

    useEffect(() => {
        const Data = localStorage.getItem("numberPurchased");
        if (Data) {
            try {
                const localData: PurchasedNumber = JSON.parse(Data);
                setPurchaseNumber(localData);
            } catch (error) {
                console.error("Error parsing purchased number data:", error);
            }
        }
    }, []);

    const styles = {
        heading: {
            fontSize: 15,
            fontWeight: "500",
            color: "#00000060"
        } as const,
        details: {
            fontSize: 16,
            fontWeight: "500"
        } as const
    }

    return (
        <div className="p-4">
            <div style={{
                fontSize: 24,
                fontWeight: "700",
                textAlign: "center"
            }}>
                Success!
            </div>
            <div style={{
                fontSize: 20,
                fontWeight: "400", 
                textAlign: "center"
            }}>
                {`You've claimed a number!`}
            </div>
            <div className='border-2 border-green text-green p-2 rounded-lg mt-6 flex flex-row items-center gap-4'>
                <Image 
                    src={"/assets/successTick.png"} 
                    height={18} 
                    width={18} 
                    alt="Success tick icon" 
                />
                <div style={{ fontWeight: "600", fontSize: 17 }}>
                    Number purchase successful!
                </div>
            </div>

            <div className='flex flex-row justify-between items-center mt-8 w-full'>
                <div style={styles.heading}>Selected State</div>
                <div style={styles.details}>
                    {purchaseNumber?.locality} {purchaseNumber?.region}
                </div>
            </div>

            <div className='flex flex-row justify-between items-center mt-12 w-full'>
                <div style={styles.heading}>Number Choosen</div>
                <div style={styles.details}>{selectedNumber.phoneNumber}</div>
            </div>

            <div className='flex flex-row justify-between items-center mt-12 w-full'>
                <div style={styles.heading}>Amount</div>
                <div style={styles.details}>$2.00/Mo</div>
            </div>

            <button
                className='w-full bg-purple rounded-xl h-[50px] mt-8'
                style={{ ...styles.heading, color: "white" }}
                onClick={handleContinue}
            >
                Continue
            </button>
        </div>
    )
}

export default PurchaseNumberSuccess