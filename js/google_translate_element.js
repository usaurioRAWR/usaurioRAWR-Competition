function googleTranslateElementInit() {
	new google.translate.TranslateElement
	(
		{
			pageLanguage: 'es',
			includedLanguages: 'es,en,pt,ca,gl,eu',
			autoDisplay: 'true',
			layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
		}, 
		'google_translate_element'
	);
 }