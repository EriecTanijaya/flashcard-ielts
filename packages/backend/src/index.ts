import { serve } from "bun";
import dashboard from "../../frontend/public/dashboard.html";

export async function bootstrapBackend() {
	serve({
		routes: {
			"/": dashboard,
		},
	});
}
