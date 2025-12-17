export default function TextBlock({ deleteBlock }) {
    return (
        <div className="bg-(--surface-background) p-2 rounded-md w-full text-(--text-color)">
            <p>Block</p>
            <button
                onClick={deleteBlock}
                className="text-amber-50 bg-neutral-600 w-25 rounded px-2 py-0.5"
            >
                Delete
            </button>
        </div>
    );
}
