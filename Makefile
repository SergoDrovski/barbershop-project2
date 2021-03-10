install:
	npm install


lint:
	npx stylelint ./src/styles/*.css
	npx htmlhint ./src/*.html


dep:
	git add .
	git commit -m "file changes"
	git push origin main


comp:
	npx sass ./src/styles/*.scss ./src/styles/style.css
