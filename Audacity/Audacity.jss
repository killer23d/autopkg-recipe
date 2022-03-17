<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Description</key>
	<string>Downloads the current release version of Audacity via the project website. The downloads redirect to a fosshub.com download page, which is also searched for a download link. Permission has been received for SD38 to automate the download.</string>
	<key>Identifier</key>
	<string>com.github.killer23d.jss.audacity</string>
	<key>Input</key>
	<dict>
		<key>CATEGORY</key>
		<string>Packages</string>
		<key>GROUP_NAME</key>
		<string></string>
		<key>GROUP_TEMPLATE</key>
		<string></string>
		<key>NAME</key>
		<string>Audacity</string>
		<key>POLICY_CATEGORY</key>
		<string></string>
		<key>POLICY_TEMPLATE</key>
		<string></string>
		<key>SELF_SERVICE_DESCRIPTION</key>
		<string></string>
		<key>SELF_SERVICE_ICON</key>
		<string></string>
		<key>Comment</key>
		<string>Note: PlistReader without variable injection in AutoPkg requires setting "version" input key to an empty string, as below.</string>
		<key>version</key>
		<string></string>
	</dict>
	<key>MinimumVersion</key>
	<string>0.2.0</string>
	<key>ParentRecipe</key>
	<string>com.github.rustymyers.download.Audacity</string>
	<key>ParentRecipeTrustInfo</key>
	<dict>
		<key>non_core_processors</key>
		<dict>
			<key>com.github.rustymyers.SharedProcessors/FossHubURLProvider</key>
			<dict>
				<key>git_hash</key>
				<string>1f5b81db92fc2ad298273d9ce9e4500beab311f7</string>
				<key>path</key>
				<string>/Users/Shared/AutoPkgr/Repo/com.github.autopkg.rustymyers-recipes/SharedProcessors/FossHubURLProvider.py</string>
				<key>sha256_hash</key>
				<string>4d65f0e4786d7dae7a88e91f85fa75d9372a9deca771d3cd03ce1c714ec727f9</string>
			</dict>		
			<key>Processor</key>
			<string>JSSImporter</string>
		</dict>
    </dict>
</dict>
</plist>
