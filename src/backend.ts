import { serve } from "bun";
import dashboard from "../public/dashboard.html";

serve({
	routes: {
		"/": dashboard,
	},

	development: {
		console: true,
		hmr: true,
	},
});
