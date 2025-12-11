import "../tailwind.css";

function ChecklistItem({ text }) {
    return (
        <li className="text-black bg-stone-500 shadow-xs shadow-black  transition-all duration-450 my-2 box-border w-full rounded-md flex px-2 py-1">
            <input
                name={"checkbox-" + text}
                id={"checkbox-" + text}
                type="checkbox"
            />
            <label
                for={"checkbox-" + text}
                className="flex text-center justify-center w-full"
            >
                {text}
            </label>
        </li>
    );
}

export default ChecklistItem;
