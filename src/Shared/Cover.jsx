
const Cover = ({ BGImage, subheading, heading, style }) => {
    const styles = {
        backgroundImage: ` url(  ${BGImage} )`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    }
    return (
        <div style={styles} className="hero h-[800px] p-28">
            <div className=" text-center py-24 px-32 w-full text-white  bg-[#15151599] space-y-2">
                <h3 className={` ${style?.heading ? style.heading : 'text-5xl'}`}>{heading}</h3>
                <p className={` ${style?.subheading ? style.subheading : 'text-base font-semibold'}`}>{subheading}</p>
            </div>
        </div>
    );
};

export default Cover;