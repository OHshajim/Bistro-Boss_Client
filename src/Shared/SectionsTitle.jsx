
const SectionsTitle = ({subHeading, heading}) => {
    return (
        <div className="flex flex-col  items-center justify-center">
            <p className="text-yellow-600">----{subHeading}----</p>
            <h3 className="text-4xl border-y-4 uppercase py-4 border-[#E8E8E8] mt-4">{heading}</h3>
        </div>
    );
};

export default SectionsTitle;