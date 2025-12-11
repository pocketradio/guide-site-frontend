import "../tailwind.css";
import ChecklistItem from "./ChecklistItem";

function Checklist() {
    return (
        <div>
            <p>Checklist</p>
            <ul className="w-full px-4">
                <ChecklistItem text="Moss Grotto 1" />
                <ChecklistItem text="Moss Grotto 2" />
            </ul>
        </div>
    );
}

export default Checklist;
