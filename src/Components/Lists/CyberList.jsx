import CourseBox from "../CourseBox/";

const CyberList = () => {
    return (
        <div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 *:z-0 *:mb-6 *:mr-6">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
            </div>
        </div>
    );
};

export default CyberList;
