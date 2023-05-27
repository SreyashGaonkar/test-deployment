import Image from "next/image"

export const getRating = (skill: number) => {

    return (
        <>
            {
                skill < 1 &&
                <div className="order-first"><Image src={'/images/blankstar.png'} width={17}
                    height={17} alt="" /></div>

            }
            {
                skill > 1 && skill < 2 &&
                <div className="order-first"><Image src={'/images/orangestar.png'} width={17}
                    height={17} alt="" /></div>

            }
            {
                skill > 2 && skill < 3 &&
                <div className="order-first"><Image src={'/images/bluestar.png'} width={17}
                    height={17} alt="" /></div>
            }
            {
                skill > 3 && skill < 4 &&
                <div className="order-first"><Image src={'/images/greenstar.png'} width={17}
                    height={17} alt="" /></div>
            }
            {
                skill > 4 && skill < 5 &&
                <div className="order-first"><Image src={'/images/violetstar.png'} width={17}
                    height={17} alt="" /></div>
            }
        </>
    )

}