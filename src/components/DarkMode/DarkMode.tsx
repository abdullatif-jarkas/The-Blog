import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleDarkMode } from "../../redux/slice";
import { useEffect } from "react";


export default function DarkMode() {
    const { darkMode, icons } = useSelector((state: RootState) => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            dispatch(toggleDarkMode()); 
            document.documentElement.classList.add('dark'); 
        } else {
            document.documentElement.classList.remove('dark'); 
        }
    }, [dispatch]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <button onClick={handleToggle} className="min-h-10 min-w-24 bg-dark dark:bg-white text-white flex justify-center items-center rounded-4xl gap-x-4">
            <img className="w-6" src={icons.sun} alt="sun" />
            <img className="w-6" src={icons.moon} alt="moon" />
        </button>
    );
}
