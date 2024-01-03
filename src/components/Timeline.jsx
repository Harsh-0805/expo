import React from "react";

const Timeline = () => {
    return (
        <>
        <div className="text-white bg-[url('C:\Users\Lenovo\OneDrive\Documents\GitHub\expo\src\assets\red-grunge-background.jpg')]">
          <ul className="p-4 lg:p-8 dark:bg-gray-200 dark:text-gray-100">
	<li>
    <h1 className="text-3xl text-red-500">TIMELINE OF EXPO'23</h1>
		<article>
			<a rel="noopener noreferrer"  className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-200">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">REGISTRATION STARTS - </h3>
				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">January Start</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Startups will be evaluated on the basis of their market & customer base and their product showcasing capability.</p>
			</a>
		</article>
	</li>
	<li>
		<article>
			<a rel="noopener noreferrer"  className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">REGISTRATION ENDS - </h3>
				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">January End</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Deadline for the registration of startups for Expo.</p>
			</a>
		</article>
	</li>
	<li>
		<article>
			<a rel="noopener noreferrer"  className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">SIGNING OF MOU's - </h3>
				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">February start</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Shortlisted Startups will be signing the MOUs and further details will be communicated</p>
			</a>
		</article>
	</li>
	<li>
		<article>
			<a rel="noopener noreferrer"className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">LIVE EXHIBITION - </h3>
				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">1st week of FEB</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Awaiting Startups to showcase their amazing ideas and products.
</p>
			</a>
		</article>
	</li>
</ul>
</div>
        </>
    );
};


export default Timeline;