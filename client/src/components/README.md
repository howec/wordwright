Follow the convention of

    `[ComponentName].tsx`

LandingPage.js -- the page that holds the sidebar and everything else within
	Sidebar.js -- defines the "children" to populate SidebarContainer
		SidebarContainer.js -- constructs a container to hold the children to render within
		SidebarContainer.css
			ToggleHelper.js -- constructs a container that detects the toggle-state and renders contents accordingly
			ToggleHelper.css
				Fade.js -- constructs a container that animates a "fade" depending on the show-value
				Fade.css