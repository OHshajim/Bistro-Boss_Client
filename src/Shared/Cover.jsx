import { Parallax} from 'react-parallax';

const Cover = ({ BGImage, subheading, heading, style }) => {
    return (
        <Parallax
            blur={{ min: -90, max: 70 }}
            bgImage={BGImage}
            bgImageAlt="food cover"
            strength={300}
        >
            <div  className="hero h-[750px] p-28">
                <div className=" text-center py-24 px-32 w-full text-white  bg-[#15151599] space-y-2 max-w-6xl">
                    <h3 className={` ${style?.heading ? style.heading : 'text-5xl'}`}>{heading}</h3>
                    <p className={` ${style?.subheading ? style.subheading : 'text-base font-semibold'}`}>{subheading}</p>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;