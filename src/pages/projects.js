

export default function Projects() {
    return (
        <>
            <div className="bg-stone-600 bg-opacity-40 p-6 shadow-md rounded-xl border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-600">Projects</h3>
                <div className="mt-2 text-stone-50">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-lg font-semibold text-red-600">Project 1</h4>
                            <p>Project 1 Description</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-lg font-semibold text-red-600">Project 2</h4>
                            <p>Project 2 Description</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-lg font-semibold text-red-600">Project 3</h4>
                            <p>Project 3 Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}