import CourseBox from "../CourseBox/";

const FrontendList = ({custom=""}) => {
    return (
        <div>
            <div className={`items-center justify-center gap-4 *:z-0 *:mb-6 *:mr-6 mt-9 flex flex-wrap${custom}`}>
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
            </div>
        </div>
    );
};

export default FrontendList;
