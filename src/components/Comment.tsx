import { CommentType } from "@/types/CommentType";
import { PiUser, PiDot } from "react-icons/pi";

type CommentProps = {
	comment: CommentType;
};

export default function Comment({ comment }: CommentProps) {
	const { name, body, email } = comment;

	return (
		<li className="border p-3 flex gap-3 items-center rounded-xl">
			<figure className="aspect-square w-12 self-start flex justify-center items-center text-3xl p-2 rounded-full bg-gray-100">
				<PiUser />
			</figure>
			<div>
				<p className="font-normal flex flex-col sm:flex-row sm:gap-1 sm:items-center mb-2 sm:mb-0">
					{name} <PiDot className="hidden sm:block text-xl" />
					<span className="text-gray-400 text-xs"> {email}</span>
				</p>
				<p>{body}</p>
			</div>
		</li>
	);
}
