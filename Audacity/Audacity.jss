<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Description</key>
	<string>Downloads the current release version of Audacity and builds a package. Then, uploads to the JSS.</string>
	<key>Identifier</key>
	<string>com.github.killer23d.jss.audacity</string>
	<key>Input</key>
	<dict>
		<key>CATEGORY</key>
		<string>BE-IT Software</string>
		<key>GROUP_NAME</key>
		<string>%NAME%-update-smart</string>
		<key>GROUP_TEMPLATE</key>
		<string>SmartGroupTemplate.xml</string>
		<key>NAME</key>
		<string>Audacity</string>
		<key>POLICY_CATEGORY</key>
		<string>Testing</string>
		<key>POLICY_TEMPLATE</key>
		<string>PolicyTemplate.xml</string>
		<key>SELF_SERVICE_DESCRIPTION</key>
		<string>Audacity is a free and open-source digital audio editor and recording application software.</string>
		<key>SELF_SERVICE_ICON</key>
		<string>Audacity.png</string>
		<key>Comment</key>
		<string>Note: PlistReader without variable injection in AutoPkg requires setting "version" input key to an empty string, as below.</string>
		<key>version</key>
		<string></string>
	</dict>
	<key>MinimumVersion</key>
	<string>0.2.0</string>
	<key>ParentRecipe</key>
	<string>com.github.killer23d.pkg.Audacity</string>
	<key>Process</key>
	<array>
		<dict>
			<key>Arguments</key>
			<dict>
				<key>category</key>
				<string>%CATEGORY%</string>
				<key>groups</key>
				<array>
					<dict>
						<key>name</key>
						<string>%GROUP_NAME%</string>
						<key>smart</key>
						<true/>
						<key>template_path</key>
						<string>%GROUP_TEMPLATE%</string>
					</dict>
				</array>
				<key>policy_category</key>
				<string>%POLICY_CATEGORY%</string>
				<key>policy_template</key>
				<string>%POLICY_TEMPLATE%</string>
				<key>prod_name</key>
				<string>%NAME%</string>
				<key>self_service_description</key>
				<string>%SELF_SERVICE_DESCRIPTION%</string>
				<key>self_service_icon</key>
				<string>%SELF_SERVICE_ICON%</string>
			</dict>
			<key>Processor</key>
			<string>JSSImporter</string>
		</dict>
	</array>
</dict>
</plist>
