import { serve } from "bun";
import dashboard from "../../frontend/public/dashboard.html";

export async function bootstrapBackend() {
	serve({
		routes: {
			"/": dashboard,
			"/api/questions": {
				async GET() {
					return Response.json({
						questionAndAnswers: [
							{
								question: "comprehensive",
								answers: [
									"incomplete",
									"complete",
									"comprehensive",
									"complete",
								],
							},
						],
					});
				},
			},
		},
		development: {
			console: true,
			hmr: true,
		},
	});
}
