import useMenu from "../../Hooks/useMenu";
import SectionsTitle from "../../Shared/SectionsTitle";
import FoodItems from "../OrderFood/FoodItems";

const RecommendsFood = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(item => item.category === "popular").slice(0,3);

    return (
        <section>
            <SectionsTitle
                subHeading={'Should Try'}
                heading={"chef recommends"}
            />
            <div className="mt-10">
                <FoodItems Items={popularItems} />
            </div>
        </section>
    );
};

export default RecommendsFood;