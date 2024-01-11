import { PiCircleNotch } from "react-icons/pi";

export default function loading() {
	return (
		<div className="flex justify-center items-center text-2xl min-h-screen text-gray-400 flex-col gap-2">
			<PiCircleNotch className="animate-spin" /> loading blog...
		</div>
	);
}
