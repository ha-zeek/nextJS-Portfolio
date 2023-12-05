// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
	const { body } = req;
	const { email, subject, message } = body;

	try {
		const data = await resend.emails.send({
			from: fromEmail,
			to: ["haziq8898@gmail.com"],
			subject: "Hello world",
			react: (
				<>
					<p>New Message submitted</p>
				</>
			),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}