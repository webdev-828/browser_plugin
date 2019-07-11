default:

chrome-watch:
	./node_modules/.bin/gulp watch --browser chrome --env development

firefox-watch:
	./node_modules/.bin/gulp watch --browser firefox --env development

safari-watch:
	./node_modules/.bin/gulp watch --browser safari --env development

opera-watch:
	./node_modules/.bin/gulp watch --browser opera --env development

chrome-build-development:
	./node_modules/.bin/gulp build --browser chrome --env development

firefox-build-development:
	./node_modules/.bin/gulp build --browser firefox --env development

safari-build-development:
	./node_modules/.bin/gulp build --browser safari --env development

opera-build-development:
	./node_modules/.bin/gulp build --browser opera --env development

chrome-build-staging:
	./node_modules/.bin/gulp build --browser chrome --env staging

firefox-build-staging:
	./node_modules/.bin/gulp build --browser firefox --env staging

safari-build-staging:
	./node_modules/.bin/gulp build --browser safari --env staging

opera-build-staging:
	./node_modules/.bin/gulp build --browser opera --env staging

chrome-dist-staging:
	./node_modules/.bin/gulp dist --browser chrome --env staging

firefox-dist-staging:
	./node_modules/.bin/gulp dist --browser firefox --env staging

safari-dist-staging:
	./node_modules/.bin/gulp dist --browser safari --env staging

opera-dist-staging:
	./node_modules/.bin/gulp dist --browser opera --env staging

chrome-build-production:
	./node_modules/.bin/gulp build --browser chrome --env production

firefox-build-production:
	./node_modules/.bin/gulp build --browser firefox --env production

safari-build-production:
	./node_modules/.bin/gulp build --browser safari --env production

opera-build-production:
	./node_modules/.bin/gulp build --browser opera --env production

chrome-dist-production:
	./node_modules/.bin/gulp dist --browser chrome --env production

firefox-dist-production:
	./node_modules/.bin/gulp dist --browser firefox --env production

safari-dist-production:
	./node_modules/.bin/gulp dist --browser safari --env production

opera-dist-production:
	./node_modules/.bin/gulp dist --browser opera --env production